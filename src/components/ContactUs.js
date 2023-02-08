import './ContactUs.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zwmbeic', 'template_s3uf7b6', form.current, 'R9xUKAgHGjNYeezCj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='ContactUs'>

      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">4th floor, Hub Business Center</div>
              <div className="text-two">Royal Plaza, Al Sadd</div>
              <div className="text-two">Doha, Qatar</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+974 5506 6175</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Get a Quote</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-box">
                <input type="text" name="user_name" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" name="user_email" placeholder="Enter your email" />
              </div>
              <div className="input-box">
                <input type="text" name="user_email" placeholder="Enter your phone number" />
              </div>
              <div className="input-box message-box" >
                <input type="text-area" name="message" placeholder="Describe your project" />
              </div>
              <div className="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
};

export default ContactUs;