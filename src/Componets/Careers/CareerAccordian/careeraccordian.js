import { Link } from 'react-router-dom';
import './careeraccordian.css';
import React from 'react';
import Button from '../../ButtonGroup/Button/Button';
import opportimg1 from '../../../img/career/oppoimg1.png';
import opportimg2 from '../../../img/career/oppoimg2.png';
import opportimg3 from '../../../img/career/oppoimg3.png';
import opportimg4 from '../../../img/career/oppoimg4.png';
import opportimg5 from '../../../img/career/oppoimg5.png';

const Careeraccordian =()=>{
    // Navigation tab click open on top functionality
const scrollgoTop = () => {
    window.scrollTo({ top:0});
  };

    const data = [
        { 
            opportunityimg:opportimg1, 
            oppimgalt:"web project",
            oppheading: "Lead | Demand Generation Executive",
            jobid:"001",
            postdate:"10 October 2021",
            TillApply:"30 Oct 2021 ",
            role1:"Lead Identify and develop interfaces and integration flows using mule ESP with Mule runtime, connectors, design center and API management.",
            role2: "0-5 years of hands on exp in mule DW and java, knowledge on mule architecture along with XML,SOAP,WSDL,XSLT,REST services, knowledge on security, login, policy management.",
            role3:"Prepares work to be accomplished by gathering information and materials.",
            role4:"Enhancement of existing services when required, Implementation experience with Mule API management.",
            role5:"Creating/Developing RAML and microservices per requirement.",
            requiremet1:"Excellent Communication skills",
            requiremet2:"Should be able to speak fluent English.",
            requiremet3:"Good phone etiquette",
            requiremet4:"Minimum percentile of 50% in 10th, 12th, UG & PG (if applicable).",
            requiremet5:"Prepares final layout by marking and pasting up finished copy and art",
            requiremet6:"Willing to work in Night Shift.",
            requiremet7:"Good personality.",
            experience:"0-1 Year "
        },
        { 
            opportunityimg:opportimg2, 
            oppimgalt:"web project",
            oppheading:"Team Leader",
             jobid:"002",
            postdate:"12 October 2021",
            TillApply:"14 Oct 2021 ",
            role1:"Lead Identify and develop interfaces and integration flows using mule ESP with Mule runtime, connectors, design center and API management.",
            role2: "0-5 years of hands on exp in mule DW and java, knowledge on mule architecture along with XML,SOAP,WSDL,XSLT,REST services, knowledge on security, login, policy management.",
            role3:"Prepares work to be accomplished by gathering information and materials.",
            role4:"Enhancement of existing services when required, Implementation experience with Mule API management.",
            role5:"Creating/Developing RAML and microservices per requirement.",
            requiremet1:"Excellent Communication skills",
            requiremet2:"Should be able to speak fluent English.",
            requiremet3:"Good phone etiquette",
            requiremet4:"Minimum percentile of 50% in 10th, 12th, UG & PG (if applicable).",
            requiremet5:"Prepares final layout by marking and pasting up finished copy and art",
            requiremet6:"Willing to work in Night Shift.",
            requiremet7:"Good personality.",
            experience:"0-1 Year "

        },
        { 
            opportunityimg:opportimg3, 
            oppimgalt:"web project ",
            oppheading:"Quality Analyst",
            jobid:"003",
            postdate:"03 October 2021",
            TillApply:"09 Oct 2021 ",
            role1:"Lead Identify and develop interfaces and integration flows using mule ESP with Mule runtime, connectors, design center and API management.",
            role2: "0-5 years of hands on exp in mule DW and java, knowledge on mule architecture along with XML,SOAP,WSDL,XSLT,REST services, knowledge on security, login, policy management.",
            role3:"Prepares work to be accomplished by gathering information and materials.",
            role4:"Enhancement of existing services when required, Implementation experience with Mule API management.",
            role5:"Creating/Developing RAML and microservices per requirement.",
            requiremet1:"Excellent Communication skills",
            requiremet2:"Should be able to speak fluent English.",
            requiremet3:"Good phone etiquette",
            requiremet4:"Minimum percentile of 50% in 10th, 12th, UG & PG (if applicable).",
            requiremet5:"Prepares final layout by marking and pasting up finished copy and art",
            requiremet6:"Willing to work in Night Shift.",
            requiremet7:"Good personality.",
            experience:"0-1 Year "
        },
        { 
            opportunityimg:opportimg4, 
            oppimgalt:"web project ",
            oppheading:"Operations Manager",
            jobid:"004",
            postdate:"03 October 2021",
            TillApply:"09 Oct 2021 ",
            role1:"Lead Identify and develop interfaces and integration flows using mule ESP with Mule runtime, connectors, design center and API management.",
            role2: "0-5 years of hands on exp in mule DW and java, knowledge on mule architecture along with XML,SOAP,WSDL,XSLT,REST services, knowledge on security, login, policy management.",
            role3:"Prepares work to be accomplished by gathering information and materials.",
            role4:"Enhancement of existing services when required, Implementation experience with Mule API management.",
            role5:"Creating/Developing RAML and microservices per requirement.",
            requiremet1:"Excellent Communication skills",
            requiremet2:"Should be able to speak fluent English.",
            requiremet3:"Good phone etiquette",
            requiremet4:"Minimum percentile of 50% in 10th, 12th, UG & PG (if applicable).",
            requiremet5:"Prepares final layout by marking and pasting up finished copy and art",
            requiremet6:"Willing to work in Night Shift.",
            requiremet7:"Good personality.",
            experience:"0-1 Year "
        },
        { 
            opportunityimg:opportimg5, 
            oppimgalt:"web project ",
            oppheading:"Inside Sales Executive",
            jobid:"005",
            postdate:"03 October 2021",
            TillApply:"09 Oct 2021 ",
            role1:"Lead Identify and develop interfaces and integration flows using mule ESP with Mule runtime, connectors, design center and API management.",
            role2: "0-5 years of hands on exp in mule DW and java, knowledge on mule architecture along with XML,SOAP,WSDL,XSLT,REST services, knowledge on security, login, policy management.",
            role3:"Prepares work to be accomplished by gathering information and materials.",
            role4:"Enhancement of existing services when required, Implementation experience with Mule API management.",
            role5:"Creating/Developing RAML and microservices per requirement.",
            requiremet1:"Excellent Communication skills",
            requiremet2:"Should be able to speak fluent English.",
            requiremet3:"Good phone etiquette",
            requiremet4:"Minimum percentile of 50% in 10th, 12th, UG & PG (if applicable).",
            requiremet5:"Prepares final layout by marking and pasting up finished copy and art",
            requiremet6:"Willing to work in Night Shift.",
            requiremet7:"Good personality.",
            experience:"0-1 Year "
        }, 
      ];
    return(
    <>       
    <section  className="accordiansec">
        <div className="container">
            <div className="row">
                {
                    data.map((data,i)=>{
                        return(
                            <div className="col-lg-12 col-md-12 col-sm-12 carshadow">
                            <div className="row" data-aos="zoom-in">
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    <img className="accordimg img-fluid" src={data.opportunityimg} alt={data.oppimgalt}/>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7" style={{textAlign:'left'}}>
                                    <h5 className="oppheading">{data.oppheading}</h5>
                                    <p>Job ID:<span className="oppdetails">{data.jobid}</span>
                                    Posted Date:<span className="oppdetails">{data.postdate}</span>
                                    Till Apply:<span className="oppdetails">{data.TillApply}</span></p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3"  style={{paddingTop:'2%'}}>
                                <Link to={`/jobdescription/`+data.jobid}>
                                   <Button classNames="btnclear22" text="Apply Now"  fun={()=>scrollgoTop()} />
                                </Link>
                                </div>
                            </div>
                        </div>

                        )
                    })
                }
                        
                     
                    
            </div>
        </div> 
        </section>
    </>
)
}
export default Careeraccordian;

