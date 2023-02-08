import React, { useEffect } from 'react';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import Logo from './Logo';
import { Link } from 'gatsby';
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

import './Header.scss'

export const SmoothLink = ({ to, id, children }) => (
  <Link
    to={`/${to || id}`}
    onClick={() => {
      let contact = document.getElementById(to.replace('#', ''));
      let dims = contact?.getBoundingClientRect() - 100 || 0;
      contact &&
        window.scrollTo(window.scrollX, dims.top);
    }}
  >
    {children}
  </Link>
)

const Header = () => {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header class="sticky top-0 z-30 w-full shadow-xl shadow-blue-600/20 sm:px-4">
      <nav class="py-3 bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <Logo />
          </a>
          <div class="flex items-center lg:order-2">
            <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              <SmoothLink to="#contact-us">
                <Button className="text-sm contact-us">Get a Quote</Button>
              </SmoothLink>
            </a>

            <div className='social-media'>
              <div className='whatsapp'>
                <a href="https://api.whatsapp.com/send?phone=+97455066175">
                  <BsWhatsapp />
                </a>
              </div>
              <div className='linkedin'>
                <a href='https://www.linkedin.com/company/whitespace-advisory-consulting/'>
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div class=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <SmoothLink className="px-4" to="#home">
                  Home
                </SmoothLink>
              </li>
              <li>
                <SmoothLink className="px-4" to="#overview">
                  About Us
                </SmoothLink>
              </li>
              <li>
                <SmoothLink className="px-4" to="#services">
                  Services
                </SmoothLink>
              </li>
              <li>
                <SmoothLink className="px-4" to="#testimonial">
                  Testimonial
                </SmoothLink>
              </li>
              <li>
                <SmoothLink className="px-4" to="#contact-us">
                  Contact Us
                </SmoothLink>
              </li>

            </ul>


          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;
