import React  from "react";
import './ContentSyndication.css';
import Heading from "../Heading/Heading";
import callbackimg1 from "../../img/contentsyndimg2.svg";
import salesquaimg2 from "../../img/contentsyndimg1.png";
const ContentSyndication =()=>{
    return(
    <>
        <div className="nav-contaniner"/>
          <section className="contentsyn-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Content Syndication"/>
                            <p style={{color:'white'}}data-aos="fade-right">Content Is King But Syndication Is Queen</p>
                        </div>
                    </div>
                </div>
            </section>   
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols1">
                            <Heading h1Class="clientheadwe" title="Content Is King But Syndication Is Queen"/>
                            <p style={{textAlign:'justify'}}>We are not only marketing content but also changing the world of those who are consuming it. We include the business objectives along with our audience targeting. Our service will help you amplify website views, traffic and generate the company’s reputation through syndication.</p>
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
                            <Heading h1Class="clientheadwe" title="Target Engage Activate Measure"/>
                            <p style={{textAlign:'justify'}}>We tailor a message so as to communicate effectively. We help you to reach the right people with right message, at right time. Leverage RDIGS content syndication strategies to augment content and drive pipeline development.</p>
                        </div>
                    </div>
                </div>
            </section>
</>
)
}
export default ContentSyndication;

