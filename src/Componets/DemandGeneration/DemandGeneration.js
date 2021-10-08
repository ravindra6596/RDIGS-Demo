import React from 'react';
import './DemandGeneration.css';
import Button from '../ButtonGroup/Button/button';
import demad2 from '../../img/services/demand1.png';
import s1 from '../../img/services/digital-marketing-3.png';
import service1 from '../../img/services/service1.jpg';
import service2 from '../../img/services/service2.jpg';
import service3 from '../../img/services/service3.jpg';
import service4 from '../../img/services/service4.jpg';
import service5 from '../../img/services/service5.jpg';
import service6 from '../../img/services/service6.jpg';
import service7 from '../../img/services/service7.jpg';
import service8 from '../../img/services/service8.jpg';
import min from '../../img/services/min.jpg';
import Heading from '../Heading/Heading';
const DemandGeneration=()=>{
    const data=[
        {
            servicename:"Cash Management",
            serviceimg:service1,
        },
        {
            servicename:"Payments",
            serviceimg:service2,
        },
        {
            servicename:"M &amp; A Assistance",
            serviceimg:service3,
        },
        {
            servicename:"Local Expertise",
            serviceimg:service4,
        },
        {
            servicename:"Video &amp; Photo Production",
            serviceimg:service5,
        },
        {
            servicename:"Graphic designed",
            serviceimg:service6,
        },
        {
            servicename:"Strategy",
            serviceimg:service7,
        },
        {
            servicename:"Branding",
            serviceimg:service8,
        }
       
    ];
    const servicecard=[
        {
            serviceimgicon:s1,
            serviceinnerh1:"Video Marketing",
            serviceinnerpara:"Reach a huge area of users and get a publicty of your product and service ",
            serviceinnerspan:"video marketing",
            serviceinnerpara1:"solution."

        },
        {
            serviceimgicon:s1,
            serviceinnerh1:"Email Marketing",
            serviceinnerpara:"Email Marketing is a great solution to reach a",
            serviceinnerspan:"high range of customers",
            serviceinnerpara1:"eagrerly waiting to get a service."

        },
        {
            serviceimgicon:s1,
            serviceinnerh1:"SEO optimization",
            serviceinnerpara:"we provide wide range of",
            serviceinnerspan:"seo service",
            serviceinnerpara1:"to make your site at top to reach your target customers provided."

        }

    ];
    
    return(
        <>
      <div className="nav-contaniner"/>
        <section className="Demand-Generation-Sec">
            <div className="container">     
                    <div className="text-center heading-demand">
                       <h1 className="text-center Demand-heading-top">Demand Generation</h1>
                    </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="Demand-title aos-init aos-animate" data-aos="fade-right">
                            <h4 className="Demand-subhead" data-aos="fade-down">Create. Publish. Syndicate.</h4>
                            <p class="Demand-right" data-aos="fade-down">
                                
                             Your strategy for content marketing should include business objectives along with audience 
                             targeting and running native ads. We can help you increase the number of viewers on your website
                              as well as your reputation by syndicating content.
                    
                            </p>
                                <Button classNames="allbtn-primary glow-on-hover text-light Drive-Excess-Conversion" text="Reach Customers Across the web" data-aos="fade-left"></Button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="text-center lg-img aos-init aos-animate" data-aos="fade-left">
                            <img src={demad2} alt="Demand Generation" className="Demand-img1" data-aos="fade-down"/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section id="service-2" class="section-padding11 pb-5">
      <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 service-box-2-col">
                <div class="service-box-2 mb-5">
                <span>01</span>
                <h4>Best <br></br>Analytics Audits</h4>
                <p class="mb-0">We have had the pleasure of partnering with a wide array of brands ranging from tech startups to Fortune 500 enterprises.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 service-box-2-col">
                <div class="service-box-2 mb-5">
                <span>02</span>
                <h4>Deep <br></br>Technical SEO</h4>
                <p class="mb-0">Over the last decade, we have had the pleasure of partnering with a wide array of brands ranging
                    enterprises.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 service-box-2-col">
                <div class="service-box-2 mb-5 ">
                <span>03</span>
                <h4>Modern <br></br>Keyword Analysis</h4>
                <p class="mb-0">Over the last decade a wide array of brands ranging from tech startups to Fortune 500 enterprises.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
      <section class="section-ser pt-0">
            <div class="container">
                <div class="row align-items-center">
                <div class="col-lg-5 col-sm-12 col-md-6 mb-5 mb-lg-0">
                   
                        <div className="demand-img-outer">
                          <img src={min} alt="feature bg" class="img-fluid demand-imgleft"/>
                        </div>
                    
                </div>

                <div class="col-lg-7 pl-4">
                    <div class="mb-5">
                    <div className="d-flex justify-content-center">
                        <Heading title="Reach your Target Audience"></Heading>
                    </div>
                    <p>
                    We run account-based marketing (ABM) campaigns for targeting the accounts by professional demographics to drive more conversions. 
                    We generate target accounts and nurture them based on content, relevant communications and contextual marketing.
                    </p>
                    </div>
                    <ul class="about-list">
                    <li>
                        <h5 class="mb-2 text-light">
                        <i class="fa fa-check-circle"></i>Responsive site</h5>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                    </li>

                    <li>
                        <h5 class="mb-2 text-light"><i class="fa fa-check-circle"></i> Latest bootstrap 4</h5>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                    </li>

                    <li>
                        <h5 class="mb-2 text-light"><i class="fa fa-check-circle"></i>Modern design</h5>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                    </li>
                    <li>
                        <h5 class="mb-2 text-light"><i class="fa fa-check-circle"></i>Working contact form</h5>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
      </section>
    
   
      <section id="service-head" class="service-style-two">
        <div class="container">
            <div class="row justify-content-center">
            <div class="col-lg-8 col-sm-12 m-auto">
                <div class="heading text-white text-center">
                    <div className="d-flex justify-content-center">
                      <Heading title="Servicess Demand Generation"></Heading>
                    </div>
                <p>We’re full service which means we’ve got you covered on design &amp; content right through to digital. You’ll form a lasting relationship with us.</p>
                </div>
            </div>
            </div>
        </div>
       </section>
       <section id="service">
  <div class="container">
    <div class="row">
    {
            servicecard.map((user,index)=>{
                return(
                      <div class="col-lg-4 col-sm-6 col-md-6">
                        <div class="service-box">
                            
                            <div class="service-img-icon">
                            <img src={user.serviceimgicon} alt="service-icon" class="img-fluid"/>
                            </div>
                            <div class="service-inner">
                            <h4>{user.serviceinnerh1}</h4>
                            <p>{user.serviceinnerpara}&nbsp;<span>{user.serviceinnerspan}</span>&nbsp;{user.serviceinnerpara1}</p>
                            </div>
                        </div>
                      </div>
                     )
                 })
     }
 
    </div>
  </div>
</section>
        </>
    )
}
export default DemandGeneration;