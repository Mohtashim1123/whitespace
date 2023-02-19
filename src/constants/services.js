import React from 'react';
import Finance from '../assets/busniess.jpeg';
import HR from '../assets/feasibility.jpeg';
import IT from '../assets/diligence.jpeg';
import PM from '../assets/PM.jpeg';
import Support from '../assets/support.webp';
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { Ri24HoursFill, RiComputerFill, RiProjector2Fill, RiUser2Fill } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { MdBusinessCenter } from "react-icons/md";

export const services = [
  {
    id: 1,
    heading: "Business Valuation",
    info: `
      Our business valuation service helps businesses and organizations determine the value of their company or assets. 
      We use a variety of techniques and tools to conduct our analysis, 
      and our team of experienced valuators is committed to delivering accurate and defensible results At the end of the process, 
      we provide our clients with a detailed report outlining our findings and recommendations.
    `,
    img: Finance,
    icon: FaMoneyBillWaveAlt,
    slide: true,
    link: "services/#business-eval"
  },
  {
    id: 2,
    heading: "Feasibility Studies",
    info: `
    Our feasibility study service helps businesses and organizations determine the feasibility of a proposed project, 
    product, or service. 
    We conduct a thorough analysis of the market, technology, and financial aspects of the proposed venture,
     and provide our clients with a detailed report outlining our findings and recommendations.
    `,
    img: HR,
    icon: BsPeopleFill,
    slide: true,
    link: "services/#services1"

  },
  {
    id: 3,
    heading: "Due Diligence",
    info: (
      <>
        <div>
          Our due diligence service helps businesses and organizations assess the risks and opportunities associated with a potential acquisition, investment, or partnership. By conducting a thorough analysis of the financial, legal, and operational aspects of the proposed venture, we can help our clients make informed decisions about whether or not to proceed.
        </div>
        <div>
          Our team of experienced consultants is committed to delivering accurate and defensible results, and we provide our clients with a detailed report outlining our findings and recommendations.
        </div>
      </>
    ),
    img: IT,
    icon: Ri24HoursFill,
    slide: true,
    link: "services/#diligences"

  },
  {
    id: 4,
    heading: "HR / Recruitment",
    info: (
      <>
        <div>
          Our human resource and
          recruitment consultancy services
          support organizations in
          attracting, retaining, and
          developing top talent. We offer a
          range of services designed to
          support your HR needs, including
          employee retention strategies,
          job searches, onboarding, and
          talent development. Our team
          has a deep understanding of the
          latest trends and best practices
          in HR and is dedicated to helping
          our clients succeed.
        </div>
      </>
    ),
    img: IT,
    icon: RiUser2Fill,
    link: "services/#hr"

  },
  {
    id: 5,
    heading: "IT Consultancy",
    info: (
      <>
        <div>
          Our information technology
          consultancy services help clients
          leverage the latest technology to
          drive efficiency and growth

          . We offer
          a range of services designed to
          optimize your IT infrastructure and
          adopt new software solutions,
          including system design and
          implementation, data analysis, and
          training

          . Our team has

          a deep
          understanding of the latest
          technology trends and is dedicated
          to helping our clients succeed
        </div>
      </>
    ),
    img: IT,
    icon: RiComputerFill,
    link: "services/#it"
  },
  {
    id: 5,
    heading: "Project Management",
    info: (
      <>
        <div>
          Our project management
          services help organizations plan,
          execute, and deliver projects on
          time and on budget. Our team
          has the skills and experience to
          ensure that your projects are
          successful, and we offer a range
          of services designed to support
          your project management
          needs, including project
          planning, risk assessment,
          resource allocation, and
          stakeholder management.
        </div>
      </>
    ),
    img: IT,
    icon: RiProjector2Fill,
    link: "services/#project"
  },
  {
    id: 6,
    heading: "Financial Modeling",
    info: (
      <>
        <div>
          Our financial modeling
          service helps businesses and organizations
          build dynamic models that simulate
          the financial performance of their
          business or project.
          We provide our clients with a
          detailed report outlining the findings of our
          analysis and recommendations for next steps.
        </div>
      </>
    ),
    img: IT,
    icon: RiProjector2Fill,
    link: "services/#Financial-Modeling"
  },
  {
    id: 7,
    heading: "Financial Planning",
    info: (
      <>
        <div>
          Our financial planning and analysis service helps businesses and
          organizations understand and improve their financial performance. We
          conduct a thorough analysis of a company's financial data and identify
          opportunities for cost savings, revenue growth, and profitability
          improvement. Our team of experienced financial analysts uses a variety of
          techniques and tools to conduct our analysis, and we provide our clients
          with a detailed report outlining the findings of our analysis and
          recommendations for next steps. Whether you're looking to improve your
          financial performance, make strategic business decisions, or plan for the
          future, our financial planning and analysis service can help you achieve
          your goals.
        </div>
      </>
    ),
    img: IT,
    icon: RiProjector2Fill,
    link: "services/#Financial-Planning"
  },
  {
    // Investigation, Investigative Reviews, Transaction Testing And Support Services
    id: 7,
    heading: " Corporate Fraud",
    info: (
      <>
        <div>
          Our fraud risk management service helps businesses and organizations identify
          and mitigate the risk of fraud. We conduct a thorough analysis of a company's
          operations and systems to identify vulnerabilities and recommend controls and
          measures to prevent or detect fraudulent activity. Our team of experienced
          professionals uses a variety of techniques and tools to conduct our analysis, and
          we provide our clients with a detailed report outlining the findings of our analysis
          and recommendations for next steps. Whether you're looking to prevent or detect
          fraud, our fraud risk management service can help you protect your business and
          achieve your goals.
        </div>
      </>
    ),
    img: IT,
    icon: RiProjector2Fill,
    link: "services/#Corporate-Fraud"
  },
  {
    id: 8,
    heading: "Business Process",
    info: (
      <>
        <div>
          Our business process re-engineering service helps businesses and organizations redesign their processes to achieve significant
          improvements in performance, efficiency, and effectiveness. We conduct a thorough analysis of a company's operations and
          systems to identify opportunities to streamline processes and improve the flow of work. Our team of experienced consultants
          uses a variety of techniques and tools to conduct our analysis, and we provide our clients with a detailed report outlining the
          findings of our analysis and recommendations for next steps. Whether you're looking to improve your performance, efficiency,
          or effectiveness, our business process re-engineering service can help you achieve your goals.
        </div>
      </>
    ),
    img: IT,
    icon: RiProjector2Fill,
    link: "services/#Business-Process"
  },
  {
    id: 8,
    heading: "Risk Advisory",
    info: (
      <>
        <div>
          Risk advisory service involves identifying, assessing, and prioritizing risks that could potentially impact an organization's
          ability to achieve its goals and objectives. This process involves evaluating the likelihood and potential consequences of
          various risks, and implementing controls to mitigate or eliminate those risks.
        </div>
      </>
    ),
    img: IT,
    icon: RiProjector2Fill,
    link: "services/#Risk-Advisory"
  },
  {
    id: 8,
    heading: "Operational Improvement",
    info: (
      <>
        <div>
          Operational improvement in organizations involves identifying and implementing changes to processes, systems, and
          structures in order to increase efficiency, reduce costs, and improve the overall performance and effectiveness of the
          organization.
        </div>
      </>
    ),
    img: IT,
    icon: RiProjector2Fill,
    link: "services/#Operational-Improvement"
  }
] 