import React from 'react';
import './CareerSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s1 from '../../../img/career/carbanner1.jpg';
import s2 from '../../../img/career/careerbanner1.jpg';


const CareerSlider = ()=>{
    return(
        <>
            <Slider dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={1} autoplay={true}>
                <img className="" alt="cargalimg" src={s1} width="100%" height="450px"/>
                <img  className="" alt="cargalimg"  src={s2} width="100%"  height="450px" />
                <img  className="" alt="cargalimg"  src={s1} width="100%"  height="450px"/>
                <img   className="" alt="cargalimg"  src={s2} width="100%" height="450px" />
            </Slider>
        </>
    )
} 
export default CareerSlider;