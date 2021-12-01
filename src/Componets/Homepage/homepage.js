import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import './homestyle.css';
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Testimonial from "../Testimonial/Testimonial";
import Companyslider from "../CompanySlider/Companyslider";
import About from "../About/about";
import Services from "../Services/Services";
import Button from '../ButtonGroup/Button/Button';
import modalimg from '../../img/homemodelnew1.jpg';
import { Modal, ModalBody } from 'reactstrap';
const Home = () => {
//  { / After page Load Model Automatic show / }
  const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const timeId = setTimeout(() => setShowModal(true), 90000)
        return () => clearTimeout(timeId)
      },[]);
  return (
    <> 
      <Banner />
      <About />
      <Counter />
      <Services />
      <Companyslider />
      <Testimonial />
      {/* {/ After page Load Model Automatic show /} */}
       <Modal isOpen={showModal} toggle={showModal} centered>
        <ModalBody className="homemodalbody" >
          <span className="homemodalclosebtn" onClick={() => setShowModal(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5" style={{ padding: '0px' }}>
                <img src={modalimg} className="homemain-modalimg img-fluid" alt=""/>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                <h1>To Get Latest Updates</h1>
                <form>
                  <input placeholder="Enter your E-Mail Here " className="homemodalinput" />
                </form>
                <div style={{ display: 'flex', marginTop:'2%'}}>
                  <input type="checkbox" checked  style={{marginTop:'2%'}} />
                  <p className="homemodalAgree">I agree to receive marketing & promotional emails by RD Info Global Solutions.Check our <Link to="/privacypolicy">Privacy Policy</Link> And <Link to="/termscondition">Terms and Codition</Link></p>
                </div>
                <div style={{ textAlign: 'center'}} ><Button classNames="allbtn-primary glow-on-hover text-light" text="Submit" /></div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal> 
      {/* {/ After page Load Model Automatic show End  /} */}
    </>
  )
}
export default Home;

