import React from "react";
import "./Counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { animateScroll as scroll } from "react-scroll";
const Counter = () => {
  return (
    <section
      id="counts"
      className="counts"
      onclick={() => scroll.scrollToTop()}
    >
      <div className="container" data-aos="fade-up">
        <div className="row ">
          <div className="col-sm-1"></div>
          <div className="col-lg-2 col-md-4 col-sm-2 counter-p">
            <div
              className="count-box founded-in"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <i className="fa fa-history"></i>
              <div className="text-center para-icons">
                <p
                  className=""
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  Founded In
                </p>
                <CountUp end={2013} duration={10} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span className="counter-plus text-center">+</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-2 counter-p">
            <div
              className="count-box Happy-Clients"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <i className="fa fa-smile-o"></i>
              <div className="text-center para-icons">
                <p
                  className="text-center"
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  Happy Clients
                </p>
                <CountUp end={232} duration={10} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span className="counter-plus">+</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-2 counter-p">
            <div
              className="count-box Projects"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <i className="fa fa-newspaper-o"></i>
              <div className="text-center para-icons">
                <p
                  className="text-center countpoject-para"
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  Our Projects
                </p>
                <CountUp start={0} end={521} duration={10}></CountUp>
                <span className="counter-plus">+</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-2 counter-p">
            <div
              className="count-box Hours-Support"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <i className="fa fa-headphones"></i>
              <div className="text-center para-icons">
                <p
                  className="text-center"
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  Hours Of Support
                </p>
                <CountUp start={0} end={1463} duration={10}></CountUp>
                <span>+</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-2 counter-p">
            <div
              className="count-box Hard-Workers"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <i className="fa fa-user"></i>
              <div className="text-center para-icons">
                <p
                  className="text-center"
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  Hard Workers
                </p>
                <CountUp start={0} end={15} duration={10}></CountUp>
                <span className="counter-plus">+</span>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </section>
  );
};
export default Counter;
