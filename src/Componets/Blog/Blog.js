import React from "react";
import "./Blog.css";
import Heading from "../Heading/Heading";
import cardimg2 from "../../img/blog/cardimg2.jpg";
import blog4 from "../../img/blog/blog4.jpg";
import avatarsm from '../../img/blog/avatar-sm.png';
import Slider from "react-slick";
import aboutimg from '../../img/blog/aboutimg.jpg';
import about1 from '../../img/blog/about1.jpg';
const Blog = () => {
  
  var blogslider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,

  };
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
  ];
  const blogdata=[
    {
      h3name:'Saul Goodman',
      h4sub:'Ceo &amp; Founder',
      slidep:'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    },
    {
      h3name:'Saul Goodman',
      h4sub:'Ceo &amp; Founder',
      slidep:'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    }
  ]
  return (
    <>
      <div className="nav-contaniner"/>
      <section className="Blogsection">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ marginTop:'10%'}}>
                            <Heading  h1Class="clientheadwe" title="Blog"/>
                            <p style={{ color:'white'}}>At RDIGS, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                        </div>
                    </div>
                </div>
      </section> 
{/* ===================================================== */}
<section id="about" class="about">
<div class="container" data-aos="fade-up">
  <div class="row gx-0">
    <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div class="content">
        <h3>Who We Are</h3>
        <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
        <p>
          Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
        </p>
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
      <img src={about1} class="img-fluid about1img" alt=""/>
    </div>
  </div>
</div>
</section>
      {/* =======================section about blog==================== */}
      <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-5 col-md-6">
            <div class="about-img" data-aos="fade-right" data-aos-delay="100">
              <img src={aboutimg} alt=""/>
            </div>
          </div>
          <div class="col-lg-7 col-md-6">
            <div class="about-content" data-aos="fade-left" data-aos-delay="100">
              <h2>About Blog</h2>
              <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
              <ul>
                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================card blog============= */}
     <section className="card-blog">
     <div class="container card-blog-cont ">
       <div className="row">
         {
           carddata.map((data,i)=>{
             return(
               <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
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
                          <div class="btn-primary blogbtn">
                            Read More &nbsp;<span class="fa fa-arrow-right"></span>
                            </div>
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
  
     <section id="testimonials" class="testimonials">
      <Slider {...blogslider} className="newtestislider">
      {
      blogdata.map((blog,i)=>{
        return(
      <div class="container" data-aos="zoom-in">
        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={avatarsm} class="testimonial-img" alt=""/>
                <h3>{blog.h3name}</h3>
                <h4>{blog.h4sub}</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                 {blog.slidep}
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
      })
    }
      </Slider>
       
    </section>
           
    </>
  );
};
export default Blog;
