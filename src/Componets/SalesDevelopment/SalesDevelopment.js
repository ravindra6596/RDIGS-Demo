import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./SalesDevelopment.css";
import Heading from "../Heading/Heading";
import Button from "../ButtonGroup/Button/Button";
import demand1 from "../../img/services/demand1.png";
import min from "../../img/services/min.jpg";
import service1 from "../../img/services/s1.jpg";
import service2 from "../../img/services/s2.jpg";
import service3 from "../../img/services/s3.jpg";
import service4 from "../../img/services/s4.jpg";
import service5 from "../../img/services/s5.jpg";
import service6 from "../../img/services/s6.jpg";
import service7 from "../../img/services/s7.jpg";
import service8 from "../../img/services/s8.jpg";
import servicesicon from '../../img/services/servicesicon.jpg';
import { Modal,ModalBody } from "reactstrap";
import d from '../../img/services/vissionimg.jpg';

const LeadGeneration = () => {
  const [modallead, setModallead] = useState(false);
    const togglelead = () => setModallead(!modallead);
  const data = [
    {
      servicename: "Sales Qualified Leads",
      serviceimg: service1,
      servicelink:"/salesqualified",
    },
    {
      servicename: "Confirmed Call Back",
      serviceimg: service2,
      servicelink:"/demandgeneration",
    },
    {
      servicename: "Appointment Setting",
      serviceimg: service3,
      servicelink:"/salesqualified",
    },
    
  ];
  return (
    <>
      <div className="nav-contaniner" />
          <section className="Lead-Generation-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Sales Development"/>
                            <p style={{color:'white'}}> A Strong Sales Opportunity</p>
                            <p style={{color:'white'}}>G-BANT- A perfect approach to help sales reps determine a good fit prospect based on the
                              prospect’s Goals, Budget, Authority or Ability to purchase, Need, and Timeline of purchase. G-BANT
                              strengthens your sales, marketing, management, and operations team to locate the prospects and
                              focus on only those, who can become a customer.</p>
                        </div>
                    </div>
                </div>
            </section>
      <section className="Lead-Generation-Sec">
        <div className="container">
          <div className="d-flex justify-content-center Lead-heading-top">
            <Heading h1Class="clientheadwe" title="G-BANT QUALIFIED LEADS"></Heading>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 Lead-img-col">
              <div
                class="text-center lg-img aos-init aos-animate"
                data-aos="fade-left">
                <img src={demand1} alt="Lead Generation" className="Lead-img1" data-aos="fade-up"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 Lead-text-col">
              <div class="lead-title aos-init aos-animate" data-aos="fade-up">
                  <div>
                    <h4 className="Lead-subhead" data-aos="fade-up" style={{textAlign:'justify'}}>A Deeper Understanding With G-BANT</h4>
                    <p className="lead-right" data-aos="fade-up">After a deep research, we have our unique cut above process to help your reps with better tailor the
                        next steps they take in the sale process. We have added a Goal, into our BANT process, because we
                        think without knowing goal, everything is like, A shot in the dark. </p>
                        <ul>
                         <li className="lead-right" data-aos="fade-left">G- Goals – Do you know what are prospect’s Goals?</li>
                        <li className="lead-right" data-aos="fade-left">B- Budget - Are there Funds allocated for a solution?</li>
                        <li className="lead-right" data-aos="fade-left">A – Authority - Are you speaking with a person who will sign the deal?</li>
                        <li className="lead-right" data-aos="fade-right">N – Need - Are you aware about the challenges prospect is facing?</li>
                        <li className="lead-right" data-aos="fade-left">T- Timeline – In what months/ years/ days a solution can be implemented?</li>
                        </ul>
                  </div>
                    <div className="Drive-Excess-Conversion-Lead">
                        <Button
                        classNames="allbtn-primary glow-on-hover text-light Drive-Excess-Conversion"
                        data-aos="fade-left"
                        text="Drive-Excess-Conversion" onClick={togglelead} fun={()=>setModallead(true)}>
                        </Button>
                    </div>
                    <br></br>
                   
              </div>
            </div>
          </div>
       </div>
  </section>
      <div className="lead-form">
                    <Modal centered isOpen={modallead} className="modal-dialog" toggle={togglelead}
                    >
                      <ModalBody>
                      <span  className="leadmodalclosebtn"  onClick={() => setModallead(false)} ><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                          <div className="container"> 
                            <div className="row">
                                 <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <img src={d} className="lead-form-img" alt=""></img>
                                 </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                      <form  autocomplete="off">
                                                                <div className="form-lead">
                                                                  <i className="fa fa-user"></i>
                                                                  <input type="text" className="lead-input" id="Fname" placeholder="Your Name" required autocomplete="off"/>
                                                                </div>
                                                                <div className="form-lead">
                                                                <i className="fa fa-phone"></i>
                                                                <input type="number" className="lead-input" id="Pnumber" placeholder="Phone Number" maxLength="10" required/>
                                                                </div>
                                                                <div className="form-lead">
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                                <input type="text" className="lead-input" id="Email" placeholder="Your Email" autocomplete="off" required/>
                                                                </div>
                                                                <div className="form-lead">
                                                                <i className="fa fa-address-book" aria-hidden="true"></i>
                                                                <input type="text" className="lead-input" id="" placeholder="Company Name" autocomplete="off" required/>
                                                                </div>
                                                                    <div className="d-flex justify-content-center" style={{marginTop:'10px'}}>
                                                                     <Button text="Submit" classNames="allbtn-primary glow-on-hover text-light"></Button>
                                                                    </div>
                                                          
                                                            </form>
                                                </div>
                                      </div>
                                  </div>
                            </ModalBody>
                        </Modal>
                  </div>
      <section class="section-services text-center">
        <div class="container">
          <div className="d-flex justify-content-center" data-aos="fade-down">
            <Heading h1Class="clientheadwe" title="Services"></Heading>
          </div>
          <p>
            <span class="text-width-1" data-aos="fade-down">
              As the most qualified accounting services provider, we offer an
              amazing variety of financial solutions designed to help you solve
              all bookkeeping issues, no matter big or small.
            </span>
          </p>
          <div class="row row-50 row-xxl-70 offset-top-2 services-row">
            {data.map((user, index) => {
              return (
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                 <Link to={user.servicelink}>
                    <div className="serviceLead">
                    <img
                      class="thumbnail-light-image"
                      src={user.serviceimg}
                      alt=""
                    />
                  </div>
                  </Link>
                  <h5 class="thumbnail-light-title" data-aos="fade-left">
                    {user.servicename}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="our-services-Lead">
        <div className="support-company-area pt-100 pb-100 section-bg fix" data-background="assets/img/gallery/section_bg02.jpg">
          <div className="container">
            <div className="row align-items-center">
              <div class="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src={min} alt="" data-pagespeed-url-hash="1368735680" />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="right-caption">
                  <div class="section-tittle section-tittle2 mb-50">
                    <div className="d-flex justify-content-center">
                      <Heading h1Class="clientheadwe"  title="Our Best Services"></Heading>
                    </div>
                  </div>
                  <div class="support-caption">
                    <p class="pera-top">
                      Mollit anim laborum duis adseu dolor iuyn voluptcate velit
                      ess cillum dolore egru lofrre dsu quality mollit anim
                      laborumuis au dolor in voluptate velit cillu.
                    </p>
                    <div className="support-caption-two">
                      <img src={servicesicon} className="support-caption-two-img" alt=""></img> 
                    <p className="mb-65">
                      Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                      indd re voluptate velit esscillumlore eu quife nrulla
                      parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute
                      iruxvfg dhjinulpadeserunt moll.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div></div>
      </section>
    </>
  );
};
export default LeadGeneration;
