import React from "react";
import './CareerGallery.css';
import Heading from "../../Heading/Heading";
import culture1 from "../../../img/career/carourculture1.jpg";
import culture2 from  "../../../img/career/carourculture2.jpg";
import culture3 from  "../../../img/career/carourculture3.jpg";
import culture4 from  "../../../img/career/carourculture4.jpg";
import culture5 from  "../../../img/career/carourculture5.jpg";

const CareerGallery = () => {
  
    return (
        <>
            <section>          
                <div class="container">
                    <Heading title="Our Culture"/>
                    <p style={{color:'black'}}>At Apisero, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>

                    <div className="row">
                        <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                            <div className="row h-50">
                                <div className="col-md-12 col-sm-12 co-xs-12 gal-item">
                                    <div className="careerculbox">
                                        <img src={culture1} className="img-ht img-fluid rounded" />
                                    </div>
                                </div>
                            </div>
                            <div className="row h-50">
                                <div className="col-md-6 col-sm-6 co-xs-12 gal-item">
                                    <div className="careerculbox">
                                        <img src={culture2} className="img-ht img-fluid rounded" />
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 co-xs-12 gal-item">
                                    <div className="careerculbox">
                                        <img src={culture3} className="img-ht img-fluid rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                            <div className="col-md-12 col-sm-6 co-xs-12 gal-item h-25">
                                <div className="careerculbox">
                                    <img src={culture4} className="img-ht img-fluid rounded" />
                                </div>
                            </div>

                            <div className="col-md-12 col-sm-6 co-xs-12 gal-item h-75">
                                <div className="careerculbox">
                                    <img src={culture5} className="img-ht img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </section>   
        </>
    )
}
export default CareerGallery;

