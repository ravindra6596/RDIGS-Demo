import React from "react";
import "./Blog.css";
import Bannercommon from "../Bannercommon/Bannercommon";
import cardimg2 from "../../img/blog/cardimg2.jpg";
import blog4 from "../../img/blog/blog4.jpg";
const Blog = () => {
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
    }
  ]
  return (
    <>
      <div className="nav-contaniner"/>
      <Bannercommon title="BLOG"/>
      <section className="blog4-section">
        <div className="container">
              <div className="row blog4-img-row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="blog-4img-div">
                    <img src={blog4} alt="blog4" className="img-fluid"></img>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 blog4-content">
                  <div className="heading-blog4">
                    <h4 className="d-flex justify-content-center">heading</h4>
                    <p className="blog4para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
              </div>
        </div>
      </section>
     <section className="card-blog">
     <div class="container card-blog-cont ">
       <div className="row">
         {
           carddata.map((data,i)=>{
             return(
               <div className="col-sm-12 col-md-4 col-lg-4">
              <div class="d-lg-flex card-body card-border">
              <div class="card-blog-div border-0 me-lg-4 mb-lg-0 mb-4">
                  <div class="backgroundEffect"></div>
                  <div class="pic"><img class="" src={data.cardpic} alt=""/>
                      <div class="date"> <span class="day">{data.cardday}</span> <span class="month">{data.cardmonth}</span> <span class="year">{data.cardyear}</span> </div>
                  </div>
                  <div class="content">
                      <p class="h-1 mt-4 cardhead">{data.cardhead}</p>
                      <p class="text-muted mt-3 card-para">{data.cardpara}</p>
                      <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                          <div class="btn btn-primary blogbtn">Read More &nbsp;<span class="fa fa-arrow-right"></span></div>
                          <div class="d-flex align-items-center justify-content-center foot blog-admin-msg">
                              <p class="admin">Admin</p>&nbsp;&nbsp;
                              <p class="ps-3 icon text-muted"><span class="fa fa-comment pe-1"></span>3</p>
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
