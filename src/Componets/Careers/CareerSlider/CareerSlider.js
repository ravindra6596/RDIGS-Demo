import s1 from '../../../img/career/careerbanner1.jpg';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const CareerSlider = ()=>{
    return(
        <>
            <Slider dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={1} autoplay={true}>
                <img className="img-fluid" src={s1} width="100%" height="200px" alt=""/>
                <img  className="img-fluid" src={s1} width="100%"  height="200px" alt=""/>
                <img  className="img-fluid"  src={s1} width="100%"  height="200px" alt=""/>
                <img   className="img-fluid" src={s1} width="100%" height="200px" alt=""/>
            </Slider>
        </>
    )
} 
export default CareerSlider;