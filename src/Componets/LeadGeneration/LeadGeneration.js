import React from "react";
import "./LeadGeneration.css";
import Heading from "../Heading/Heading";
import Button from "../ButtonGroup/Button/button";
import demand1 from "../../img/services/demand2.png";
import min from "../../img/services/min.jpg";
import service1 from "../../img/services/service1.jpg";
import service2 from "../../img/services/service2.jpg";
import service3 from "../../img/services/service3.jpg";
import service4 from "../../img/services/service4.jpg";
import service5 from "../../img/services/service5.jpg";
import service6 from "../../img/services/service6.jpg";
import service7 from "../../img/services/service7.jpg";
import service8 from "../../img/services/service8.jpg";
const LeadGeneration = () => {
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
      <section className="Lead-Generation-Sec">
        <div className="container">
          <div className="d-flex justify-content-center Lead-heading-top">
            <Heading title="Lead Generation"></Heading>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div
                class="text-center lg-img aos-init aos-animate"
                data-aos="fade-left"
              >
                <img
                  src={demand1}
                  alt="Lead Generation"
                  className="Lead-img1"
                  data-aos="fade-up"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
              <div class="lead-title aos-init aos-animate" data-aos="fade-up">
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
                <Button
                  classNames="allbtn-primary glow-on-hover text-light Drive-Excess-Conversion"
                  data-aos="fade-left"
                  text="Drive-Excess-Conversion"
                ></Button>
                <br></br>
              </div>

import React from 'react';
import './LeadGeneration.css';
import Button from '../ButtonGroup/Button/button';
import Leadimg1 from '../../img/services/Leadimg1.png';
import service1 from '../../img/services/service1.jpg';
import service2 from '../../img/services/service2.jpg';
import service3 from '../../img/services/service3.jpg';
import service4 from '../../img/services/service4.jpg';
import service5 from '../../img/services/service5.jpg';
import service6 from '../../img/services/service6.jpg';
import service7 from '../../img/services/service7.jpg';
import service8 from '../../img/services/service8.jpg';
const LeadGeneration=()=>{
    return(
        <>
        <div className="nav-contaniner"/>
         <section className="Lead-Generation-Sec" style={{marginTop:'1%'}}>
            <div className="container">
                <div className="text-center Lead-heading-top">
                     <h1 className="text-center">Lead Generation</h1>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="lead-title aos-init aos-animate" data-aos="fade-right">
                            <h4 className="Lead-subhead" data-aos="fade-down">Identify your Target Accounts</h4>
                            <p class="lead-right" data-aos="fade-down">
                                We run account-based marketing (ABM) campaigns for targeting the accounts by professional 
                                demographics to drive more conversions. We generate target accounts and nurture them based
                                 on content, relevant communications and contextual marketing.
                            </p>
                                <Button  classNames="allbtn-primary glow-on-hover text-light"  text="Drive Excess Conversion" data-aos="fade-left"></Button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="text-center lg-img aos-init aos-animate" data-aos="fade-left">
                            <img src={Leadimg1} alt="Lead Generation" className="Lead-img1" data-aos="fade-down"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="text-center lg-img aos-init aos-animate" data-aos="fade-left">
                            <img src={Leadimg1} alt="Lead Generation" className="Lead-img1" data-aos="fade-up"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="lead-title aos-init aos-animate" data-aos="fade-up">
                            <h4 className="Lead-subhead" data-aos="fade-up">Reach your Target Audience</h4>
                            <p class="lead-right" data-aos="fade-up">
                                We run account-based marketing (ABM) campaigns for targeting the accounts 
                                by professional demographics to drive more conversions. We generate target 
                                accounts and nurture them based on content, relevant communications and contextual marketing.
                            </p>
                                <Button   classNames="allbtn-primary glow-on-hover text-light"  text="Drive Excess Conversion" data-aos="fade-left">Strengthen your ABM Strategy</Button>
                            <br></br>
                        </div>  
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-services text-center">
        <div class="container">
          <div className="d-flex justify-content-center" data-aos="fade-down">
            <Heading title="Services"></Heading>
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
        <div
          class="support-company-area pt-100 pb-100 section-bg fix"
          data-background="assets/img/gallery/section_bg02.jpg"
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6">
                <div class="support-location-img">
                  <img src={min} alt="" data-pagespeed-url-hash="1368735680" />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="right-caption">
                  <div class="section-tittle section-tittle2 mb-50">
                    <div className="d-flex justify-content-center">
                      <Heading title="Our Best Services"></Heading>
                    </div>
                  </div>
                  <div class="support-caption">
                    <p class="pera-top">
                      Mollit anim laborum duis adseu dolor iuyn voluptcate velit
                      ess cillum dolore egru lofrre dsu quality mollit anim
                      laborumuis au dolor in voluptate velit cillu.
                    </p>
                    <p class="mb-65">
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
        </div>
      </section>
      <section id="services-3"></section>
    </>
  );
};
export default LeadGeneration;
