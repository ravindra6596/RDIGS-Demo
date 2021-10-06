import React  from "react";
import './careers.css';
import CareerAccordian from "../Careers/CareerAccordian/careeraccordian";
import career1 from "../../img/career/career-1.png";
import career2 from "../../img/career/career-2.png";
import career3 from "../../img/career/career-3.png";

const careers =()=>{

     const data = [
        { 
            carimg:career1, 
            heading: "Diversified Work Culture",
            para:"We are all equals and respect individuality. We don't believe in hierarchy"
        },
        { 
            carimg:career2,
            heading: "Victor Wayne",
            para:"My Lorem ipsummmmmmmmmmm"
        },
        { 
            carimg:career3,
            heading: "Jane Doe",
            para:"lorem ipsum"
        },
        
      ];
    return(
    <>
        <div className="nav-contaniner"/>
            <section style={{marginTop:'1%'}} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1 style={{color:'#30a6e9'}}>Benefits of joining our Team</h1>
                    </div>
                </div>
                <div className="row" style={{marginTop:'10%'}} data-aos="fade-up" data-aos-delay="200">
                {/* Using Map Function to access the data */}
                    {data.map((data) => ( 
                        <div className="col-lg-4 col-md-4 col-sm-4"  >
                            <div className="carbox" >
                            <img src={data.carimg} className="carboximg"/>
                                <h4 data-aos="fade-right" data-aos-delay="200">{data.heading}</h4>
                                <p data-aos="fade-right" data-aos-delay="200">{data.para}</p>
                            </div>
                        </div>
                    ))}   
                </div>

                <div className="row" style={{marginTop:'10%',marginBottom:'5%'}} data-aos="fade-up" data-aos-delay="200">
                    {data.map((data) => ( 
                            <div className="col-lg-4 col-md-4 col-sm-4"  >
                                <div className="carbox" >
                                <img src={data.carimg} className="carboximg"/>
                                    <h4 data-aos="fade-right" data-aos-delay="200">{data.heading}</h4>
                                    <p data-aos="fade-right" data-aos-delay="200">{data.para}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            </section>
        <CareerAccordian/>          
</>
)
}
export default careers;

