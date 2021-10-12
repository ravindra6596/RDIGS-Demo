import React from "react";
import "./Blog.css";
import cardimg2 from "../../img/blog/cardimg2.jpg";
import card4 from "../../img/blog/card4.jpg";
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
  const carddata=[
    {
      cardpic:cardimg2,
      cardday:"26",
      cardmonth:"June",
      cardyear:"2021",
      cardhead:"Finance And Legal Working Streams Occur Throughout",
      cardpara:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
     {
      cardpic:cardimg2,
      cardday:"26",
      cardmonth:"June",
      cardyear:"2021",
      cardhead:"Finance And Legal Working Streams Occur Throughout",
      cardpara:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      cardpic:cardimg2,
      cardday:"26",
      cardmonth:"June",
      cardyear:"2021",
      cardhead:"Finance And Legal Working Streams Occur Throughout",
      cardpara:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      cardpic:cardimg2,
      cardday:"26",
      cardmonth:"June",
      cardyear:"2021",
      cardhead:"Finance And Legal Working Streams Occur Throughout",
      cardpara:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    }
  ]
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
      <section className="">

      </section>
     <section className="card-blog">
     <div class="container card-blog-cont ">
       <div className="row">
         {
           carddata.map((data,i)=>{
             return(
               <div className="col-sm-12 col-md-4 col-lg-4">
              <div class="d-lg-flex card-body">
              <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                  <div class="backgroundEffect"></div>
                  <div class="pic"><img class="" src={data.cardpic} alt=""/>
                      <div class="date"> <span class="day">{data.cardday}</span> <span class="month">{data.cardmonth}</span> <span class="year">{data.cardyear}</span> </div>
                  </div>
                  <div class="content">
                      <p class="h-1 mt-4 cardhead">{data.cardhead}</p>
                      <p class="text-muted mt-3 card-para">{data.cardpara}</p>
                      <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                          <div class="btn btn-primary">Read More &nbsp;<span class="fa fa-arrow-right"></span></div>
                          <div class="d-flex align-items-center justify-content-center foot">
                              <p class="admin">Admin</p>
                              <p class="ps-3 icon text-muted"><span class="fas fa-comment-alt pe-1"></span>3</p>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
              </div>
             )
           })
         }
    </div>
</div>
     </section>
    </>
  );
};
export default Blog;
