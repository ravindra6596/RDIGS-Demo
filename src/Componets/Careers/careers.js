import './careers.css';
import Heading from "../Heading/Heading";
import CareerAccordian from "../Careers/CareerAccordian/careeraccordian";
import career1 from "../../img/career/career-1.png";
import career2 from "../../img/career/career-2.png";
import career3 from "../../img/career/career-3.png";
import career4 from "../../img/career/career-4.png";
import career5 from "../../img/career/career-5.png";
import career6 from "../../img/career/career-6.png";
import CareerGallery from "./CareerGallery/CareerGallery";
import CareerSlider from "./CareerSlider/CareerSlider";
import React, { Component }  from 'react';

const careers = () => {

    const data = [
        {
            carimg: career1,
            caralt: "Diverse img",
            heading: "Diversified Work Culture",
            para: "We are all equals and respect individuality. We don't believe in hierarchy"
        },
        {
            carimg: career2,
            caralt: "Team Hardwork img",
            heading: "Team of Hardworking Individuals",
            para: "Good team-work comes from well-synced and hardworking"

        },
        {
            carimg: career3,
            caralt: "career img",
            heading: "Career Growth",
            para: "Develop your talent and expand your skills"
        },
        {
            carimg: career4,
            caralt: "Learning img",
            heading: "Learning Opportunity",
            para: "Our training sessions are continuous, thus giving you a greater boost that is needed"
        },
        {
            carimg: career5,
            caralt: "Promotion img",
            heading: "Promotion",
            para: "Find lots of opportunities throughout the year"
        },
        {
            carimg: career6,
            caralt: "Fun img",
            heading: "Fun Fiesta",
            para: "Find lots of opportunities throughout the year"
        },

    ];
    return (
        <>
            <div className="nav-contaniner" />
            <CareerSlider/>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <Heading h1Class="clientheadwe" spanClass="spansubhead1" title="Benefits of joining our Team" />
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: '5%' }} data-aos="fade-up" data-aos-delay="200">
                        {/* Using Map Function to access the data */}
                        {data.map((data) => (
                            <div className="col-lg-4 col-md-4 col-sm-6 careercolm" data-aos="fade-up" data-aos-delay="200">
                                <div className="carbox" >
                                    <img src={data.carimg} className="carboximg" alt={data.caralt} />
                                    <h4 data-aos="fade-right" data-aos-delay="200">{data.heading}</h4>
                                    <p data-aos="fade-right" data-aos-delay="200">{data.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CareerGallery/>
            <CareerAccordian />
        </>
    )
}
export default careers;

