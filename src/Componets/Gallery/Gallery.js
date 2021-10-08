
import React from "react";
import "./Gallery.css";
import gallery1 from "../../img/Gallery/gallery1.jfif";
import gallery2 from "../../img/Gallery/gallery2.jfif";
import gallery3 from "../../img/Gallery/gallery3.jfif";
import gallery4 from "../../img/Gallery/gallery4.jfif";
import Heading from "../Heading/Heading";
import GalleryModel from "../GalleryModel/GalleryModel";
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
  return (
    <>
      <div className="nav-contaniner" />
      <section className="Gallery-section">
        <div className="container">
          <div className="d-flex justify-content-center heading-gallery1">
            <Heading title="Gallery"></Heading>
          </div>
        </div>
        <div className="row gallary-section1">
          {gallery.map((v, i) => {
            return (
              <GalleryModel
                className="gallaryimg"
                image={v.Galleryimg}
              ></GalleryModel>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Gallery;
