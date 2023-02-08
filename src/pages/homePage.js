import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import Slider from '../components/Slider';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';

import Overview from '../components/Overview';
import Vision from '../components/Vision';
import Services from '../components/Services';
import Values from '../components/Values';

import './index.scss';
import '../fonts/MTCORSVA.ttf';
import ContactUs from '../components/ContactUs';

const Home = () => (
  <Layout>
    <section id="home">
      <Slider />
    </section>
    <div>
      <div>
        <div style={{ height: 85 }} id="overview" />
        <section>
          <Overview />
        </section>
      </div>

      <div>
        <div style={{ height: 85 }} id="vision" />
        <section >
          <Vision />
        </section>

      </div>

      <div>
        <div style={{ height: 85 }} id="services" />
        <section >
          <Services />
        </section>
      </div>

      <div>
        <div style={{ height: 85 }} id="values" />
        <section >
          <Values />
        </section>
      </div>

      <div>
        <div style={{ height: 85 }} id="contact-us" />
        <section >
          <ContactUs />
        </section>
      </div>
    </div>
  </Layout>
);

export default Home;
