import React  from "react";
import './DatabaseCleaning.css';
import Heading from "../Heading/Heading";
import callbackimg1 from "../../img/dbcleanimg1.png";
import salesquaimg2 from "../../img/dbcleanimg2.jpg";
const DatabaseCleaning =()=>{
    return(
    <>
        <div className="nav-contaniner"/>
          <section className="dbcleaning-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Database Cleaning"/>
                            <p style={{color:'white'}}data-aos="fade-right">Clean And Enriched Prospect List</p>
                        </div>
                    </div>
                </div>
            </section>   
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols1">
                            <Heading h1Class="clientheadwe" title="Clean And Enriched Prospect List"/>
                            <p style={{textAlign:'justify'}}>Cleaning your database in frequent interval is mandatory else your marketing efforts will have minimal impact. We believe in accuracy, as the explicit data generates more prospects. We will de-dupe your business data to identify and remove duplicates, while sourcing additional information that includes new contact details and unique firmographics.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols2"data-aos="zoom-in-up">
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
                            <Heading h1Class="clientheadwe" title="Fuel Your Pipeline With Quality Prospects"/>
                            <p style={{textAlign:'justify'}}>Eliminate errors and inconsistency in your database to get the sales ready prospects. We help you to repair your data for the best results. The old contact database becomes obsolete and working with the uncleaned data can cost huge loss to the company, and hence we help you to optimize the data to maximize ROI from your marketing campaigns.</p>
                        </div>
                    </div>
                </div>
            </section>
</>
)
}
export default DatabaseCleaning;

