import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Slider.scss';
import { Carousel } from 'react-responsive-carousel';

import { services } from '../constants/services';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  showThumbs: false,
  dynamicHeight: false,
};

const SliderImage = ({ src }) => <img className='image' src={src} />
const Info = ({ heading, info }) => (<div><h1>{heading}</h1>
  <p>
    {info}
  </p></div>)

const Slider = () => {

  return (
    <Carousel {...settings} className="slider pb-20">
      {services.filter(s => !s.slider).map((props) => (
        <div className="slider-container" key={props.id}>
          <div className="image-cover">
            <SliderImage src={props.img} />
          </div>
          <div className='info'>
            <Info {...props} />
          </div>
        </div>
      ))}
    </Carousel>
  );

}

export default Slider;