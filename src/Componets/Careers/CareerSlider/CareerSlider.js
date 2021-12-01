import s1 from '../../../img/career/cargalimg5.jpg';
import React, { Component }  from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const CareerSlider = ()=>{
    return(
        <>
            <Slider dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={1} autoplay={true}>
                <img className="" src={s1} width="100%" height="450px"/>
                <img  className="" src={s1} width="100%"  height="450px" />
                <img  className=""  src={s1} width="100%"  height="450px"/>
                <img   className="" src={s1} width="100%" height="450px" />
            </Slider>
        </>
    )
} 
export default CareerSlider;