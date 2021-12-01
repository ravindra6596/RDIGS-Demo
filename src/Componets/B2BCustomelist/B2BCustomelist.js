
import './B2BCustomelist.css';
import Heading from "../Heading/Heading";
import React from 'react';
import callbackimg1 from "../../img/b2bcust1.jpg";
import salesquaimg2 from "../../img/b2bcust2.jpg";
const B2BCustomelist =()=>{
    return(
    <>
        <div className="nav-contaniner"/>
          <section className="b2bcustom-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="B2B Custome List Building"/>
                            <p style={{color:'white'}}data-aos="fade-right">Get Access To The Customized B2B List</p>
                        </div>
                    </div>
                </div>
            </section>   
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols1">
                            <Heading h1Class="clientheadwe" title="Get Access To The Customized B2B List"/>
                            <p style={{textAlign:'justify'}}>We have a team of proficient who build a contact list that will provide you an access to limitless combination of data fields for giving you a database of your ideal targets. We build a well-tailored list as per your requirement and ideal prospects. Our precise and verified list building service will increase your chances of success.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols2"data-aos="zoom-in-down">
                            <img className="img-fluid" src={callbackimg1} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols3"data-aos="zoom-in-down">
                            <img className="img-fluid" src={salesquaimg2} alt=""/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols4">
                            <Heading h1Class="clientheadwe" title="Committed To Accurate And High-Quality Prospects"/>
                            <p style={{textAlign:'justify'}}>Clutter free list, customized as per your industry. We provide verified, accurate contact database. We have research experts who are committed to offer lead list that have a higher propensity to get converted also our custom list building service require to no efforts from your end, and give you maximum rewarding opportunities in return.</p>
                        </div>
                    </div>
                </div>
            </section>
</>
)
}
export default B2BCustomelist;

