import React  from "react";
import './SalesQualified.css';
import salesquaimg1 from "../../img/salesqualimg1.png";
import salesquaimg2 from "../../img/salqualimg2.png";
import Heading from "../Heading/Heading";

const SalesQualified =()=>{
    return(
    <>
        <div className="nav-contaniner"/>
          <section className="salesquali-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Sales Qualified Leads"/>
                            <p style={{color:'white'}}data-aos="fade-right"> A Researched And Vetted Leads </p>
                        </div>
                    </div>
                </div>
            </section>   
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <Heading h1Class="clientheadwe" title="A Researched And Vetted Leads"/>
                            <p style={{textAlign:'justify'}}>A Sales Qualified Lead is a lead that has been accepted by sales team and proceeded further to schedule an appointment. It meets the service level agreement (SLA) between marketing and sales – a lead that meets – ICP persona requirements, interested in company’s offerings, answered qualifying questions, and, agreed to schedule an appointment. </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6"data-aos="zoom-in-down">
                            <img className="img-fluid" src={salesquaimg1}/>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6"data-aos="zoom-in-down">
                            <img className="img-fluid" src={salesquaimg2}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <Heading h1Class="clientheadwe" title="Focus On Closing, Instead Qualifying "/>
                            <h5>ICP - MQL- HQL- SQL-PIPELINE</h5>
                            <p style={{textAlign:'justify'}}>We ensure your sales team is focusing their efforts on high-quality prospects and intensifying a sales process around exemplifying value, they’re guaranteed to bring in more revenue. SQLs are ideal and vital for augmenting your sales executive's activity, scaling new sales initiatives, and organizing sales activity to maintain quality and grow pipeline.</p>
                        </div>
                    </div>
                </div>
            </section>
</>
)
}
export default SalesQualified;

