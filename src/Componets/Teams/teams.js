import React from "react";
import "./teams.css";
import Heading from "../Heading/Heading";
import team1 from "../../img/team/team-1.jpg";
import team2 from "../../img/team/team-2.jpg";
import team3 from "../../img/team/team-3.jpg";
import team4 from "../../img/team/team-4.jpg";
import teamsection2 from "../../img/team/teamsec2img.jpg";


const teams =()=>{

    const data = [
        { 
            teamimg:team1,
            teamalt:"Roland Dcoasta",
            teamName:"Roland Dcoasta", 
            teamdesi: "Managing Director,Founder",
        },
        { 
            teamimg:team1,
            teamalt:"Ajay Rawat",
            teamName:"Ajay Rawat", 
            teamdesi: "Chief Operating Officer",
        },
        { 
            teamimg:team3,
            teamalt:"Gurdeep",
            teamName:"Gurdeep Singh", 
            teamdesi: "Sales Manager",
        },
        { 
            teamimg:team4,
            teamalt:"Rachel",
            teamName:"Rachel Mendis", 
            teamdesi: "HR Manager",
        },
      ];
    return(
      <>
        <div className="nav-contaniner" />
        {/* <!-- ======= Team Banner Section ======= --> */}
        <section className="teamsection">
                <div className="container">
                    <div className="row" style={{display:'grid',paddingTop:'10%'}}>
                        <Heading h1Class="clientheadwe" spanClass="spansubhead2" title="Team"/>
                        <p style={{color:'white'}}>At RDIGS, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                    </div>
                </div>
            </section>
            {/* <!-- ======= Team Section 2 ======= --> */}
            <section style={{margin:'3% 0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img className="teams2img img-fluid" src={teamsection2}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6" style={{textAlign:'justify'}}>
                           <Heading h1Class="aboutwherewe" spanClass="spansubhead1" title="WE ARE RDIGS"/>
                            <p className="teamsec2para">Digitallium is a company specializing in providing financial, marketing and analytical services to other companies and private entrepreneurs to help them improve their businesses. We are able to analyze any activity and provide with the bulk of solutions how to decrease your expense, use hidden opportunities and what spheres are good for investment.</p>
                            <ul style={{fontSize:'20px'}}>
                                <li>IT Team</li>
                                <li>Sales Team</li>
                                <li>Lead Generation </li>
                                <li>Demand Generation </li>
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
                  <Heading  classNames="aboutwherewe" spanClass="spansubhead1" title="Meet Our Team" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text</p>
                </div>
            </div>
            <div class="row">
                 {data.map((data) => ( 
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch">
                    <div class="member" data-aos="fade-up" data-aos-delay="100">
                      <div class="member-img">
                          <img src={data.teamimg} class="img-fluid" alt={data.teamalt}/>
                      </div>
                        <div class="member-info">
                            <h4>{data.teamName}</h4>
                            <span>{data.teamdesi}</span>
                           {/* <p>Roland D’Costa, a stellar entrepreneur and a result driven professional, having an incredible track record of building companies and growing pipeline and ultimately revenue. </p> */}
                            <div class="social-links">
                                <a href="#"><i class="fa fa-facebook-square"></i></a>
                                <a href="#"><i class="fa fa-twitter-square"></i></a>
                                <a href="#"><i class="fa fa-linkedin-square"></i></a>
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
