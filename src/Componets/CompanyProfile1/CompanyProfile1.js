import React from "react";
import "./CompanyProfile1.css";
import Heading from "../Heading/Heading";
import { Header } from "semantic-ui-react";
import Tab from 'react-bootstrap/Tab';
import {Nav,Row,Col} from 'react-bootstrap';
import userEvent from "@testing-library/user-event";
const CompanyProfile1 = () => {
  const userdata=[
    {
      heading:"VISSION",
      vmppara:"To provide highest quality added services to our purchasers and delivering measurable results. individual customers.learn more."
    },
    {
      heading:"MISSION",
      vmppara:"Our vision is to stay a foremost outsourcing company that gives our clients the simplest services at competitive costs."
    },
    {
      heading:"PRINCIPLE",
      vmppara:"Client Value Creation, Integrity &amp; Transparency, Authenticity and Excellence are the core values of RD info Solutions."
    }
    
  ]
  return (
    <>
      <div className="nav-contaniner" />
      <section className="companyprofilesection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Company Profile"/>
                            <p style={{color:'white'}}> we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                     </div>
                    </div>
                </div>
            </section>
            <section className="vision-mission-principal">
              <div className="container">
                <div className="row vision-mission-principle-row">
                  {
                 userdata.map((data,i)=>{
                   return(
                    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="vision-title">
                      <h4 className="heading-vmp">{data.heading}</h4>
                    </div>
                   <div className="vision-div">
                   <p className="company-vmp">{data.vmppara}</p>
                  </div>
                  </div>
                   )
                 })
                }
                </div>
              </div>
            </section>
              <section className="company-choose-section">
                <div className="container">
                <div className="row">
                  <div className="col-12">
                    <Heading h1Class="aboutwherewe" title="WHY WE CHOOSE US"></Heading>
                    <p>Choosing a solutions provider that understands your business’ needs can feel overwhelming; we’re here to tell you that it doesn’t have to be.</p>
                  </div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={4} className="six-reason-col">
                      <Nav variant="pills" className="flex-column">
                        <div className="reason-compprofile">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Global Team</Nav.Link>
                        </Nav.Item>
                        </div>
                        <div className="reason-compprofile">
                        <Nav.Item>
                          <Nav.Link eventKey="second">Suite of Solutions</Nav.Link>
                        </Nav.Item>
                        </div>
                        <div className="reason-compprofile">
                       <Nav.Item>
                          <Nav.Link eventKey="third">Agile Delivery</Nav.Link>
                        </Nav.Item>
                        </div>
                        <div className="reason-compprofile">
                        <Nav.Item>
                          <Nav.Link eventKey="four">Scaled Pricing</Nav.Link>
                        </Nav.Item>
                        </div>
                        <div className="reason-compprofile">
                        <Nav.Item>
                          <Nav.Link eventKey="five">Team Collaboration</Nav.Link>
                        </Nav.Item>
                        </div>
                        <div className="reason-compprofile">
                        <Nav.Item>
                          <Nav.Link eventKey="six">Integrated Knowledge</Nav.Link>
                        </Nav.Item>
                        </div>
                      </Nav>
                    </Col>
                    <Col sm={8} className="six-reason-img">
                      <Tab.Content className="tab-divfor-img">
                        <Tab.Pane eventKey="first">
                          <div className="first-div">
                            <Heading h1Class="aboutwherewe" title="Global Team"></Heading>
                            <p className="text-light p-3">
                              With over 700+ certified and trained professionals, Apisero designs custom-built solutions for mid-market, enterprise, and strategic customers across the globe.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div className="second-div">
                            <Heading h1Class="aboutwherewe" title="Suite of Solutions"></Heading>
                            <p className="text-light p-3">
                              Apisero develops tailored solutions that fit your organization’s goals. From Architecture and Implementation to Managed Services, Data Migration, Advisory Services, and more, we’ve got you covered.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <div className="three-div">
                            <Heading h1Class="aboutwherewe" title="Agile Delivery"></Heading>
                            <p className="text-light p-3">
                            Your company needs a solution, and you need it as quickly and efficiently as possible. That’s why we offer quick ramp-up and down times to ensure you’re optimizing your business as soon as you can.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="four">
                          <div className="four-div">
                            <Heading h1Class="aboutwherewe" title="Scaled Pricing"></Heading>
                            <p className="text-light p-3">
                            Your partnership matters to us. That’s why Apisero works with each customer to define a custom engagement and pricing model that suits your business’ unique needs.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="five">
                          <div className="five-div">
                            <Heading h1Class="aboutwherewe" title="Team Collaboration"></Heading>
                            <p className="text-light p-3">
                            We know change can be scary, but with us, it doesn’t have to be. We’ll work closely with your internal teams to ensure they’re trained, enabled, and ready for action.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="six">
                          <div className="six-div">
                            <Heading h1Class="aboutwherewe" title="Integrated Knowledge"></Heading>
                            <p className="text-light p-5">
                            Leveraging our extensive industry and platform know-how, Apisero offers customers specialized services that empower their business to capitalize on investments faster than ever before.
                            </p>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
              </div>
              </section> 
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* <img src={} className="" alt=""></img> */}
                    </div>
                    <div class="card-comp">
                      <h5 class="card-comp">Lara's 1th Birthday</h5>
                      <p class="text-center">Sunday, September 26th at 7:00 pm</p>
                      <p class="card-comp">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                  </div>
                </div>
              </section>
      
    </>
  );
};
export default CompanyProfile1;
