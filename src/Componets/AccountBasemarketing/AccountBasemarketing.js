
import './AccountBasemarketing.css';
import Heading from "../Heading/Heading";
import React, { Component }  from 'react';
import callbackimg1 from "../../img/accbaseimg1.png";
import salesquaimg2 from "../../img/accbaseimg2.png";
const AccountBasemarketing =()=>{
    
    return(
    <>
        <div className="nav-contaniner"/>
          <section className="accountbase-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Account Base Marketing"/>
                            <p style={{color:'white'}}data-aos="fade-right">Focus On The Accounts That Matters The Most</p>
                        </div>
                    </div>
                </div>
            </section>   
            <section style={{margin:'2% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 setorder-forcols1">
                            <Heading h1Class="clientheadwe" title="Focus On The Accounts That Matters The Most"/>
                            <p style={{textAlign:'justify'}}>ABM perfectly aligns marketing and sales department to derive greatest benefits and revenues. ABM targets accounts and nurture them based on content, relevant communications and contextual marketing.</p>
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
                            <Heading h1Class="clientheadwe" title="Accelerate Pipeline with Powerful ABM Strategies"/>
                            <p style={{textAlign:'justify'}}>We start by focusing on a group of key accounts and quickly bring a coordinated approach to your sales and marketing efforts. Then we apply a model for building, testing, and optimizing ABM so that we achieve success in a few key areas before scaling to build larger, more comprehensive marketing programs.</p>
                        </div>
                    </div>
                </div>
            </section>
</>
)
}
export default AccountBasemarketing;

