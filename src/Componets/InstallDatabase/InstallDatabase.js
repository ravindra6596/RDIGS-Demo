import React  from "react";
import './InstallDatabase.css';
import Heading from "../Heading/Heading";
import callbackimg1 from "../../img/installdbimg1.jpg";
import salesquaimg2 from "../../img/installdbimg2.png";
const InstallDatabase =()=>{
    return(
    <>
        <div className="nav-contaniner"/>
          <section className="installdb-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Install Database"/>
                            <p style={{color:'white'}}data-aos="fade-right">Analyse the Need of Audience</p>
                        </div>
                    </div>
                </div>
            </section>   
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <Heading h1Class="clientheadwe" title="Analyse the Need of Audience"/>
                            <p style={{textAlign:'justify'}}>Based on our extensive research and analysis of competitors and prospective company, we retrieve the information to amplify your business by reaching the right audience. All this information is retrieved from the trusted sources.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6"data-aos="zoom-in-up">
                            <img className="img-fluid" src={callbackimg1}/>
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
                            <Heading h1Class="clientheadwe" title="Let Technology Redefine Your Prospecting"/>
                            <p style={{textAlign:'justify'}}>RDIGS embeds technology to identify the right prospect for you. We target companies, who are into same industry and utilizing similar products. We study them, understand their requirement and produce analysed report that will aid you to get great start for your business to build your marketing strategy around your competitor's weakness.</p>
                        </div>
                    </div>
                </div>
            </section>
</>
)
}
export default InstallDatabase;

