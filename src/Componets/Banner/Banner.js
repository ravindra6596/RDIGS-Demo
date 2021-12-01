import React, { useState ,Component} from 'react';
import { Modal, ModalBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import './Banner.css';
import Button from '../ButtonGroup/Button/Button';
import banimg from '../../img/Banner/hero-img.png';
import modalimg from '../../img/homemodelnew1.jpg';
import Heading from '../Heading/Heading';

const Banner = () => {
  const [modal, setModal] = useState(false);

//any where in the page scroll on top Navigation tab click open on top
const scrollgoToplink = () => {
  window.scrollTo({ top:0});
};

  return (
    <>
      {/* {/ Header Modals /} */}
      <Modal isOpen={modal} centered>
        <ModalBody className="homemodalbody" >
          <span className="homemodalclosebtn" onClick={() => setModal(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5" >
                <img src={modalimg} className="homemain-modalimg img-fluid" />
              </div>
              <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                <h1 style={{color:'#6cbeee'}}>To Get Latest Updates</h1>
                <form>
                  <input placeholder="Enter E-Mail Here " className="homemodalinput" />
                </form>
                <div style={{ display:'flex',marginTop:'2%'}}>
                  <input type="checkbox" checked style={{marginTop:'2%'}}/>
                  <p className="homemodalAgree">I agree to receive marketing & promotional emails by RD Info Global Solutions.Check our <Link to="/privacypolicy" onClick={scrollgoToplink}>Privacy Policy</Link> And <Link to="/termscondition" onClick={scrollgoToplink}>Terms and Codition</Link></p>
                </div>
                <div style={{ textAlign: 'center' }}><Button classNames="allbtn-primary glow-on-hover text-light" text="Submit" /></div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* {/ <!-- ======= Hero Section ======= --> /} */}
      <section id="hero" >
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-7 col-md-7 col-sm-12 pt-lg-0 order-2 order-lg-1 d-flex align-items-center justify-content-center ">
              <div data-aos="zoom-out">
                <Heading h1Class="aboutwherewe" spanClass="spansubhead1" title="Build Your Business With "/> 
                <h1><marquee width="50%" direction="left" style={{ fontFamily: 'Orbitron'}} >RDIGS</marquee></h1>
                <h2>We Use Reverse Demand Generation Funnel</h2>
                <h5>After our research we adopted the Reverse Lead Generation Funnel, that increased our sales by 14.25% and we are able to move prospects through the sales cycle 23% faster. </h5>
                <div class="text-center text-lg-start">
                  <Button classNames="allbtn-primary glow-on-hover text-light" text="KNOW MORE" fun={() => setModal(true)} />
                </div>
              </div>
            </div>
            <div class="col-lg-4  col-md-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
              <img src={banimg} class="img-fluid animated" alt="heroimgbanner" />
            </div>
          </div>
        </div>
      </section>
      {/* {/ <!-- End Hero --> /} */}
    </>
  )
}
export default Banner;