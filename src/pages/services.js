import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';

import Excellence from '../assets/excellence.png';
import ServicesImage from '../assets/services.png';
import SplitSection from '../components/SplitSection';

import './services.scss';

const Sections = ({ mainHeading, heading, intro, primary, secondary, id }) => (
  <>
    <div className='intro' id={id}>
      {mainHeading && <h1 className="text-center text-4xl font-semibold">{mainHeading}</h1>}
      {heading && <h3 className="text-center text-3xl font-semibold">{heading}</h3>}
      <p>
        {intro}
      </p>
    </div>

    <div className='split'>
      <SplitSection
        primarySlot={primary}
        secondarySlot={secondary}
      />
    </div>
  </>
)

const Services = () => {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Layout>
      <div className='Services'>
        <div className='Heading'>
          <h1>Services</h1>
          <img src={ServicesImage} />
        </div>

        <Sections
          id="finance"
          mainHeading={'Financial Advisory and Consulting'}
          intro={'Our financial and business advisory services are designed to help clients optimize their financial performance and achieve their business objectives.'}
          primary={
            <div>

              <div className="mt-8">


                <p>
                  Our team of experienced consultants has
                  a deep understanding of the latest trends
                  and best practices in finance and management.
                </p>

                <p>
                  We offer

                  a range of services, including feasibility
                  studies, business valuation, due diligence,
                  financial modeling, financial planning and
                  budgeting, corporate fraud investigation and
                  support services, market analysis, strategic
                  planning, business process re

                  -engineering, risk
                  management advice, and operational
                  improvement, and we pride ourselves on
                  delivering results that drive tangible value
                </p>
              </div>
            </div>
          }
        />

        <Sections
          id="services1"
          heading={'Feasibility Studies'}
          intro={`
        Our feasibility study service helps businesses and organizations determine the feasibility of a proposed project, product, or
        service. We conduct a thorough analysis of the market, technology, and financial aspects of the proposed venture, and
        provide our clients with a detailed report outlining our findings and recommendations.
        `}
          primary={
            <div>

              <div className="mt-8">


                <p>
                  Our team of experienced consultants has
                  a deep understanding of the latest trends
                  and best practices in finance and management.
                </p>

                <p>
                  We offer

                  a range of services, including feasibility
                  studies, business valuation, due diligence,
                  financial modeling, financial planning and
                  budgeting, corporate fraud investigation and
                  support services, market analysis, strategic
                  planning, business process re

                  -engineering, risk
                  management advice, and operational
                  improvement, and we pride ourselves on
                  delivering results that drive tangible value
                </p>
              </div>
            </div>
          }
        />
        <Sections
          id="business-eval"
          heading={'Business Valuation'}
          intro={`
        Our business valuation service helps businesses and organizations determine the value of their company or assets. We use
a variety of techniques and tools to conduct our analysis, and our team of experienced valuators is committed to
delivering accurate and defensible results. At the end of the process, we provide our clients with a detailed report
outlining our findings and recommendations.
        `}
          primary={
            <div>

              <div className="mt-8">


                <p>
                  Our business valuation service helps
                  businesses and organizations
                  determine the value of their company
                  or assets. By conducting a thorough
                  analysis of the financial and market
                  data, we can provide our clients with
                  an accurate and defensible valuation
                  that reflects the true value of their
                  business.
                </p>

                <p>
                  Our business valuation process is
                  customized to each client's specific
                  needs and goals. We take the time to
                  understand the business and the
                  market it operates in, and we use a
                  variety of techniques and tools to
                  conduct our analysis. These may
                  include financial modeling, market
                  analysis, and industry benchmarks,
                  among others.
                </p>

                <p>
                  Whether you're looking to sell your
                  business, raise capital, or make
                  informed decisions about your
                  company's future, our business
                  valuation service can help you
                  understand the true value of your
                  business.
                </p>

                <p>

                </p>
              </div>
            </div>
          }
        />

        <Sections
          id="diligences"
          heading={'Due Diligences'}
          intro={`
        Our due diligence service helps businesses and organizations assess the risks and opportunities associated with a potential
acquisition, investment, or partnership. By conducting a thorough analysis of the financial, legal, and operational aspects
of the proposed venture, we can help our clients make informed decisions about whether or not to proceed. Our team of
experienced consultants is committed to delivering accurate and defensible results, and we provide our clients with a
detailed report outlining our findings and recommendations.
        `}
          primary={
            <div>

              <div className="mt-8">


                <p>
                  Our due diligence service helps
                  businesses and organizations assess
                  the risks and opportunities associated
                  with a potential acquisition,
                  investment, or partnership. By
                  conducting a thorough analysis of the
                  financial, legal, and operational
                  aspects of the proposed venture, we
                  can help our clients make informed
                  decisions about whether or not to
                  proceed.
                </p>

                <p>
                  Our due diligence process is
                  customized to each client's specific
                  needs and goals. We take the time to
                  understand the proposed venture and
                  the market it operates in, and we use
                  a variety of techniques and tools to
                  conduct our analysis. These may
                  include financial modeling, market

                  analysis, and industry benchmarks,
                  among others.
                  Our team of experienced consultants
                  has a deep understanding of the latest
                  trends and best practices in due
                  diligence, and we are committed to
                  delivering results that are accurate
                  and defensible. At the end of the due
                  diligence process, we provide our
                  clients with a detailed report that
                  outlines the findings of our analysis
                  and provides recommendations for
                  next steps.
                </p>

                <p>
                  Whether you're considering an
                  acquisition, investment, or
                  partnership, our due diligence service
                  can help you make informed decisions
                  about your next steps.
                </p>
              </div>
            </div>
          }
        />

        <Sections
          heading={'Financial Modeling'}
          intro={`Our financial modeling service helps businesses and organizations build dynamic models that simulate the financial
        performance of their business or project. We provide our clients with a detailed report outlining the findings of our
        analysis and recommendations for next steps.`}
          primary={
            <div>

              <div className="mt-8">


                <p>
                  Our financial modeling service helps
                  businesses and organizations build
                  dynamic models that simulate the
                  financial performance of their business
                  or project. By using financial modeling,
                  our clients can forecast their revenues,
                  expenses, and cash flows, and make
                  informed decisions about their business
                  or project.
                </p>

                <p>
                  Our financial modeling process is
                  customized to each client's specific
                  needs and goals. We take the time to
                  understand the business and the
                  market it operates in, and we use a
                  variety of techniques and tools to build
                  the financial model. These may include
                  market research, financial projections,
                  and scenario analysis, among others.
                </p>
                <p>
                  Our team of experienced financial

                  analysts has a deep understanding of
                  the latest trends and best practices in
                  financial modeling, and we are
                  committed to delivering results that are
                  accurate and reliable. At the end of the
                  modeling process, we provide our
                  clients with a detailed report that
                  outlines the findings of our analysis and
                  provides recommendations for next
                  steps.
                </p>
                <p>
                  Our financial modeling service can be
                  applied to a wide range of industries
                  and sectors, including technology,
                  healthcare, manufacturing, and more.
                  Whether you're looking to make
                  strategic business decisions, raise
                  capital, or plan for the future, our
                  financial modeling service can help you
                  understand the financial performance of
                  your business or project.
                </p>
              </div>
            </div>
          }
        />

        <Sections
          heading={'Financial Planning and Analysis'}
          intro={`Our financial planning and analysis service helps businesses and
        organizations understand and improve their financial performance. We
        conduct a thorough analysis of a company's financial data and identify
        opportunities for cost savings, revenue growth, and profitability
        improvement. Our team of experienced financial analysts uses a variety of
        techniques and tools to conduct our analysis, and we provide our clients
        with a detailed report outlining the findings of our analysis and
        recommendations for next steps. Whether you're looking to improve your
        financial performance, make strategic business decisions, or plan for the
        future, our financial planning and analysis service can help you achieve
        your goals.`}
          primary={
            <div>

              <div className="mt-8">


                <p>
                  Our financial planning and
                  analysis service helps businesses
                  and organizations understand
                  and improve their financial
                  performance. By conducting a
                  thorough analysis of a company's
                  financial data, we can identify
                  opportunities for cost savings,
                  revenue growth, and profitability
                  improvement.
                </p>

                <p>
                  Our team of experienced financial
                  analysts has a deep
                  understanding of the latest
                  trends and best practices in
                  financial planning and analysis,
                  and we are committed to

                  delivering results that drive
                  tangible value for our clients. At
                  the end of the process, we
                  provide our clients with a
                  detailed report that outlines the
                  findings of our analysis and
                  provides recommendations for
                  next steps.
                </p>
                <p>
                  Our financial planning and
                  analysis service can be applied to
                  a wide range of industries and
                  sectors, including technology,
                  healthcare, manufacturing, and
                  more. Whether you're looking to
                  improve your financial
                  performance, make strategic
                  business decisions, or plan for
                  the future, our financial planning
                  and analysis service can help you
                  achieve your goals.
                </p>
              </div>
            </div>
          }
        />


        <Sections
          heading={'Corporate Fraud Investigation, Investigative Reviews, Transaction Testing And Support Services'}
          intro={`Our fraud risk management service helps businesses and organizations identify
        and mitigate the risk of fraud. We conduct a thorough analysis of a company's
        operations and systems to identify vulnerabilities and recommend controls and
        measures to prevent or detect fraudulent activity. Our team of experienced
        professionals uses a variety of techniques and tools to conduct our analysis, and
        we provide our clients with a detailed report outlining the findings of our analysis
        and recommendations for next steps. Whether you're looking to prevent or detect
        fraud, our fraud risk management service can help you protect your business and
        achieve your goals.`}
          primary={
            <div>

              <div className="mt-8">


                <p>
                  Our fraud risk management service helps
                  businesses and organizations identify, assess, and
                  mitigate the risk of fraud. By conducting a thorough
                  analysis of a company's operations and systems, we
                  can identify vulnerabilities and weaknesses that
                  may be exploited by fraudsters, and recommend
                  controls and measures to prevent or detect
                  fraudulent activity.
                </p>

                <p>
                  Our fraud risk management process is customized
                  to each client's specific needs and goals. We take
                  the time to understand the business and the market
                  it operates in, and we use a variety of techniques
                  and tools to conduct our analysis. These may
                  include financial analysis, data analytics, and risk
                  assessment, among others.
                </p>
                <p>
                  Our team of experienced fraud risk management
                  professionals has a deep understanding of the latest
                  trends and best practices in the field, and we are
                  committed to delivering results that protect our
                  clients' assets, reputation, and bottom line. At the
                  end of the process, we provide our clients with a
                  detailed report that outlines the findings of our
                  analysis and provides recommendations for next
                  steps.
                </p>
                <p>
                  Our fraud risk management service can be applied
                  to a wide range of industries and sectors, including
                  technology, healthcare, manufacturing, and more.
                  Whether you're looking to prevent or detect fraud,
                  our fraud risk management service can help you
                  protect your business and achieve your goals.
                </p>
              </div>
            </div>
          }
        />

        <Sections
          heading={'Business Process Re-engineering'}
          intro={`Our business process re-engineering service helps businesses and organizations redesign their processes to achieve significant
        improvements in performance, efficiency, and effectiveness. We conduct a thorough analysis of a company's operations and
        systems to identify opportunities to streamline processes and improve the flow of work. Our team of experienced consultants
        uses a variety of techniques and tools to conduct our analysis, and we provide our clients with a detailed report outlining the
        findings of our analysis and recommendations for next steps. Whether you're looking to improve your performance, efficiency,
        or effectiveness, our business process re-engineering service can help you achieve your goals.`}
          primary={
            <div>

              <div className="mt-8">


                <p>
                  Our business process re-engineering
                  service helps businesses and
                  organizations redesign their processes
                  to achieve significant improvements in
                  performance, efficiency, and
                  effectiveness. By conducting a thorough
                  analysis of a company's operations and
                  systems, we can identify opportunities
                  to streamline processes, eliminate
                  waste, and improve the flow of work.
                </p>

                <p>
                  Our business process re-engineering
                  process is customized to each client's
                  specific needs and goals. We take the
                  time to understand the business and
                  the market it operates in, and we use a
                  variety of techniques and tools to
                  conduct our analysis. These may include
                  process mapping, workflow analysis,
                  and process simulation, among others.
                  Our team of experienced process
                  improvement consultants has a deep
                  understanding of the latest trends and

                  best practices in business process re-
                  engineering, and we are committed to

                  delivering results that drive tangible
                  value for our clients. At the end of the
                  process, we provide our clients with a
                  detailed report that outlines the findings
                  of our analysis and provides
                  recommendations for next steps.
                </p>
                <p>
                  Whether you're looking to improve your
                  performance, efficiency, or

                  effectiveness, our business process re-
                  engineering service can help you

                  achieve your goals.
                </p>
              </div>
            </div>
          }
        />

        <Sections
          heading={'Risk Advisory'}
          intro={`Risk advisory service involves identifying, assessing, and prioritizing risks that could potentially impact an organization's
        ability to achieve its goals and objectives. This process involves evaluating the likelihood and potential consequences of
        various risks, and implementing controls to mitigate or eliminate those risks.`}
          primary={
            <div>

              <div className="mt-8">


                <p>
                  Our corporate risk advisory services can
                  help your organization identify, assess,
                  and manage risks across a wide range of
                  areas, including financial, operational,
                  legal, and reputational risks. Our team of
                  experienced professionals will work with
                  you to develop a customized risk
                  management plan that aligns with your
                  organization's specific goals and
                </p>
                <h1>Risk identification:</h1>
                <p>
                  We use a variety
                  of methods and tools to identify
                  potential risks facing your
                  organization, including hazard
                  identification, risk analysis, and risk
                  evaluation.
                </p>


                <h1>Risk assessment:</h1>   <p>We evaluate the
                  likelihood and potential consequences
                  of identified risks, and prioritize them
                  based on their potential impact on
                  your organization.</p>
                <h1>Risk control:</h1> <p>We provide
                  recommendations for controls and

                  strategies to mitigate identified risks,
                  including risk transfer, risk avoidance,
                  risk reduction, and risk acceptance.</p>
                <h1>Risk monitoring and review:</h1> <p>We
                  monitor the effectiveness of risk
                  controls and strategies, and review
                  and update your organization's risk
                  management plan on an ongoing basis
                  to ensure it remains relevant and
                  effective.</p>
                <h1>Risk communication and training:</h1><p>
                  We can provide training and guidance
                  to help your organization's employees
                  understand and effectively manage
                  risks in their daily work.</p>


                <p>
                  With our corporate risk advisory services,
                  you can feel confident that your
                  organization is taking proactive steps to
                  identify and manage potential risks, and
                  is well-prepared to navigate any
                  challenges that may arise.
                </p>
              </div>
            </div>
          }
        />

        <Sections
          heading={'Operational Improvement and Cost Reviews'}
          intro={`Operational improvement in organizations involves identifying and implementing changes to processes, systems, and
        structures in order to increase efficiency, reduce costs, and improve the overall performance and effectiveness of the
        organization.`}
          primary={
            <div>

              <div className="mt-8">


                <p>
                  Our operational improvement services can help your
                  organization achieve its goals by identifying areas
                  for improvement, and implementing changes that
                  drive measurable results. We use a variety of tools
                  and techniques, including process mapping, process
                  improvement methodologies, and performance
                  metrics analysis, to identify opportunities for
                  improvement and optimize your organization's
                  operations. Our team of experienced consultants will
                  work with you to assess your current operations,
                  identify areas for improvement, and develop a
                  customized plan to implement changes.
                </p>
                <p> Our services include:</p>

                <h1>Process improvement:</h1>   <p>We can help you
                  streamline and optimize your business processes,
                  including identifying bottlenecks, automating
                  tasks, and implementing new technologies.</p>
                <h1>System optimization:</h1> <p>We can help you identify
                  and implement technology solutions that can
                  improve efficiency, reduce costs, and enhance
                  overall performance.

                  strategies to mitigate identified risks,
                  including risk transfer, risk avoidance,
                  risk reduction, and risk acceptance.</p>
                <h1>Structural redesign:</h1> <p>We can work with you to
                  assess and optimize your organizational structure
                  and design, including roles, responsibilities, and
                  decision-making processes.</p>
                <h1>Change management:</h1><p>
                  We help you effectively
                  plan and implement changes to processes,
                  systems, and structures in a way that minimizes
                  disruption and maximizes the benefits of the
                  improvements, including communication
                  strategies and employee training.</p>


                <h1>Process mapping and analysis:</h1><p>
                  We work with
                  you to understand and document your
                  organization's current processes, and identify
                  areas for improvement using techniques such as
                  gap analysis and benchmarking.</p>

                <h1>Performance metrics analysis:</h1><p>
                  We analyze key
                  performance metrics to identify areas for
                  improvement and track progress over time.</p>
                <h1>Process improvement methodologies:</h1><p>
                  We
                  provide guidance and support in implementing
                  process improvement methodologies, such as
                  Lean and Six Sigma, to drive operational
                  efficiency and effectiveness.</p>


                <p>
                  Through our operational improvement services, you
                  can achieve significant cost savings and improved
                  performance, and position your organization for
                  long-term success.
                </p>
              </div>
            </div>
          }
        />

        <Sections
          id="hr"
          mainHeading={'HR / Recruitment and Consultancy'}
          intro={`
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
        `}

        />


        <Sections
          id="it"
          mainHeading={'IT Consultancy'}
          intro={`
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
        `}

        />


        <Sections
          id="project"
          mainHeading={'Project Management Services'}
          intro={`
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
.
        `}

        />

        {/* <Sections
          id="project"
          mainHeading={'Other Business Support Services'}
          intro={`
        A business has many service needs from compliances imposed by
statute to obtaining services for their internal needs
.

As part of support to our clients and to provide them help in the
decision making for choosing the right service provider for the
right purpose, we support them in acquiring the following
supporting services from our strategic partner firms which make
us
a one
-stop
-shop for all our clients’ financial related needs
.
        `}

        /> */}


      </div>
    </Layout>
  )
};

export default Services;
