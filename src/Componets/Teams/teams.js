import React from "react";
import "./teams.css";
import team1 from "../../img/team/team-1.jpg";
import team2 from "../../img/team/team-2.jpg";
import team3 from "../../img/team/team-3.jpg";
import team4 from "../../img/team/team-4.jpg";
import Rolandimg from "../../img/team/Roland-Dcosta.jpg";
import { Link } from "react-router-dom";

const teams = () => {
  return (
    <>
      <div className="nav-contaniner" />

      <div
        className="container"
        style={{
          backgroundColor: "rgba(118, 206, 233, 0.35)",
          boxShadow: "0 4px 8px 0 #30a6e9, 0 6px 20px 0 #30a6e9",
          marginTop: "2%",
        }}
      >
        <div className="row">
          <div
            className="col-lg-8 col-md-8 col-sm-8 rolandiconcol"
            style={{ textAlign: "justify" }}
          >
            <h2 className="rolandname" data-aos="fade-up">
              Roland D'costa
            </h2>
            <h4 style={{ color: "#30a6e9" }}>Manging Director</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <i
              class="fa fa-twitter"
              style={{ fontSize: "20px", marginRight: "2%" }}
            ></i>
            <i
              class="fa fa-facebook"
              style={{ fontSize: "20px", marginRight: "2%" }}
            ></i>
            <i
              class="fa fa-instagram"
              style={{ fontSize: "20px", marginRight: "2%" }}
            ></i>
            <i
              class="fa fa-linkedin"
              style={{ fontSize: "20px", marginRight: "2%" }}
            ></i>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4" data-aos="fade-right">
            <img src={Rolandimg} className="rolandimg" alt="" />
          </div>
        </div>
      </div>
      {/* <!-- ======= Team Section ======= --> */}
      <section id="team" class="team section-bg" style={{ marginTop: "3%" }}>
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h1 style={{ color: "#30a6e9" }}>Team</h1>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="100">
                <div class="member-img">
                  <div class="btn03">
                    <img src={team1} alt="" />
                    <div class="ovrly"></div>
                    <div class="social">
                      <Link to="">
                        <i class="fa fa-twitter"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-facebook"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-instagram"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Walter White</h4>
                  <span className="teamdesignation">
                    Chief Executive Officer
                  </span>
                  <p>
                    Jane is in charge of digital activities for global brands.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="200">
                <div class="member-img">
                  <div class="btn03">
                    <img src={team2} alt="" />
                    <div class="ovrly"></div>
                    <div class="social">
                      <Link to="">
                        <i class="fa fa-twitter"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-facebook"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-instagram"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>
                    Jane is in charge of digital activities for global brands.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="300">
                <div class="member-img">
                  <div class="btn03">
                    <img src={team3} alt="" />
                    <div class="ovrly"></div>
                    <div class="social">
                      <Link to="">
                        <i class="fa fa-twitter"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-facebook"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-instagram"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>
                    Jane is in charge of digital activities for global brands.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="400">
                <div class="member-img">
                  <div class="btn03">
                    <img src={team4} alt="" />
                    <div class="ovrly"></div>
                    <div class="social">
                      <Link to="">
                        <i class="fa fa-twitter"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-facebook"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-instagram"></i>
                      </Link>
                      <Link to="">
                        <i class="fa fa-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>
                    Jane is in charge of digital activities for global brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default teams;
