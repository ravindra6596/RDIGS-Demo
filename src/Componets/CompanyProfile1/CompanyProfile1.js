import React from "react";
import "./CompanyProfile1.css";
import Heading from "../Heading/Heading";
import { Header } from "semantic-ui-react";
// import Tab from 'react-bootstrap/Tab';
// import {Nav,Row,Col} from 'react-bootstrap';

const CompanyProfile1 = () => {
  return (
    <>
      <div className="nav-contaniner" />
      <section className="companyprofilesection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading title="Company Profile"/>
                            <p style={{color:'white'}}>At Apisero, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="vision-mission-principal">
              <div className="container">
                <div className="row">
                   <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                     <Heading title="VISION"></Heading>
                     <p>To provide highest quality added services to our purchasers and delivering measurable results. To provide purchasers with a reliable outsourcing service that gives worth, stability and profit to their operations. Build a strengthen relationships between our purchasers and their individual customers.</p>
                   </div>
                   <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                      <Heading title="MISSION"></Heading>
                      <p>Our vision is to stay a foremost outsourcing company that gives our clients the simplest services at competitive costs.</p> 
                   </div>
                   <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                      <Heading title="PRINCIPLE"></Heading>
                      <p>Client Value Creation, Integrity &amp; Transparency, Authenticity and Excellence are the core values of RD info Solutions. Creating and delivering value is the core of our work system. We help our clients to provide the highest quality value-added services. Our people are authentic to the highest level of ethics and integrity. Transparency in a company can vastly improve company culture, employee morale and productivity.</p>
                   </div>
                </div>
              </div>
            </section>
            <section className="why-we-section">
              <div className="container">
                <div className="row">
                  <div className="col-12 companyheading-why-we">
                    <Heading title="WHY WE CHOOSE US"></Heading>
                    <p>sdfghjkl;sdfgfg <br></br>sdfghjklsdfghjk</p>
                  </div>
                   <div className="row">
                    <div className="col-4">
                    <div class="company-tabs-nav">
                      <ul class="companyprofile-goal">
                        <li id="global-team" class="active-default"> 
                        <span class="company-tab-title ">Global Team</span>
                        </li>
                        <li id="suite-of-solutions" class="inactive"> 
                        <span class="company-tab-title ">Suite of Solutions</span>
                        </li>
                        <li id="agile-delivery" class="inactive">
                           <span class="company-tab-title ">Agile Delivery</span>
                        </li>
                        <li id="scaled-pricing" class="inactive"> 
                           <span class="company-tab-title title-after-icon">Scaled Pricing</span>
                        </li>
                        <li id="team-collaboration" class="inactive"> 
                          <span class="company-tab-title title-after-icon">Team Collaboration</span>
                        </li>
                        <li id="integrated-knowledge" class="inactive">
                           <span class="company-tab-title title-after-icon">Integrated Knowledge</span>
                        </li>
                      </ul>
                     </div>
                    </div>
                    <div className="col-8 why-we-backimg">
                      <div className="why-we-list-content-div">
                      <Heading title="global team"></Heading>
                      <p className="text-light">With over 700+ certified and trained professionals, Apisero designs custom-built solutions for mid-market, enterprise, and strategic customers across the globe</p>
                    </div>
                    </div>
                  </div>
                  </div>
              </div>
              </section>
              {/* <section>
                <div className="container">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="">
                          <Heading title="why we"></Heading>
                          <img src="" alt=""></img>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
              </div>
              </section> */}
    </>
  );
};
export default CompanyProfile1;
