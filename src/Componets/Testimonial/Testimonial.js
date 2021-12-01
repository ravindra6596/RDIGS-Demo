import React,{useState} from 'react';
import Heading from '../Heading/Heading';
import team from '../../img/testimonial/testimonial1.png';
import './Testimonial.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,

  };
  //Readmore data
  const[isReadmorecardtext,setIsReadmorecardtext]=useState(true);
  // const toggleHeadingreadmore=()=>{
  //       setIsReadmorecardtext(!isReadmorecardtext);
  // }
  const data = [
    {
      cardtext: "Our team has been growing exponentially in the past 1 year with both clients and our own in-house team. Due to our in-house expansion from 30 agents to 85 agents, we had decided to keep our top 15 partners to deliver for us.",
      //I'm glad to inform you that RD info has been the 7th best partner in 2019 and the #1 partner in 2020 in both volume and quality.",
      // Our conversion rates in SRL from partner media has gone up by 5% in 2020, and we are very grateful for your contribution.
      //We would like to thank you personally for delivering all leads on time even when we request to front load leads beginning of the month,adding extra volume as we into the month reducing our internal slack.Hoping to grow this partnership with RD Info throughout!.",
      cardimg: team,
      carduser: "Leading Publishing Company in San Francisco, California",
      userdesi: "Account Success Manager"
    },
    {
      cardtext: "We have worked with RD Info as our delivery partner for over three years.Throughout the period they have provided great customer service and responsiveness to both planned and unplanned needs.They have developed good set of capabilities in their team.",
     // and processes to ensure that their delivery is timely and comes with uncompromised quality.",
      // All in all they are a good team and willing to go extra mile when needed to partner in client's success.",
      cardimg: team,
      carduser: "Tech Company in San Francis,California",
      userdesi: "Founder"
    },
    {
      cardtext: "With their expertise and experience RD Info has been become an invaluable part of the growth of our company.I am very happy with the level of support and co-operation we have received from RD Info and as a result.", 
      //the volume of prospective clients have increased tremendously.
      //I would highly recommend RD Info Global Solutions for any business.
      // that is looking for trust,honesty, expertise and growth.",
      cardimg: team,
      carduser: "Media House Company in Tr afford, Greater Manchester",
      userdesi: "Managing Partner"
    },
      {
      cardtext: "We have developed a great partnership with RDIGS.Their dedication to making our partnership fruitful has been evident since inception.They have helped us fulfill client demands across different verticals while keeping quantity & quality at a high level. ",
      //We appreciate their efforts and commitments to getting demands done and done on time.You guys rock - Thank you so much for doing a great job and keeping our partnership successful! ",
      cardimg: team,
      carduser: "Media House Company in San Diego, California",
      userdesi: "Customer Success Manager"
    }

  ];

  return (
    <>

      <section className="ftco-section testimony-section ftco-no-pb" >
        <div className="testimonil-img">
          <div className="section-title" >
            <span> <Heading h1Class="clientheadwe" spanClass="spansubhead1" title="Testimonial" /></span>
            <p className="service-para" style={{ marginTop: '2%' }}>Kinds Words From Clients.</p>
          </div>
        </div>
      </section>
      <section className="card-top">
        <Slider {...settings} className="newtestislider" style={{outline:'none',border:'none',outline: '0px solid transparent'}}>
          {/* {/ Using Map Function to access the data /} */}
          {data.map((data) => (
            <div className="container" style={{outline:'none',border:'none',outline: '0px solid transparent'}}>
              <div className="row" style={{outline:'none',border:'none',outline: '0px solid transparent'}}>
                <div className="col testcardcol1">
                  <div className="testimonial-card">
                    <div className="testitem" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
                      <div className="testimony-wrap py-2">
                        <div className="icon d-flex align-items-center justify-content-center  item-i">
                          <i className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="testcardtxt mb-4">
                              {isReadmorecardtext ? data.cardtext.slice(0,300):data.cardtext} 
                          {/* <span onClick={toggleHeadingreadmore} className="read-or-hide">
                              {isReadmorecardtext ? "..." : " "}
                          </span> */}
                          </p>
                          <p className="testproname">{data.carduser}</p>
                          <div className="d-flex align-items-center">
                            <img className="testuser-img" src={data.cardimg} alt="user-img"></img>
                            <div className="testproinfodiv pl-3">
                              <span className="testprodesi">{data.userdesi}</span>
                            </div>
                          </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  )
}
export default Testimonial;