
import './AppointmentSetting.css';
import React, { Component }  from 'react';
import Heading from "../Heading/Heading";
import callbackimg1 from "../../img/callbackimg1.png";
import salesquaimg2 from "../../img/callbackimg2.jpg";
const AppointmentSetting =()=>{
    return(
    <>
        <div className="nav-contaniner"/>
          <section className="appointset-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Appointment Setting"/>
                            <p style={{color:'white'}}data-aos="fade-right">Turning Prospects Into Buyers </p>
                        </div>
                    </div>
                </div>
            </section>   
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols1">
                            <Heading h1Class="clientheadwe" title="Turning Prospects Into Buyers"/>
                            <p style={{textAlign:'justify'}}>Appointment setting requires exemplary persuasive skills that will convert the conversation into customers. We have an astute team who drives sales and increases productivity.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols2"data-aos="zoom-in-down">
                            <img className="img-fluid" src={callbackimg1}/>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols3"data-aos="zoom-in-up">
                            <img className="img-fluid" src={salesquaimg2}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols4">
                            <Heading h1Class="clientheadwe" title="We Are Sales Pitch Masters"/>
                            <p style={{textAlign:'justify'}}>RDIGS with its adept workforce makes a healthy sales pipeline. Our communicators make a stunning first impression and get the interested prospects to meet our sales team and that will turn into a solid deal.</p>
                        </div>
                    </div>
                </div>
            </section>
</>
)
}
export default AppointmentSetting;

