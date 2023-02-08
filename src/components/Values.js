import React from 'react';
import SplitSection from './SplitSection';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import Innovative from '../assets/innovative.png';
import Integrity from '../assets/integrity.png';
import Collaboration from '../assets/collaboration.webp';
import Respect from '../assets/respect.png';
import Excellence from '../assets/excellence.png';
import CSR from '../assets/csr.png';

import './Values.scss'

const Values = () => (
  <div className='Values'>
    <h1>
      Our Values
    </h1>
    <div className='intro'>
      <p>
        We are committed to upholding a set of values
        that guide everything we do. These values are
        at the core of who we are and how we do
        business, and they shape our relationships with
        our clients, our employees, and our community.
      </p>
    </div>

    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Excellence</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We are committed to delivering
            the highest-quality services and solutions to
            our clients. We strive for excellence in
            everything we do, from the way we conduct
            ourselves to the results we deliver. We
            believe that by setting high standards for
            ourselves and our work, we can deliver the
            best possible results for our clients.
          </p>
        </div>
      }
      secondarySlot={<img src={Excellence} />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Integrity
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We believe that honesty and
            integrity are the foundation of strong
            relationships. We are committed to being
            honest, transparent, and ethical in
            everything we do. We believe that building
            trust with our clients, our team, and our
            community is essential to our success, and
            we work hard to earn and maintain that
            trust.
          </p>
        </div>
      }
      secondarySlot={<img src={Integrity} />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Collaboration
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We believe that collaboration
            is key to success, and we work closely with
            our clients, our team, and our community to
            achieve our goals. We value diverse
            perspectives and believe that by bringing
            different viewpoints together, we can find
            the best solutions for our clients.
          </p>
        </div>
      }
      secondarySlot={<img src={Collaboration} />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Respect
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We respect our clients, our team,
            and our community, and we value diversity and inclusion. We believe that by
            treating others with respect and
            compassion, we can create a positive and
            supportive environment for everyone.
          </p>
        </div>
      }
      secondarySlot={<img src={Respect} />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Innovation
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We are committed to staying
            at the forefront of our industry and bringing
            new ideas and approaches to the table. We
            believe that by embracing new ideas and
            approaches, we can deliver better results
            for our clients and drive positive change in
            the world. We encourage creativity and
            innovation in in everything we do.
          </p>
        </div>
      }
      secondarySlot={<img src={Innovative} />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Social responsibility
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We believe that
            businesses have a responsibility to give
            back to their communities. We are
            committed to supporting social and
            environmental causes and making a positive
            impact on the world.
          </p>
        </div>
      }
      secondarySlot={<img src={CSR} />}
    />
  </div>
)

export default Values;