import React from "react";
import "./teams.css";
import Heading from "../Heading/Heading";
import team4 from '../../img/team/RachelMendis.png';
import team1 from '../../img/team/RolandDcosta.jpg';
import team3 from '../../img/team/WilliamMathurai.jpg';
import team2 from '../../img/team/AjayRawat.jpg';
import teamsection2 from "../../img/team/teamsec2img2.jpg";
const teams =()=>{

    const data = [
        { 
            teamimg:team1,
            teamalt:"Roland Dcoasta",
            teamName:"Roland Dcoasta", 
            teamdesi: "Managing Director,Founder",
            link_facebook:"",
            link_linkedin:"https://www.linkedin.com/in/rolanddcosta0734/",
            link_twitter:"",
            link_insta:""
        },
        { 
            teamimg:team2,
            teamalt:"Ajay Rawat",
            teamName:"Ajay Rawat", 
            teamdesi: "Chief Operating Officer",
            link_facebook:"",
            link_linkedin:"https://www.linkedin.com/in/ajay-rawat-16896b206/",
            link_twitter:"",
            link_insta:""
        },
        { 
            teamimg:team3,
            teamalt:"William",
            teamName:"William Mathurai", 
            teamdesi: "Sales Manager",
            link_facebook:"",
            link_linkedin:"https://www.linkedin.com/in/william-krishnamurthy-mathurai-12189737/",
            link_twitter:"",
            link_insta:""
        },
        { 
            teamimg:team4,
            teamalt:"Rachel",
            teamName:"Rachel Mendis", 
            teamdesi: "HR Manager",
            link_facebook:"",
            link_linkedin:"https://www.linkedin.com/in/rachel-mendis-b846b5179/",
            link_twitter:"",
            link_insta:""
        },
        
      ];
    return(
      <>
        <div className="nav-contaniner" />
        {/* <!-- ======= Team Banner Section ======= --> */}
        <section className="teamsection">
                <div className="container">
                    <div className="row" style={{display:'grid',paddingTop:'10%'}}>
                        <Heading h1Class="clientheadwe"  title="Our Team"/>
                        <p style={{color:'white'}}>At RDIGS, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                    </div>
                </div>
            </section>
            {/* <!-- ======= Team Section 2 ======= --> */}
            <section style={{margin:'3% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img className="teams2img img-fluid" src={teamsection2} data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6" style={{textAlign:'justify'}} data-aos="fade-right">
                           <Heading h1Class="clientheadwe" spanClass="forRessubhead" title="WE ARE RDIGS"/>
                            <p className="teamsec2para">Digitallium is a company specializing in providing financial, marketing and analytical services to other companies and private entrepreneurs to help them improve their businesses. We are able to analyze any activity and provide with the bulk of solutions how to decrease your expense, use hidden opportunities and what spheres are good for investment.</p>
                            <ul style={{fontSize:'20px'}}>
                                <li data-aos="zoom-in-down">IT Team</li>
                                <li data-aos="zoom-in-left" >Sales Team</li>
                                <li data-aos="zoom-in-down">Lead Generation </li>
                                <li data-aos="zoom-in-left">Demand Generation </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        {/* <!-- ======= Team Section ======= --> */}
        <section  id="team" class="team">
        <div class="container" data-aos="fade-up">
            <div class="row justify-content-center">
                <div class="col-md-6">
                  <Heading  h1Class="clientheadwe"  title="Meet Our Team" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text</p>
                </div>
            </div>
            <div class="row">
                 {data.map((data) => ( 
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch">
                    <div class="member" data-aos="zoom-in-up">
                      <div class="member-img">
                          <img src={data.teamimg} class="img-fluid" alt={data.teamalt} style={{borderRadius:'5px',border:'1px solid #30a6e9'}}/>
                      </div>
                        <div class="member-info">
                            <h4>{data.teamName}</h4>
                            <span>{data.teamdesi}</span>
                            <div class="social-links">
                                <a href="#"><i class="fa fa-facebook-square"></i></a>
                                <a href="#"><i class="fa fa-twitter-square"></i></a>
                                <a href={data.link_linkedin}><i class="fa fa-linkedin-square"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                 ))}  

            </div>
        </div>
    </section>

    </>
  );
};
export default teams;
