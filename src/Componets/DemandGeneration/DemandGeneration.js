import React from 'react';
import './DemandGeneration.css';
import Button from '../ButtonGroup/Button/button';
import demad2 from '../../img/services/demad2.png';
import service1 from '../../img/services/service1.jpg';
import service2 from '../../img/services/service2.jpg';
import service3 from '../../img/services/service3.jpg';
import service4 from '../../img/services/service4.jpg';
import service5 from '../../img/services/service5.jpg';
import service6 from '../../img/services/service6.jpg';
import service7 from '../../img/services/service7.jpg';
import service8 from '../../img/services/service8.jpg';
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
    return(
        <>
      <div className="nav-contaniner"/>
        <section className="Demand-Generation-Sec" style={{marginTop:'1%'}}>
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
                                <Button text="Reach Customers Across the web" data-aos="fade-left"></Button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="text-center lg-img aos-init aos-animate" data-aos="fade-left">
                            <img src={demad2} alt="Demand Generation" className="Demand-img1" data-aos="fade-down"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div class="text-center lg-img aos-init aos-animate" data-aos="fade-left">
                            <img src={demad2} alt="Demand Generation" className="Demand-img1" data-aos="fade-up"/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="Demand-title aos-init aos-animate" data-aos="fade-left">
                            <h4 className="Demand-subhead" data-aos="fade-up">Reach your Target Audience</h4>
                            <p class="Demand-right" data-aos="fade-up">
                                We run account-based marketing (ABM) campaigns for targeting the accounts 
                                by professional demographics to drive more conversions. We generate target 
                                accounts and nurture them based on content, relevant communications and contextual marketing.
                            </p>
                                <Button text="Drive Excess Conversion" data-aos="fade-left">Strengthen your ABM Strategy</Button>
                            <br></br>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
       
        <section class="section-services text-center">
        <div class="container">
          <h3 className="heading-services" data-aos="fade-down">Services</h3>
          <p><span class="text-width-1" data-aos="fade-down">As the most qualified accounting services provider, we offer an amazing variety of financial solutions designed to help you solve all bookkeeping issues, no matter big or small.</span></p>
          <div class="row row-50 row-xxl-70 offset-top-2 services-row">
                    {
                        data.map((user,index)=>{
                            return(
                                <div class="col-sm-6 col-lg-3">
                                    <div className="serviceLead">
                                      <img class="thumbnail-light-image" src={user.serviceimg} alt="" />
                                    </div>
                                <h5 class="thumbnail-light-title" data-aos="fade-left">{user.servicename}</h5>
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