import React  from "react";
import './DatabaseService.css';
import Heading from "../Heading/Heading";
import Button from "../ButtonGroup/Button/Button";
import { Link } from "react-router-dom";
import dbserimg from "../../img/dbserimg1.jpg";
import service1 from "../../img/services/s1.jpg";
import service2 from "../../img/services/s2.jpg";
import service3 from "../../img/services/s3.jpg";

const DatabaseService =()=>{
//Link click open on top functionality
  const scrollgoTop = () => {
    window.scrollTo({ top: 0 });
  };

    const data = [
        {
          servicename: "B2B Custom List Building",
          serviceimg: service1,
          servicelink:"/b2bCustomelist",
        },
        {
          servicename: "Database Cleansing",
          serviceimg: service2,
          servicelink:"/databasecleaning",
        },
        {
          servicename: "Install Database",
          serviceimg: service3,
          servicelink:"/installdatabase",
        },
        
      ];
    return(
    <>
        <div className="nav-contaniner"/>
            <section className="dbservice-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Database Service"/>
                            <p style={{color:'white'}} data-aos="fade-right">Get Access To The Customized B2B List  </p>
                            <p style={{color:'white'}} data-aos="fade-right">We have a team of proficient who build a contact list that will provide you an access to limitless combination of data fields for giving you a database of your ideal targets. We build a well-tailored list as per your requirement and ideal prospects. Our precise and verified list building service will increase your chances of success.</p>
                        </div>
                    </div>
                </div>
            </section>  
            <section style={{margin:'3% 0px'}}>
                <div className="container">
                    <div className="d-flex justify-content-center" data-aos="fade-down">
                            <Heading h1Class="clientheadwe" title="Our Database Services"></Heading>
                        </div>
                        <p data-aos="fade-right"> 
                            As the most qualified accounting services provider, we offer an
                            amazing variety of financial solutions designed to help you solve
                            all bookkeeping issues, no matter big or small.</p>
                        <div class="row row-50 row-xxl-70 offset-top-2 services-row">
                            {data.map((user, index) => {
                            return (
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"data-aos="zoom-in-up">
                                <Link to={user.servicelink} onClick={scrollgoTop}>
                                    <div className="serviceLead">
                                    <img
                                    className="dbservice-boximg"
                                    src={user.serviceimg}
                                    alt=""
                                    />
                                </div>
                                </Link>
                                <h5 class="thumbnail-light-title" data-aos="fade-left" style={{fontWeight:'bold'}}>
                                    {user.servicename}
                                </h5>
                                </div>
                            );
                            })}
                        </div>
                        </div>
                </section>
</>
)}
export default DatabaseService;

