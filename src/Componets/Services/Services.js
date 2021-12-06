import React from 'react';
 import './Services.css';
import { Link } from "react-router-dom";
 import service1 from '../../img/services/service1.jpg';
 import service2 from '../../img/services/service2.jpg';
 import service3 from '../../img/services/service3.jpg';
 import Heading from '../Heading/Heading';
const Servicess =()=>{
// Navigation tab click open on top functionality
  const scrollgoTop = () => {
    window.scrollTo({ top: 0 });
  };
    const data =[
        {
            id:"01",
            serviceimg:service1,
            servicetitle:"Sales Development",
            serviceLinks:'/salesDevelopment',
        },
        {
            id:"02",
            serviceimg:service2,
            servicetitle:"Demand Generation",
            serviceLinks:'/demandgeneration',

        },
        {
            id:"03",
            serviceimg:service3,
            servicetitle:"Database Service",
            serviceLinks:'/databaseservice',

        },
        
    ]
    return(
        <>
        <section id="services" className="portfolio">
            <div className="container" data-aos="fade-up">
            <div className="section-title"> 
                <Heading h1Class="clientheadwe" spanClass="spansubhead1" title="Services"/>
                <p className="service-para">We extensively evaluate the technology so as to bring the highest quality performance to you and after our research we adopted the Reverse Lead Generation Funnel, that increased our sales by 14.25% and we are able to move prospects through the sales cycle 23% faster.</p>
            </div>               
            <div className="row" data-aos="fade-up" data-aos-delay="200" >
            {               
                data.map((user, index) => (
                <div className="col-lg-4 col-md-4 col-sm-4 service-col-img" data-aos="zoom-in-down" style={{marginTop:'3%' ,marginBottom:'3%'}}>
                    <Link to={user.serviceLinks} onClick={scrollgoTop}>
                       <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">      
                             <img src={user.serviceimg} alt="Avatar" className="img-fluid"/>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="service-card-text">{user.servicetitle}</h3>
                            </div>
                        </div>
                       </div> 
                    </Link>   
                 </div>
                ))
                }
            </div>          
            </div>
        </section>
        </>
    )
}
export default Servicess;