import "./about.css";
import aboutfrontimg from "../../img/About-us-1.png";
import Heading from "../Heading/Heading";
import React  from 'react';
const about = () => {
  return (
    <>
            <section className="aboutsec1">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6" data-aos="zoom-in-up">
                          <Heading  h1Class="clientheadwe" title="About"/>
                              <p className="aboutpara">RD Info Global Solutions, RDIGS is a human driven and technology powered lead and demand generation company. We aid companies to generate, nurture, and convert leads to revenue.</p>
                              <p className="aboutpara"> When our team of experts collaborate with you, we ensure that the lead and demand generation practices we adopt and implement are multi-channel and upscale in strategy and planning. </p> 
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6" data-aos="flip-right">
                          <div class="elementor-image">
                            <img  className="aboutsecimg" alt="" srcSet={aboutfrontimg} sizes="(max-width: 100px) 50vw, 100px"/>											
                          </div>
                        </div>
                    </div>
                </div>                   
            </section>  
    </>
  );
};
export default about;
