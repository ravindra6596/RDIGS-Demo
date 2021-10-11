import React from 'react';
import './Companyslider.css';
import Heading from '../Heading/Heading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s1 from '../../img/client/client1.jpg';
import s2 from '../../img/client/client2.jpg';
import s3 from '../../img/client/client3.jpg';
import s4 from '../../img/client/client4.jpg';
import s5 from '../../img/client/client5.jpg';
import s6 from '../../img/client/client6.jpg';
import s7 from '../../img/client/client7.jpg';
import s8 from '../../img/client/client8.jpg';
import s9 from '../../img/client/client9.jpg';
import s10 from '../../img/client/client10.jpg';
import s11 from '../../img/client/client11.jpg';
import s12 from '../../img/client/client12.jpg';



const Companyslider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }

      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }

    ]
  };
  const data = [
    {
      clientimg: s1
    },
    {
      clientimg: s2
    },
    {
      clientimg: s3
    },
    {
      clientimg: s4
    },
    {
      clientimg: s5
    },
    {
      clientimg: s6
    },
    {
      clientimg: s7
    },
    {
      clientimg: s8
    },
    {
      clientimg: s9
    },
    {
      clientimg: s10
    },
    {
      clientimg: s11
    },
    {
      clientimg: s12
    },
  ];
  return (
    <>
      <section className="clients">
        <div className="section-title">
          <span> <Heading title="We Work With" /></span>
          <p className="service-para" style={{ marginTop: '2%' }}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
        </div>
        <div className="slide-overlay">
          <div className="overlay1">
            <div className="container slider-cont">
              <Slider {...settings} className="comp-slider">
                {/* {/ Using Map Function to access the data /} */}
                {data.map((data) => (
                  <div className="image-clientslider">
                    <img src={data.clientimg} className="img-fluid" alt="Client" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Companyslider;
