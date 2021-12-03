
import "./Banner1.css";
import React from "react";
const Banner1 = () => {
  return (
    <section className="slider-section">
      <div id="carousel" className="carousel slide" data-ride="carousel" dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={1} autoplay={true}>
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-href="0" className="active"></li>
          <li data-target="#carousel" data-slide-href="1"></li>
          <li data-target="#carousel" data-slide-href="2"></li>
          <li data-target="#carousel" data-slide-href="3"></li>
          <li data-target="#carousel" data-slide-href="4"></li>
          <li data-target="#carousel" data-slide-href="5"></li>
          <li data-target="#carousel" data-slide-href="6"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item item1-slider-banner active">
            <div className="carousel-caption d-none d-md-block">
              <h1 className="heading-b1">RD INFO GLOBAL SOLUTION</h1>
              <h3 className="text-light">2013</h3>
            </div>
             <a
                href="https://www.rdigs.com/"
                className="glightbox play-btn"
              >
            <div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
            </div>
            </a>
          </div>
          <div className="carousel-item item2-slider-banner">
            <div className="carousel-caption d-none d-md-block">
              <h1 className="heading-b2">RD INFO GLOBAL SOLUTION</h1>
              <h3 className="text-light">2014</h3>
            </div>
            <a
                href="https://www.rdigs.com/"
                className="glightbox play-btn"
              >
            <div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
            </div>
            </a>
          </div>
          <div className="carousel-item item3-slider-banner">
            <div className="carousel-caption d-none d-md-block">
              <h1 className="heading-b3">RD INFO GLOBAL SOLUTION</h1>
              <h3 className="text-light">2015</h3>
            </div>
            <a
                href="https://www.rdigs.com/"
                className="glightbox play-btn"
              >
            <div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
            </div>
            </a>
          </div>
          <div className="carousel-item item4-slider-banner">
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-light">2016</h3>
            </div>
            <a
                href="https://www.rdigs.com/"
                className="glightbox play-btn"
              >
            <div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
            </div>
            </a>
          </div>
          <div className="carousel-item item5-slider-banner">
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-light">2017</h3>
            </div>
            <a
                href="https://www.rdigs.com/"
                className="glightbox play-btn"
              >
            <div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
            </div>
            </a>
          </div>
          <div className="carousel-item item6-slider-banner">
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-light">2018</h3>
            </div>
            <a
                href="https://www.rdigs.com/"
                className="glightbox play-btn"
              >
            <div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
            </div>
            </a>
          </div>
        </div>
        {/* Previous & Next */}
        {/* <a href="#carousel" className="carousel-control-prev" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a href="#carousel" className="carousel-control-next" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>  */}
      </div>

      {/* End of Carousel  */}
    </section>
  );
};
export default Banner1;
