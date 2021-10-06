import React, { useState } from "react";
import "./Gallery.css";
import Footer from "../Footer/Footer";
import gallery1 from "../../img/Gallery/gallery1.jfif";
import gallery2 from "../../img/Gallery/gallery2.jfif";
import gallery3 from "../../img/Gallery/gallery3.jfif";
import gallery4 from "../../img/Gallery/gallery4.jfif";

import { Modal, ModalBody } from "reactstrap";
const Gallery = () => {
  const gallery = [
    {
      Galleryimg: gallery1,
    },
    {
      Galleryimg: gallery2,
    },
    {
      Galleryimg: gallery3,
    },
    {
      Galleryimg: gallery4,
    },
  ];

  const [modal1, setModal1] = useState(false);
 

  const toggle1 = () => setModal1(!modal1);
 

  return (
    <>
      <div className="nav-container"></div>
      <section className="Gallery-section">
        <div className="container">
          <div className="text-center heading-gallery1">
            <h2 className="text-center heading-gallary">Gallery</h2>
          </div>
        </div>
        <div className="row gallary-section1">
          {gallery.map((user) => {
            return (
              <>
                <div className="col-sm-4 gallary-hover">
                  <div
                    className="bdt-gallery-thumbnail bdt-transition-toggle"
                    data-aos="zoom-in-up"
                  >
                    <img
                      className="gallary-img"
                      src={user.Galleryimg}
                      alt="img-1-1"
                      onClick={toggle1}
                    />
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
                                src={user.Galleryimg}
                                alt="popup"
                                className="popup-image-model img-fluid"
                              ></img>
                            </div>
                          </div>
                        </div>
                      </section>
                    </ModalBody>
                  </Modal>
                </div>
              </>
            );
          })}

        </div>
      </section>
      <Footer />
    </>
  );
};
export default Gallery;
