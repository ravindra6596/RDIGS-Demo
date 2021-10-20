import React from 'react';
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,

  };

  const data = [
    {
      cardtext: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cardimg: team,
      carduser: "Roger Scott",
      userdesi: "Marketing Manager"
    },
    {
      cardtext: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cardimg: team,
      carduser: "Roger Scott",
      userdesi: "Marketing Manager"
    },
    {
      cardtext: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cardimg: team,
      carduser: "Roger Scott",
      userdesi: "Marketing Manager"
    },

  ];

  return (
    <>

      <section className="ftco-section testimony-section ftco-no-pb" >
        <div className="testimonil-img">
          <div className="section-title" >
            <span> <Heading classNames="aboutwherewe" title="Testimonial" /></span>
            <p className="service-para" style={{ marginTop: '2%' }}>Kinds Words From Clients.</p>
          </div>


        </div>
      </section>
      <section className="card-top">
        <Slider {...settings} className="newtestislider">
          {/* {/ Using Map Function to access the data /} */}
          {data.map((data) => (
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="testimonial-card">
                    <div className="testitem" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
                      <div className="testimony-wrap py-4">
                        <div className="icon d-flex align-items-center justify-content-center  item-i">
                          <i className="fa fa-quote-left" />
                        </div>
                        <div className="text">
                          <p className="testcardtxt mb-4">{data.cardtext}</p>
                          <div className="d-flex align-items-center">
                            <img className="testuser-img" src={data.cardimg} alt="user-img"></img>
                            <div className="testproinfodiv pl-3">
                              <p className="testproname">{data.carduser}</p>
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