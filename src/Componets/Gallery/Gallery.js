import React,{useState} from "react";
import './Gallery.css';
import gallery1 from '../../img/Gallery/gallery1.jfif';
import gallery2 from '../../img/Gallery/gallery2.jfif';
import gallery3 from '../../img/Gallery/gallery3.jfif';
import gallery4 from '../../img/Gallery/gallery4.jfif';

import {Modal, ModalHeader, ModalBody, ModalFooter,Button} from 'reactstrap';
const Gallery=()=>{
    // const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false); 
    const [modal2, setModal2] = useState(false); 
    const [modal3, setModal3] = useState(false);  
    const [modal4, setModal4] = useState(false); 
    const [modal5, setModal5] = useState(false);
    const [modal6, setModal6] = useState(false);

    // const toggle = () => setModal(!modal);
    const toggle1 = () => setModal1(!modal1);
    const toggle2 = () => setModal2(!modal2);
    const toggle3 = () => setModal3(!modal3);
    const toggle4 = () => setModal4(!modal4);
    const toggle5 = () => setModal5(!modal5);
    const toggle6 = () => setModal6(!modal6);

    return(
    <>
        <div className="nav-contaniner"/>
        <section class="Gallery-section"style={{marginTop:'2%'}}>
			  <div class="container">
                                <div class="text-center heading-gallery1">
                                <h1 className="text-center heading-gallary">Gallery</h1>
                               </div>
				           </div>
                <div className="row gallary-section1">
                    <div className="col-sm-4 gallary-hover">
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle" data-aos="zoom-in-up">
                                  <img className="gallary-img" src={gallery1} alt="img-1-1" onClick={toggle1} />
                            </div>
                            <div className="modal-div">
                                       <Modal isOpen={modal1} toggle={toggle1} className="custom-modal-style">
                                                 <ModalBody>
                                                    <section className="Ppoup-model-header">
                                                            <div className="container-fluid"> 
                                                                <div className="row">
                                                                    <div className="image-gallary-popup">
                                                                        <img src={gallery1} alt="popup-image" className="popup-image-model img-fluid"></img>
                                                                    </div>
                                                                </div> 
                                                             </div>
                                                    </section>
                                                </ModalBody>
                                        </Modal>
                            </div>         
                    </div>
                    {/* col end */}
                    <div className="col-sm-4 gallary-hover">
                   
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle" data-aos="zoom-in-up">
                                  <img className="gallary-img" src={gallery2} alt="img-1-1" onClick={toggle2}/>
                            </div>
					
                                <Modal isOpen={modal2} toggle={toggle2} className="custom-modal-style">
                                                    
                                                            <section className="Ppoup-model-header">
                                                                            <div className="container-fluid"> 
                                                                                <div className="row">
                                                                                    <div className="image-gallary-popup">
                                                                                        <img src={gallery2} alt="popup-image"></img>
                                                                                    </div>
                                                                                    
                                                                                </div>   
                                                                            </div>
                                                            </section>
                                </Modal>
                        
                    </div>
                    <div className="col-sm-4 gallary-hover">
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle" data-aos="zoom-in-up">
                                  <img className="gallary-img" src={gallery3} alt="img-1-1" onClick={toggle3}/>
                            </div>		
                            <Modal isOpen={modal3} toggle={toggle3} className="custom-modal-style">
                                <section className="Ppoup-model-header">
                                    <div className="container-fluid"> 
                                        <div className="row">
                                            <div className="image-gallary-popup">
                                                <img src={gallery3} alt="popup-image"></img>
                                            </div>
                                         </div>   
                                    </div>
                                 </section>
                        </Modal>    
						</div>
                </div>
                {/* row2 */}
                <div className="row gallary-section2">
                  <div className="col-sm-4 gallary-hover">
                            <div class="bdt-gallery-thumbnail bdt-transition-toggle" data-aos="zoom-in-up">
                                  <img  className="gallary-img" src={gallery4} alt="img-1-1" onClick={toggle4}/>
                            </div>		

                      <Modal isOpen={modal4} toggle={toggle4} className="custom-modal-style">
                           <section className="Ppoup-model-header">
                                <div className="container-fluid"> 
                                    <div className="row">
                                         <div className="image-gallary-popup">
                                              <img src={gallery4} alt="popup-image"></img>
                                         </div>
                                    </div>   
                                </div>
                            </section>
                        </Modal>
                    </div>
                    
                    <div className="col-sm-4 gallary-hover">
                        <div class="bdt-gallery-thumbnail bdt-transition-toggle" data-aos="zoom-in-up">
                            <img  className="gallary-img" src={gallery1} alt="img-1-1" onClick={toggle5}/>
                        </div>
                      <Modal isOpen={modal5} toggle={toggle5} className="custom-modal-style">
                            <section className="Ppoup-model-header">
                                <div className="container-fluid"> 
                                    <div className="row">
                                        <div className="image-gallary-popup">
                                            <img src={gallery1} alt="popup-image"></img>
                                        </div>                                  
                                    </div>   
                                </div>
                            </section>
                        </Modal>
                     
                    </div>
                    <div className="col-sm-4 gallary-hover">
                        <div class="bdt-gallery-thumbnail bdt-transition-toggle" data-aos="zoom-in-up">
                            <img  className="gallary-img" src={gallery1} alt="img-1-1" onClick={toggle6}/>
                        </div>        
                      <Modal isOpen={modal6} toggle={toggle6} className="custom-modal-style">
                            <section className="Ppoup-model-header">
                                 <div className="container-fluid"> 
                                  <div className="row">
                                    <div className="image-gallary-popup">
                                        <img src={gallery1} alt="popup-image"></img>
                                     </div>
                                  </div>   
                                  </div>
                            </section>
                        </Modal>
                    </div>
                </div>
		</section>

</>
    )
}
export default Gallery;