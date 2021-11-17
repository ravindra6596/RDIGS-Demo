import React  from "react";
import './ConfirmedCallback.css';
import Heading from "../Heading/Heading";
import callbackimg1 from "../../img/callbackimg1.png";
import salesquaimg2 from "../../img/callbackimg2.jpg";

const ConfirmedCallback =()=>{
    return(
    <>
         <div className="nav-contaniner"/>
          <section className="sercallback-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Confiremed CallBack"/>
                            <p style={{color:'white'}}data-aos="fade-right">Designed For Guaranteed Results</p>
                        </div>
                    </div>
                </div>
            </section>   
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols1">
                            <Heading h1Class="clientheadwe" title="Designed For Guaranteed Results"/>
                            <p style={{textAlign:'justify'}}>With CCL you can open the doors for your sales reps to connect with prospects who agreed to receive a call-back or get a demo of your services. A simple yet tricky process.</p>
                            <ul style={{textAlign:'justify',listStyle:'none'}}>
                                <li><i class="fa fa-arrow-right" aria-hidden="true" style={{color:'#30a6e9'}}></i>Finding potential leads</li>
                                <li><i class="fa fa-arrow-right" aria-hidden="true" style={{color:'#30a6e9'}}></i>Communicating for confirmation</li>
                                <li><i class="fa fa-arrow-right" aria-hidden="true" style={{color:'#30a6e9'}}></i>Scheduling good time to talk</li>
                                <li><i class="fa fa-arrow-right" aria-hidden="true" style={{color:'#30a6e9'}}></i>Converting prospect into lead.</li>
                            </ul>
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
                    <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols3"data-aos="zoom-in-down">
                            <img className="img-fluid" src={salesquaimg2}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols4">
                            <Heading h1Class="clientheadwe" title="Crafted For Your Needs"/>
                            <p style={{textAlign:'justify'}}>Our hybrid model of CCL, is designed to give your business an unmatched growth. We are smart at finding potential accounts, communicating and confirming the availability once we capture the availability, we schedule a good time to talk and convert prospects into leads.</p>
                        </div>
                    </div>
                </div>
            </section>
</>
)
}
export default ConfirmedCallback;

