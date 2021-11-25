import React, { useState,useRef,Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '../ButtonGroup/Button/Button';
import ind from '../../img/india.jpg';
import us from '../../img/US.jpg';
import footenvolep from '../../img/mailicon.jpg';
import './Footer.css';
import Recaptcha from 'react-google-invisible-recaptcha';
import {Modal, ModalBody} from 'reactstrap';
import corporatedeskimg from '../../img/corpomodalimg.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Footer = () => {
// variable for copy right get system date function
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
// function for corporate disk
      const toggle = () => setModal(!modal);
      const [modal, setModal] = useState(false);
      
      const recaptchaRef = React.createRef();
      let recaptcha = useRef(null);
  
      const onResolveddata = () => {
          console.log("a" + recaptcha.current.getResponse());
      }

// footer scrollup icons show state
const [showScrollup, setShowScroll] = useState(false)

const checkingScrollTop = () => {
  if (!showScrollup && window.pageYOffset > 400) {
    setShowScroll(true)
  } else if (showScrollup && window.pageYOffset <= 400) {
    setShowScroll(false)
  }
};
const scrollgoTop = () => {
  window.scrollTo({ top:0, behavior: 'smooth' });
};
window.addEventListener('scroll', checkingScrollTop)

//any where in the page scroll on top Navigation click open on top
const scrollgoToplink = () => {
    window.scrollTo({ top:0});
  };

  //API calling for media kit
  const { register, handleSubmit ,reset } = useForm();
  const onSubmit = (data) =>{
      axios.post('https://rdigs-api.herokuapp.com/mediakit',data)
      .then(res=>{
          console.log(res.data);
          reset();
      })
  }

    return (
        <>
        <div>
            <button  className="back-to-top "  onClick={scrollgoTop}
            style={{visibility: showScrollup ? 'visible' : 'hidden' }} >
           <i class="fa fa-angle-double-up"></i></button>
        </div>
        
        <section className="media-kit">
            <div className="container mediakit-cont">
            <div className="row">
                    <div className="col-sm-12 col-lg-8 col-md-8 text-light">
                        <div className="mediakitdiv">
                        <h1 className="mediakithead data-shadow='dang!'">CORPORATE DECK 2021</h1>
                        </div>
                        <div className="mediakit-para slide-right">
                           <p className="mediakit-para" data-aos="flip-left">By focusing on top of the funnel,we arm your sales and marketing team with larger audience of potential leads to keep you ahead in the game.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 col-md-4 cop-btn">
                        <div className="downbtncop">
                    <Button text="DOWNLOAD NOW" fun={()=>setModal(true)} classNames="allbtn-primary glow-on-hover text-light downloadnow-btn">
                    </Button>
                    </div>
                    </div>
                    <div className="Modal-animation">
                         <Modal centered isOpen={modal} toggle={toggle} className="model-corporatedeck-style">
                                <ModalBody>
                                  <span className="homemodalclosebtn" onClick={() => setModal(false)} ><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                                            <div className="container"> 
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                        <img src={corporatedeskimg} alt="corporate-dec-img" className="corporate-img img-fluid"></img>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                        <h2 className="text-center model-head-cop">Corporate Deck 2021</h2>
                                                            <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                                                                <div className="corporate-form-in1">
                                                                <i className="fa fa-user"></i>
                                                                <input type="text" {...register("name",{ required: "Please enter your name." })} className="form-corporateDeck-fname" id="Fname" placeholder="Enter Your Name" autocomplete="off"/>
                                                                </div>
                                                                <div className="corporate-form-in3">
                                                                <i className="fa fa-phone"></i>
                                                                <input type="number" {...register("contact",{ required: "Please enter your phone number." })} className="form-corporateDeck-number" id="Pnumber" placeholder="Phone Number" maxLength="10" required/>
                                                                </div>
                                                                <div className="corporate-form-in4">
                                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                                <input type="email" {...register("email",{ required: "Please enter your email." })} className="form-corporateDeck-email" id="Email" placeholder="Your Email" autocomplete="off" required/>
                                                                </div>
                                                                <div className="corporate-form-in5">
                                                                <i className="fa fa-address-book" aria-hidden="true"></i>
                                                                <input type="text" {...register("company_name",{ required: "Please enter your company name." })} className="form-corporateDeck-company" id="Company" placeholder="Company Name" autocomplete="off" required/>
                                                                </div>
                                                                <div className="d-flex justify-content-center" style={{marginTop:'10px'}}>
                                                                     <Button text="Submit" type="submit" classNames="allbtn-primary glow-on-hover text-light"></Button>
                                                                </div>
                                                            </form>
                                                    </div>
                                                </div> 
                                            </div>
                                </ModalBody>
                        </Modal>
                    </div>               
                </div>
            </div>
        </section>
        <section className="footer-cont">
            <div className="container">
                <div className="row footer-row" >
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 footrescol">
                        <div className="footersec-RDInfo">
                            <h5 className="footer-tit text-light">RD INFO GLOBAL SOLUTIONS</h5>
                            <p><Link to="#" className="underline"></Link></p>
                            <div className="sep"></div>
                            <h6 className="text-footer-info text-light">RDIGS was founded in 2013 formerly known as RD info Solutions.
                                Bootstrapped serving clients for B2C Lead Generation campaigns.It was not too late when we identified the need of lead generation activities for B2B Marketers.
                            </h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  col-sm-6 col-xs-6 footrescol" style={{textAlign:'justify'}}>
                        <h5 className="text-light contactus-footer">CONTACT US</h5>
                        <i className="fa fa-map-marker footaddmapicon"> </i> 
                        <span className="footaddvascon">
                         402, Vascon Garnets Bay,Besides Hotel Four Points By Sheraton, Viman Nagar, Pune-411014.
                        </span>
                        <div className="footresdiv" style={{marginTop:'5px'}}> 
                            <img className="footemailimg" src={footenvolep} alt="No"/>
                            <span className="Email-info"><a href="mailto:sales@rdigs.com" target="_blank">sales@rdigs.com</a></span>
                        </div>
                        <div className="footresdivhr" style={{marginTop:'5px'}}> 
                        <img className="footemailimg" src={footenvolep} alt="No" />  
                        <span className="Email-info"><a href="mailto:hr@rdigs.com" target="_blank">hr@rdigs.com</a></span>
                        </div>
                        <div className="footresdiv" style={{marginTop:'5px'}}> 
                        <span className="ind">
                            <img className="text-light img-us" src={ind} alt="No" />
                            <span className="Email-info"><a href="tel:+848-404-0734">+91 848-404-0734</a></span>
                        </span>
                        </div>
                        <div className="footresdiv" style={{marginTop:'5px'}}> 
                        <span className="us">
                            <img className="text-light img-ind" src={us} alt="No" />
                            <span className="Email-info"><a  href="tel:+1 3022615312">+1 302-261-5312</a></span>
                        </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  col-sm-6 col-xs-6 footer-links footrescol">
                        <h5 className="ourservices text-light">OUR SERVICES</h5>
                        <ul className="text-light services">
                            <li> <Link className="services-webdevlopment" to="/demandgeneration" onClick={scrollgoToplink}>Demand Generation</Link></li>
                            <li><Link className="services-webdevlopment" to="/salesDevelopment" onClick={scrollgoToplink}>Sales Development</Link></li>
                            <li><Link className="services-webdevlopment" to="/databaseservice" onClick={scrollgoToplink}>Database Service</Link></li>
                            <li><Link className="services-webdevlopment" to="/privacypolicy" onClick={scrollgoToplink}>Privacy Policy</Link></li>   
                            <li> <Link className="services-webdevlopment" to="/termscondition" onClick={scrollgoToplink}>Terms And Conditions</Link></li>   
                            <li><Link className="services-webdevlopment" to="/unsubscribe" onClick={scrollgoToplink}>Unsubscribe</Link></li>                             
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6  col-sm-6 col-xs-6 text-light footer-newsletter footrescol">
                        <h5 style={{fontSize:'17px',fontFamily:'Orbitron'}}>JOIN OUR NEWSLATTER</h5>
                        <p>Subscribe to our newsletter to get latest updates.</p>
                        <div className="inputs">
                            <input maxlength="60" className="webform__form-control" name="email" size="20" type="email" placeholder="Enter Your Email" autocomplete="off" required style={{borderRadius:'0px'}}/>
                            <input type="submit" name="submit" id="eesubmit" className="EWF__subscribe" value="SUBSCRIBE" style={{borderRadius:'0px'}}/>

                        </div>
                    </div>
                </div>
            </div>
            <section className="copyright-section">
            <div className="container">
                <div className="row d-flex justify-space-between">
                    <div className="col-lg-6 col-md-6 col-sm-6 me-md-auto text-center text-md-start footrescol">
                        <div id="copyright" className="clr copyright-center" role="contentinfo">
                            Copyright © <span>{getCurrentYear()}</span> <a href="https://rdigs.com/" target="_blank" className="footerlinkhover" style={{fontWeight:'bolder'}}>RD Info Global Solutions</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div  className="copydesign" >
                           Designed by <a href="http://lead-tronics.com/" target="_blank" className="footerlinkhover" style={{fontWeight:'bolder'}}>LeadTronics</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </section>
    </>
    )
}
export default Footer;
