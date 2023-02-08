import './Vision.scss';
import VisionImage from '../assets/vision.jpeg';

const Vision = () => (
  <div className="vision pb-20">
    <div className='content'>
      <h1>
        Our Vision
      </h1>
      <p className='info'>

        <div>
          Our vision at WhiteSpace is to be the premier provider
          of financial and business advisory services in region. We
          strive to be the trusted advisor and to explore the
          unexplored areas of growth potential for businesses
          of all sizes and industries, helping them achieve their
          goals and drive sustainable growth.
        </div>

        <div>

          As we look to the future, we are constantly innovating
          and adapting to the changing needs of our clients. We
          are constantly striving to improve and evolve, and we
          believe that our commitment to excellence will set us
          apart in the industry.

        </div>
      </p>
    </div>
    <img src={VisionImage} />
  </div>
);

export default Vision;
