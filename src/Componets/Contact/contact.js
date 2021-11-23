import React, { useState,useRef } from "react";
import axios from "axios";
import Recaptcha from 'react-google-invisible-recaptcha';
import Heading from "../Heading/Heading";
import './contact.css';
import indiaflag from "../../img/india.jpg";
import unitedflag from "../../img/US.jpg";
import Button from "../ButtonGroup/Button/Button";

const Contact = () => {

//Form POST API   
    const [postform, setPostForm] = React.useState([]);
    React.useEffect(() => {
        axios.post('https://rdigs-api.herokuapp.com/').then((response) => {
            setPostForm(response.data);
            console.log(setPostForm);
        });
    }, []);

//Form inputs logic  
    // const [data, setData] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPostForm(values => ({...values, [name]: value}))
      }
    const handleSubmit = (event) => {
        event.PrevenDafult();
        console.log(postform);      
      }     
//   Reset button functinality 
    const handleReset = (e) => {
        console.log("reset");
        setPostForm(" ");   
        e.PrevenDafult();
    }

//Form Radio button logic  
     const [radiotext, showRadiotext] = useState(false); 
// Google Captcha 
      const recaptchaRef = React.createRef();
      let recaptcha = useRef(null);
      const onResolveddata = () => {
          console.log("a" + recaptcha.current.getResponse());
      }

    return (
        <>
        <div className="nav-contaniner" />
            <section className="contactfirst-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                        </div>
                          <div className="col-lg-6 col-md-12 col-sm-12 contformcol">
                            <h2 className="contgetin" data-aos="fade-up">Get in Touch</h2>
                            <form autocomplete="off">
                                <div class="form-group">
                                    <input class="form-controlall" aria-describedby="emailHelp" placeholder="Enter Name"
                                     type="text" 
                                     name="name" 
                                     value={postform.name ||""} 
                                     onChange={handleChange}   
                                     />
                                </div>
                                <div class="form-group">
                                    <input class="form-controlall" aria-describedby="emailHelp" placeholder="Enter Phone No"
                                         type="number" 
                                         name="contact" 
                                         value={postform.contact || ""} 
                                         onChange={handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <input class="form-controlall" aria-describedby="emailHelp" placeholder="Enter Email" style={{width:'90%'}}
                                          type="email" 
                                          name="email" 
                                          value={postform.email || ""} 
                                          onChange={handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <input class="form-controlall" placeholder="Enter Company Name"
                                         type="text" 
                                         name="company_name" 
                                         value={postform.company_name || ""} 
                                         onChange={handleChange}
                                     />
                                </div>
                                <label className="conwhattxt">What Would You like to inquire about?</label><br />
                                <div className=" row conradiodiv" style={{textAlign:'justify',paddingLeft:'4%'}}>
                                    <div className="col-sm-3 conradiodiv">
                                        <input className="conradiofirst" type="radio" id="age1" value="30"  onClick={() => showRadiotext(false)}
                                           name="services" 
                                           value={postform.services || ""} 
                                           onChange={handleChange}
                                        />
                                        <label for="age1"  style={{marginLeft:'5px'}}>Demand Generation</label>
                                    </div>
                                    <div className="col-sm-3 conradiodiv">
                                        <input className="conradiofirst" type="radio" id="age1" name="age" value="30"  onClick={() => showRadiotext(false)}
                                           name="services" 
                                           value={postform.services || ""} 
                                           onChange={handleChange}
                                           />
                                        <label className="contactsale" for="age1">Sales Empowerment</label>
                                    </div>
                                    <div className="col-sm-3 conradiodiv">
                                        <input className="conradiofirst" type="radio" id="age1" name="age" value="30" onClick={() => showRadiotext(false)}
                                        name="services" 
                                        value={postform.services || ""} 
                                        onChange={handleChange}
                                        />
                                        <label for="age1" style={{marginLeft:'5px'}} >Data Enrichment</label>
                                    </div>
                                    <div className="col-sm-3 conradiodiv">
                                        <input className="conradiofirst" type="radio" id="age1" name="age" value="30" onClick={() => showRadiotext(true)}  />
                                        <label for="age1" style={{marginLeft:'5px'}} >Other</label>
                                    </div>
                                </div>
                                {/* others Radio button functinality */}
                                <input className="col-lg-12 col-md-12 radiotextarea" type="text" placeholder="Service Name" 
                                 style={{ display: radiotext ? "block" : "none"}} 
                                 name="services" 
                                 value={postform.services || ""} 
                                 onChange={handleChange}
                                 />
                                <input className="col-lg-12 col-md-12 radiotextarea" type="textarea" placeholder="Your Message"
                                  name="message" 
                                  value={postform.message || ""} 
                                  onChange={handleChange}
                                />
                                <div className="row conbtnrow">
                                    <div className="col btngetintouch">
                                        <Button classNames="allbtn-primary glow-on-hover text-light" fun={() => handleSubmit()} text="GET IN TOUCH" />
                                    </div>
                                    <div className="col conformcleardiv">
                                        <button className="contactclear22" onClick={handleReset}>Clear</button>
                                    </div>
                                </div>
                                 <Recaptcha 
                                     badge="bottomleft"
                                     ref={recaptcha}
                                     onChange={onResolveddata}
                                     onExpired={() => {
                                     recaptcha.current.reset();
                                     }}
                                     sitekey="6Lct3zkdAAAAAO0KFEeZ9r7wmIfATa-qpOCp4F-T"
                                     Secret Key="6Lct3zkdAAAAAGQ4KCB3UKQ9qqOg7VvYPyLqkfbL"    
                                 />
                            </form> 
                        </div> 
                    </div>
                </div>
            </section>

            <section>
                <div className="container" data-aos="fade-up">
                     <Heading h1Class="clientheadwe" title="Contact Us" />
                    <p className="consubtxt">Get in Touch with us to embark on a path of success</p>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6" style={{ textAlign: 'justify' }}>
                            <h3 className="conindiaoffice" >
                                <img src={indiaflag} className="flagimg"/>India Office (HQ)</h3>
                            <p className="conIndaddress">
                                <span><i class="fa fa-map-marker conaddmaker" ></i></span>
                                402, Vascon Garnets Bay,Besides Hotel Four Points By Sheraton,<br /><span style={{ paddingLeft: '4%' }}>Viman Nagar, Pune - 411014.</span>
                            </p>
                            <div >
                                <p className="conaddphone">
                                    <span><i class="fa fa-phone" style={{ color: '#30a6e9', fontSize: '25px', paddingRight: '10px' }}></i></span>
                                    <a style={{color:'black'}}href="tel:+848-404-0734">+91 848-404-0734</a>
                                </p>
                                <p className="conaddphone">
                                    <span><i class="fa fa-envelope" style={{ fontSize: '20px', color: '#30a6e9', paddingRight: '10px' }}></i></span>
                                    <a style={{color:'black'}} href="mailto:contact@rdigs.com" target="_blank">contact@rdigs.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6" style={{textAlign:'justify'}}>
                            {/* USA Section */}
                            <h3><img src={unitedflag} className="flagimg" />USA Office</h3>
                            <p>
                                <span><i class="fa fa-map-marker" style={{ fontSize: '25px', color: '#30a6e9', marginRight: '3%' }}></i></span>
                                919 North Market Street, Suite 950, Wilmington, Delaware 19801.
                            </p>
                            <div style={{ paddingTop: '3%' }}>
                                <p className="usaconaddphone">
                                    <span><i class="fa fa-phone" style={{ fontSize: '25px', color: '#30a6e9', paddingRight: '10px' }}></i></span>
                                    <a style={{color:'black'}} href="tel:+1 3022615312">+1 302-261-5312</a>
                                </p>
                                <p className="usaconaddphone">
                                    <span><i class="fa fa-envelope" style={{ fontSize: '20px', color: '#30a6e9', paddingRight: '10px' }}></i></span>
                                    <a style={{color:'black'}} href="mailto:sales@rdigs.com" target="_blank">sales@rdigs.com</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div class="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17990.951722906604!2d73.91312675685437!3d18.56810017841577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f11c307f0415be4!2sRD%20INFO%20GLOBAL%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1631516719617!5m2!1sen!2sin" width="100%" height="200" frameborder="0"
                                    style={{ border: '0' }} allowFullScreen ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;

