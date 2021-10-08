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
            onClick={toggle1}
          />
        </div>
      </div>
      <Modal
        isOpen={modal1}
        className="modal-dialog modal-lg"
        toggle={toggle1}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <ModalBody>
          <section className="Ppoup-model-header">
            <div className="container-fluid">
              <div className="row">
                <div className="image-gallary-popup">
                  <img
                    src={props.image}
                    alt="popup"
                    className="popup-image-model img-fluid"
                  />
                  <div class="overlay">
                    <h2>Hover effect 7</h2>
                    <p>
                      <Link to="#" className="a-tag">
                        <i class="fa fa-twitter"></i>
                      </Link>
                      <Link to="#" className="a-tag">
                        <i class="fa fa-facebook"></i>
                      </Link>
                      <Link to="#" className="a-tag">
                        <i class="fa fa-instagram"></i>
                      </Link>
                      <Link to="#" className="a-tag">
                        <i class="fa fa-dribbble"></i>
                      </Link>
                    </p>
                  </div>
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
