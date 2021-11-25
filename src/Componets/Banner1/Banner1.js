import React from 'react';
import { Link } from 'react-router-dom';
import './Banner1.css';
import React, { Component }  from 'react';
const Banner1=()=>{
    return(
        
     <section class="slider-section">
	<div id="carousel" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			<li data-target="#carousel" data-slide-to="0" class="active"></li>
			<li data-target="#carousel" data-slide-to="1"></li>
			<li data-target="#carousel" data-slide-to="2"></li>
            <li data-target="#carousel" data-slide-to="3"></li>
            <li data-target="#carousel" data-slide-to="4"></li>
            <li data-target="#carousel" data-slide-to="5"></li>
            <li data-target="#carousel" data-slide-to="6"></li>
		</ol> 
		<div class="carousel-inner" role="listbox">
			<div class="carousel-item item1-slider-banner active">
				<div class="carousel-caption d-none d-md-block">
                    <h1 className="heading-b1">RD INFO GLOBAL SOLUTION</h1>
					<h3>2013</h3>	
				</div>
                <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                <Link to="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></Link>
                </div>
			</div> 
			<div class="carousel-item item2-slider-banner">
				<div class="carousel-caption d-none d-md-block">
                    <h1 className="heading-b2">RD INFO GLOBAL SOLUTION</h1>
					<h3>2014</h3>
				</div>
                <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                <Link to="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></Link>
                </div>
			</div>
			<div class="carousel-item item3-slider-banner" >
				<div class="carousel-caption d-none d-md-block">
                    <h1 className="heading-b3">RD INFO GLOBAL SOLUTION</h1>
					<h3>2015</h3>	
				</div>
                <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                <Link to="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></Link>
               </div>
			</div>
            <div class="carousel-item item4-slider-banner" >
				<div class="carousel-caption d-none d-md-block">
					<h3>2016</h3>	
				</div>
                <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                <Link to="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></Link>
               </div>
			</div>
            <div class="carousel-item item5-slider-banner" >
				<div class="carousel-caption d-none d-md-block">
					<h3>2017</h3>	
				</div>
                <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                <Link to="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></Link>
               </div>
			</div>
            <div class="carousel-item item6-slider-banner" >
				<div class="carousel-caption d-none d-md-block">
					<h3>2018</h3>	
				</div>
                <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                <Link to="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></Link>
               </div>
			</div>
		</div>
		 {/* Previous & Next */}
		<Link to="#carousel" class="carousel-control-prev" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only"></span>
		</Link>
		<Link to="#carousel" class="carousel-control-next" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only"></span>
		</Link>
	</div> 
  
    {/* End of Carousel  */}
    </section> 
    )
}
export default Banner1;