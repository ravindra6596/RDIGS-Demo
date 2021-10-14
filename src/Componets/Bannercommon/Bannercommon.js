import React from 'react';
import './Bannercommon.css';
// import Background from '../../img/Banner/hero-bg.jpg';
export default function Bannercommon(props) {

    return (
        <>
        <section id="hero-commonBanner" 
        className="d-flex justify-cntent-center align-items-center">
            {/*  style={{backgroundImage:`url(${Background})`}} */}
            <div className="container">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                    <div className="header-common">
                          <h1 className="banner-header-common">{props.title}</h1>
                    </div>
                </div>
            </div>
        </section>   
        </>
    )
}

