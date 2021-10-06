import React from 'react';
import './Blog.css';
import card4 from '../../img/card4.jpg';
import blogteam from '../../img/blogteam.jpg';
const Blog=()=>{
    return(
        <>
         <div className="nav-contaniner"/>
        <section>
             <div className="container">
                <div className="row header-blog">
                        <img src={blogteam} className="blog-banner"></img>
                </div>
                <div class="container h-100 w-100"  >
                   <div class="d-flex h-100 w-100 text-center align-items-center">
                        <div class="text-box w-100 text-black">
                            <h1 class="heading-primary-blog">
                            <span class="heading-primary-main-blog" >RD INFO GLOBAL SOLUTIONS</span>
                                <span class="heading-primary-sub-blog">BLOG</span>
                            </h1>
                        </div>
                    </div>
                    </div>
                <div className="container"> 
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <div class="card-general" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="300">
                            <img src={card4} class="card-img-top img-fluid" alt="blog-img"/>
                                <div className="round-div-card" data-aos="fade-up"  data-aos-duration="500">
                                    <h2 className="card-date">03</h2>
                                    <h3 className="card-month">OCT</h3>
                                    <h5 className="card-year">2021</h5>
                                </div>
                            <div class="card-body">
                                <h3 className="card-blog-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200">Blog Tittle</h3>
                                <p class="card-text text-center"data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <div class="card-general" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="300">
                            <img src={card4} class="card-img-top img-fluid" alt="blog-img"/>
                                <div className="round-div-card" data-aos="fade-up"  data-aos-duration="500">
                                    <h2 className="card-date">03</h2>
                                    <h3 className="card-month">OCT</h3>
                                    <h5 className="card-year">2021</h5>
                                </div>
                            <div class="card-body">
                                <h3 className="card-blog-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200">Blog Tittle</h3>
                                <p class="card-text text-center"data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                        <div class="card-general" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="300">
                            <img src={card4} class="card-img-top" alt="blog-img"/>
                                <div className="round-div-card" data-aos="fade-up"  data-aos-duration="500">
                                    <h2 className="card-date">03</h2>
                                    <h3 className="card-month">OCT</h3>
                                    <h5 className="card-year">2021</h5>
                                </div>
                            <div class="card-body">
                                <h3 className="card-blog-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200">Blog Tittle</h3>
                                <p class="card-text text-center"data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>  
        </section>
    </>
    )
}
export default Blog;