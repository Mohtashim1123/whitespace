import React from 'react';

import { services } from "../constants/services";
import Card from "./Card";
import { FaBeer } from "react-icons/fa";

import './Services.scss';
import { SmoothLink } from './layout/Header';

import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    x: 2000
  },
  onscreen: {
    x: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1
    }
  }
};


const Services = () => (
  <div className="Services container mx-auto text-center pb-20">

    <h1 className='head-services'>Our Services</h1>
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <div className="flex flex-wrap">
          {services.map(({ heading, info, id, icon: Icon, link }) => (
            <div className="flex-1" key={id}>
              <Card className="mb-8 card mx-20">
                <div className='py-5 icon'>
                  <div>
                    {<Icon />}
                  </div>
                </div>
                <div className="head">
                  <h1>{heading}</h1>
                </div>

                <p className="my-4">{info}</p>
                <SmoothLink to={link} >View More</SmoothLink>
              </Card>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>

  </div>
)

export default Services;
