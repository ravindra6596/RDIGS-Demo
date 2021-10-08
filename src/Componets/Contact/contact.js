import React  from "react";
import './contact.css';
import indiaflag from "../../img/india.jpg";
import unitedflag from "../../img/US.jpg";
import Button from "../ButtonGroup/Button/button";



const contact =()=>{
    return(
    <>      
    
    <div className="nav-contaniner"/>
        <section className="contactfirst-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6"> 
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12" style={{backgroundColor:'white'}}>
                        <h2 className="contgetin"  data-aos="fade-up">Get in Touch</h2>
                        <form>
                                <div class="form-group">
                                     <input type="text" class="form-controlall" aria-describedby="emailHelp" placeholder="Enter Name"/>
                                </div>
                                <div class="form-group">
                                     <input type="number" class="form-controlall" aria-describedby="emailHelp" placeholder="Enter Phone No"/>
                                 </div>
                                <div class="form-group">
                                     <input type="text" class="form-controlall" aria-describedby="emailHelp" placeholder="Enter Email"/>
                                 </div>   
                                <div class="form-group">
                                    <input type="text" class="form-controlall" placeholder="Enter Company Name"/>
                                </div>
                            <label className="conwhattxt">What Would You like to inquire about?</label><br/>
                            <div className=" row conradiodiv ">
                                <div className="col-sm-3 conradiodiv">
                                    <input className="conradiofirst" type="radio" id="age1" name="age" value="30" />
                                    <label for="age1">Demand Generation</label>
                                </div>
                                <div className="col-sm-3 conradiodiv">
                                    <input type="radio" id="age1" name="age" value="30"/>
                                    <label for="age1" >Sales Empowerment</label>
                                </div>  
                                <div className="col-sm-3 conradiodiv">  
                                <input type="radio" id="age1" name="age" value="30"/>
                                    <label for="age1" >Data Enrichment</label>
                                </div>
                                <div className="col-sm-3 conradiodiv">
                                <input type="radio" id="age1" name="age" value="30"/>
                                    <label for="age1" >Other</label>
                                </div>
                            </div>   


                            <div className="row" style={{padding:'4%'}}>
                                <div className="col conformcleardiv"> <Button classNames="btnclear"text="Clear"/></div>
                                <div className="col btngetintouch"><Button classNames="allbtn-primary glow-on-hover text-light" text="GET IN TOUCH" /></div>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>        
        </section>
        
        <section>
            <div className="container">
                <h2 className="contacthead"  data-aos="fade-up" >Contact Us</h2>
                 <p className="consubtxt">Get in Touch with us to embark on a path of success</p>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6" style={{textAlign:'justify'}}>
                         <h3  className="conindiaoffice" >
                            <img src={indiaflag}  className="flagimg" />India Office (HQ)</h3>
                            <p className="conIndaddress"> 
                            <span><i class="fa fa-map-marker conaddmaker" ></i></span>
                                402, Vascon Garnets Bay,Besides Hotel Four Points By Sheraton,<br/><span style={{paddingLeft:'4%'}}>Viman Nagar, Pune - 411014.</span>
                            </p>
                            <div >
                            <p className="conaddphone">
                                <span><i class="fa fa-phone" style={{color:'#30a6e9',fontSize:'25px',paddingRight:'10px'}}></i></span>
                                +91 848-404-0734
                            </p>
                            <p className="conaddphone">
                                <span><i class="fa fa-envelope"style={{fontSize:'20px',color:'#30a6e9',paddingRight:'10px'}}></i></span>
                                contact@rdigs.com
                             </p>
                             </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                          {/* USA Section */}
                          <h3  className="conUSAoffice"  >
                                 <img src={unitedflag} className="flagimg" />USA Office</h3>
                            <p> 
                            <span><i class="fa fa-map-marker" style={{fontSize:'25px',color:'#30a6e9',marginRight:'3%'}}></i></span>      
                            919 North Market Street, Suite 950, Wilmington, Delaware 19801.
                            </p>
                            <div style={{paddingTop:'3%'}}>
                            <p className="usaconaddphone">
                                <span><i class="fa fa-phone" style={{fontSize:'25px',color:'#30a6e9',paddingRight:'10px'}}></i></span>
                                 +1 302-261-5312
                            </p>
                            <p className="usaconaddphone">
                                <span><i class="fa fa-envelope" style={{fontSize:'20px',color:'#30a6e9',paddingRight:'10px'}}></i></span>
                                sales@rdigs.com
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
                            style={{border:'0'}} allowFullScreen ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </section>
           
    </>
)
}
export default contact;

