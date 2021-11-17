
import React  from "react";
import './MarketingQualiLeads.css';
import Heading from "../Heading/Heading";
import callbackimg1 from "../../img/marketingqualiimg1.png";
import salesquaimg2 from "../../img/marketingqualiimg2.jpg";
const MarketingQualiLeads =()=>{
    return(
    <>
        <div className="nav-contaniner"/>
          <section className="marketquali-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Marketing Qualified Leads"/>
                            <p style={{color:'white'}}data-aos="fade-right">Marketing Qualified Leads</p>
                        </div>
                    </div>
                </div>
            </section>   
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols1">
                            <Heading h1Class="clientheadwe" title="Marketing Qualified Lead"/>
                            <p style={{textAlign:'justify'}}>Marketing Qualified Leads (MQLs) have the potential to become good customers. Once a lead engages with your company and anticipating solution to their problems. According to the reports only 13% of the MQL has ever become SQL reason being inconsistent engagement. At RDIGS religiously nurture and push them closer to the very edge of the sales funnel.</p>
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
                            <Heading h1Class="clientheadwe" title="Edging Prospects Into Closing Sale Deals"/>
                            <p style={{textAlign:'justify'}}>We identify MQLs to ensure that your sales and marketing team both are focused on a set of prospects who meet specific criteria. We follow the inquiries that express an interest in your products and services, and together we groom with information and resolution.</p>
                        </div>
                    </div>
                </div>
            </section>
</>
)
}
export default MarketingQualiLeads;

