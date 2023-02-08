import './Overview.scss';
import VisionImage from '../assets/overview.jpeg';

const Vision = () => (
  <div className="overview pb-20">
    <div className='content'>
      <h1>
        Overview of the Company
      </h1>
      <p className='info'>

        <div>
          Our professional services Company is dedicated to helping businesses
          of all sizes and industries achieve their goals. We offer a range of
          services designed to support your growth and success, including
          financial and business advisory, human resource and recruitment
          consultancy, information technology consultancy, and project
          management. We work closely with clients to understand their unique
          needs and goals and develop customized solutions that deliver real
          value.
        </div>

        <div>

          At <i>WhiteSpace</i>, we believe that strong relationships are the key to
          success. We take the time to understand our clients' needs and goals,
          and work closely to develop customized solutions that deliver real
          value. We are committed to delivering high-quality services and
          building long-term relationships with our clients.

        </div>

        <div>
          At <i>WhiteSpace</i>, we are committed to delivering high-quality services
          and building long-term relationships with our clients. We believe in the
          power of partnership and are dedicated to helping our clients succeed.
        </div>
      </p>
    </div>
    <img src={VisionImage} />
  </div>
);

export default Vision;
