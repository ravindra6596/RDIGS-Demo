import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
function GalleryModel(props) {
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);
  return (
    <>
      <div className="col-sm-4 gallary-hover">
        <div
          className="bdt-gallery-thumbnail bdt-transition-toggle"
          data-aos="zoom-in-up"
        >
          <img
            className="gallary-img"
            src={props.image}
            alt="img-1-1"
            
          />
            <div class="overlay-bottom-slide">
            <div class="text">Image Title:Roland Sir</div>
            <span className="plusicon" onClick={toggle1} fun={()=>setModal1(true)}>+</span>
        </div>
        </div>
      </div>
      <Modal
        isOpen={modal1}
        className="modal-dialog modal-lg largemodel"
        toggle={toggle1}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <ModalBody>
        <span  className="homemodalclosebtn"  onClick={() => setModal1(false)} ><i class="fa fa-times-circle" aria-hidden="true"></i></span>
          <section className="Ppoup-model-header">
            <div className="container-fluid">
              <div className="row">
                <div className="image-gallary-popup">
                  <img
                    src={props.image}
                    alt="popup"
                    className="popup-image-model img-fluid"
                  />

                </div>
              </div>
            </div>
          </section>
        </ModalBody>
      </Modal>
    </>
  );
}

export default GalleryModel;
