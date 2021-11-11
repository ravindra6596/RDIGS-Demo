import React,{useState} from "react";
import "./LeadGeneration.css";
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
      servicename: "Cash Management",
      serviceimg: service1,
    },
    {
      servicename: "Payments",
      serviceimg: service2,
    },
    {
      servicename: "M &amp; A Assistance",
      serviceimg: service3,
    },
    {
      servicename: "Local Expertise",
      serviceimg: service4,
    },
    {
      servicename: "Video &amp; Photo Production",
      serviceimg: service5,
    },
    {
      servicename: "Graphic designed",
      serviceimg: service6,
    },
    {
      servicename: "Strategy",
      serviceimg: service7,
    },
    {
      servicename: "Branding",
      serviceimg: service8,
    },
  ];
  return (
    <>
      <div className="nav-contaniner" />
      <section className="Lead-Generation-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1className="clientheadwe" spanClass="spansubhead2" title="Lead Generation"/>
                            <p style={{color:'white'}}> we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                     </div>
                    </div>
                </div>
            </section>
      <section className="Lead-Generation-Sec">
        <div className="container">
          <div className="d-flex justify-content-center Lead-heading-top">
            <Heading h1Class="aboutwherewe" title="Lead Generation"></Heading>
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
                    <h4 className="Lead-subhead" data-aos="fade-up">
                      Reach your Target Audience
                    </h4>
                   
                    <p class="lead-right" data-aos="fade-up">
                      We run account-based marketing (ABM) campaigns for targeting
                      the accounts by professional demographics to drive more
                      conversions. We generate target accounts and nurture them
                      based on content, relevant communications and contextual
                      marketing.
                    </p>
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
                                            <input type="text" className="lead-input" id="Fname" placeholder="First Name" required autocomplete="off"/>
                                        </div>
                                                                <div className="form-lead">
                                                                <i className="fa fa-user"></i>
                                                                <input type="text" className="lead-input" id="Lname" placeholder="Last Name" required autocomplete="off"/>
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
                                                                <div className="textarea-lead">
                                                                    <input type="text-area" className="lead-textarea" id="" rows="4" cols="50" placeholder="Write Message Here..." required></input>
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
            <Heading h1Class="aboutwherewe" title="Services"></Heading>
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
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="serviceLead">
                    <img
                      class="thumbnail-light-image"
                      src={user.serviceimg}
                      alt=""
                    />
                  </div>
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
                      <Heading h1Class="aboutwherewe"  title="Our Best Services"></Heading>
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
