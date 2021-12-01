import React from "react";
import "./DatabaseService.css";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import service1 from "../../img/services/s1.jpg";
import service2 from "../../img/services/s2.jpg";
import service3 from "../../img/services/s3.jpg";
import d from "../../img/services/d.png";

const DatabaseService = () => {
  //Link click open on top functionality
  const scrollgoTop = () => {
    window.scrollTo({ top: 0 });
  };

  const data = [
    {
      servicename: "B2B Custom List Building",
      serviceimg: service1,
      servicelink: "/b2bCustomelist",
    },
    {
      servicename: "Database Cleansing",
      serviceimg: service2,
      servicelink: "/databasecleaning",
    },
    {
      servicename: "Install Database",
      serviceimg: service3,
      servicelink: "/installdatabase",
    },
  ];
  return (
    <>
      <div className="nav-contaniner" />
      <section className="dbservice-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ marginTop: "10%" }}>
              <Heading h1Class="clientheadwe" title="Database Service" />
              <p style={{ color: "white" }} data-aos="fade-right">
                Get Access To The Customized B2B List{" "}
              </p>
              <p style={{ color: "white" }} data-aos="fade-right">
                We have a team of proficient who build a contact list that will
                provide you an access to limitless combination of data fields
                for giving you a database of your ideal targets. We build a
                well-tailored list as per your requirement and ideal prospects.
                Our precise and verified list building service will increase
                your chances of success.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ margin: "3% 0px" }}>
        <div className="container">
          <div className="d-flex justify-content-center" data-aos="fade-down">
            <Heading
              h1Class="clientheadwe"
              title="Our Database Services"
            ></Heading>
          </div>
          <p data-aos="fade-right">
            As the most qualified accounting services provider, we offer an
            amazing variety of financial solutions designed to help you solve
            all bookkeeping issues, no matter big or small.
          </p>
          <div class="row row-50 row-xxl-70 offset-top-2 services-row">
            {data.map((user, index) => {
              return (
                <div
                  class="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                  data-aos="zoom-in-up"
                >
                  <Link to={user.servicelink} onClick={scrollgoTop}>
                    <div className="serviceLead">
                      <img
                        className="dbservice-boximg"
                        src={user.serviceimg}
                        alt=""
                      />
                    </div>
                  </Link>
                  <h5
                    class="thumbnail-light-title"
                    data-aos="fade-left"
                    style={{ fontWeight: "bold" }}
                  >
                    {user.servicename}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section class="service-2 section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="title-database text-center">
                <h2>What Do We Offer</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, earum.{" "}
                </p>
                <div class="border-database"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 text-center d-none d-md-block">
              <img
                loading="lazy"
                src={d}
                class="img-fluid inline-block img-database"
                alt=""
              />
            </div>
            <div class="col-md-8">
              <div class="row text-center">
                <div class="col-md-6 col-sm-6">
                  <div class="service-item-database">
                    <i class="tf-ion-ios-alarm-outline"></i>
                    <h4>Time Management</h4>
                    <p>
                      To maximize your sales productivity, time block your
                      schedule so that you spend a couple hours a day working on
                      each of your activities instead of bouncing back and forth
                      between tasks. Time blocking is a simple time management.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="service-item-database">
                    <i class="tf-ion-ios-briefcase-outline"></i>
                    <h4>Marketing Ideas</h4>
                    <p>
                      In this step-by-step guide, we'll cover everything from
                      thinking about a content marketing strategy to reporting
                      on its success. No matter how experienced a content
                      marketer you are, this guide offers something for
                      everyone.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="service-item-database">
                    <i class="tf-ion-ios-email-outline"></i>
                    <h4>Mail Support</h4>
                    <p>
                      Set goals.Create buyer personas.Run a content audit to
                      identify gaps.Brainstorm content ideas.Keywords and search
                      intent.Use topic clusters in your content strategy.Other
                      content brainstorming methods you can use.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="service-item-database">
                    <i class="tf-ion-ios-locked-outline"></i>
                    <h4>Secure System</h4>
                    <p>
                      B2B sales has changed. What used to work is no longer
                      possible as the B2B buyer is firmly in control. Here’s
                      what you need to know about the modern day sales process.
                      We share 3 proven B2B sales.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DatabaseService;
