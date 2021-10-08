import React from "react";
import "./teams.css";
import team1 from "../../img/team/team-1.jpg";
import team2 from "../../img/team/team-2.jpg";
import team3 from "../../img/team/team-3.jpg";
import team4 from "../../img/team/team-4.jpg";
import Rolandimg from "../../img/team/Roland-Dcosta.jpg";
import { Link } from "react-router-dom";



const teams =()=>{

    const data = [
        { 
            teamimg:team1,
            teamalt:"Ajay Rawat",
            teamName:"Ajay Rawat", 
            teamdesi: "Chief Operating Officer",
        },
        { 
            teamimg:team2,
            teamalt:"Rachel ",
            teamName:"Rachel Mendis", 
            teamdesi: "HR",
        },
        { 
            teamimg:team3,
            teamalt:"Gurdeep",
            teamName:"Gurdeep Singh", 
            teamdesi: "Sales Manager",
        },
        { 
            teamimg:team4,
            teamalt:"Swapnil patil",
            teamName:"Swapnil Patil", 
            teamdesi: "Sr Software Developer",
        },
      ];
    return(
      <>
        <div className="nav-contaniner" />
        {/* {/ <!-- ======= Director Section ======= --> /} */}
        <div className="container" style={{ backgroundColor: 'rgba(118, 206, 233, 0.35)', boxShadow: '0 4px 8px 0 #30a6e9, 0 6px 20px 0 #30a6e9', marginTop: '2%' }}>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 rolandiconcol" style={{ textAlign: 'justify' }}>
              <h2 className="rolandname" data-aos="fade-up">Roland D'costa</h2>
              <h4 style={{ color: '#30a6e9' }}>Manging Director</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <i class="fa fa-twitter" style={{ fontSize: '20px', marginRight: '2%' }}></i>
              <i class="fa fa-facebook" style={{ fontSize: '20px', marginRight: '2%' }}></i>
              <i class="fa fa-instagram" style={{ fontSize: '20px', marginRight: '2%' }}></i>
              <i class="fa fa-linkedin" style={{ fontSize: '20px', marginRight: '2%' }}></i>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4" data-aos="fade-right" >
              <img src={Rolandimg} className="rolandimg" alt="" />
            </div>
          </div>
        </div>
  
        {/* <!-- ======= Team Section ======= --> */}
        <section  id="team" class="team" style={{marginTop:'3%'}}>
        <div class="container" data-aos="fade-up">
            <div class="row justify-content-center">
                <div class="col-md-6">
                  <h2>Meet Our Team</h2>
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
