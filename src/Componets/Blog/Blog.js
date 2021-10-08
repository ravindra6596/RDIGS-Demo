import React from "react";
import "./Blog.css";
import card4 from "../../img/card4.jpg";
const Blog = () => {
  const blog = [
    {
      cardimg: card4,
      day: "03",
      month: "OCT",
      year: "2021",
      blogtitle: "Blog Title",
      bloginfo:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      cardimg: card4,
      day: "03",
      month: "OCT",
      year: "2021",
      blogtitle: "Blog Title",
      bloginfo:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      cardimg: card4,
      day: "03",
      month: "OCT",
      year: "2021",
      blogtitle: "Blog Title",
      bloginfo:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  return (
    <>
      <div className="nav-contaniner"/>
      <section>
          <div className="container">
            <div className="row">
              {blog.map((user, index) => {
                return (
                  <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                    <div
                      className="card-general"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="300"
                    >
                      <img
                        src={user.cardimg}
                        className="card-img-top img-fluid"
                        alt="blog-img"
                      />
                      <div
                        className="round-div-card"
                        data-aos="fade-up"
                        data-aos-duration="500"
                      >
                        <h2 className="card-date">{user.day}</h2>
                        <h3 className="card-month">{user.month}</h3>
                        <h5 className="card-year">{user.year}</h5>
                      </div>
                      <div className="card-body">
                        <h3
                          className="card-blog-title"
                          data-aos="fade-down"
                          data-aos-easing="linear"
                          data-aos-duration="1200"
                        >
                          {user.blogtitle}
                        </h3>
                        <p
                          className="card-text text-center"
                          data-aos="fade-down"
                          data-aos-easing="linear"
                          data-aos-duration="1500"
                        >
                          {user.bloginfo}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </section>
    </>
  );
};
export default Blog;
