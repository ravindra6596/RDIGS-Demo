import React, { useState } from 'react';
import {Modal,ModalBody} from 'reactstrap';
import './Banner.css';
import Button from '../ButtonGroup/Button/button';
import banimg from '../../img/Banner/hero-img.png';
import modalimg from '../../img/modalhomeimg.png';

const Banner = () => {

    const [modal, setModal] = useState(false);
 
    return (
        <>
            {/* Header Modals */}
            <Modal isOpen={modal} >
                    <ModalBody className="homemodalbody" >
                    <span className="homemodalclosebtn" onClick={() => setModal(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                         <div className="container">
                           <div className="row">
                               <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5" style={{padding:'0px'}}>
                                   <img src={modalimg} className="homemain-modalimg img-fluid" />
                               </div>
                               <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                   <h1>To Get Latest Updates</h1>
                                   <form>
                                       <input placeholder="Enter your E-Mail Here " className="homemodalinput" />
                                   </form>
                                   <div style={{display:'flex',marginTop:'5px'}}>
                                         <input type="checkbox" checked/>
                                         <p className="homemodalAgree">I agree to receive marketing & promotional emails by RD Info Global Solutions.Check our <span style={{color:'#30a6e9'}}>Privacy Policy</span> And <span style={{color:'#30a6e9'}}>Terms and Codition.</span> </p>
                                   </div>
                                   <div style={{textAlign:'center'}}><Button text="Submit" /></div>                              
                               </div>
                           </div>
                       </div>
                    </ModalBody>
            </Modal>
   {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" >
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                    <div data-aos="zoom-out">
                        <h1>Build Your Business With   <marquee width="50%" direction="left" height="100px">RDIGS</marquee></h1>
                        <h2>We are team of talented designers making websites with Bootstrap</h2>
                        <div class="text-center text-lg-start">
                            <Button text="KNOW MORE" fun={() => setModal(true)}/>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                    <img src={banimg} class="img-fluid animated" alt=""/>
                    </div>
                </div>
            </div>
        </section>
{/* <!-- End Hero --> */} 
        </>
    )
}
export default Banner;