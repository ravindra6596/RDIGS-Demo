import React from 'react';
import './Blogpage.css';
import cardimg2 from '../../img/blog/cardimg2.jpg';
import blogrecent from '../../img/blog/blogrecent.jpg';
import recentblog from '../../img/blog/recentblog.jpg';
import blogauthor from '../../img/blog/blog-author.jpg';
import Button from '../ButtonGroup/Button/button';
const Blogpage=()=>{
    return(
        <>
          <div className="nav-contaniner" />
    {/*============== Blog Single Section================ */}
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-8 entries">

            <article className="entry entry-single">

              <div className="entry-img">
                <img src={cardimg2} alt="" className="img-fluid"/>
              </div>

              <h2 className="entry-title">
                <a href="blog-single.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="fa fa-user-circle-o"></i> <a href="blog-single.html">John Doe</a></li>
                  <li className="d-flex align-items-center"><i className="fa fa-clock-o"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="fa fa-comment"></i> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                  Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                </p>

                <p>
                  Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                </p>

                <blockquote>
                  <p>
                    Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                  </p>
                </blockquote>

                <img src={blogrecent} className="img-fluid" alt=""/>

                <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                <p>
                  Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                  Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                </p>
                <p>
                  Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
                </p>

              </div>

              <div className="entry-footer">
                <i className="fa fa-folder"></i>
                <ul className="cats">
                  <li><a href="#">Business</a></li>
                </ul>

                <i className="fa fa-tags"></i>
                <ul className="tags">
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>
              </div>

            </article>

            <div className="blog-author d-flex align-items-center">
              <img src={blogauthor} className="rounded-circle float-left" alt=""/>
              <div>
                <h4>Jane Smith</h4>
                <div className="social-links">
                  <a href="https://twitters.com/#"><i className="fa fa-twitter"></i></a>
                  <a href="https://facebook.com/#"><i className="fa fa-facebook"></i></a>
                  <a href="https://instagram.com/#"><i className="fa fa-instagram"></i></a>
                </div>
                <p>
                  Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                </p>
              </div>
            </div>
            <div className="blog-comments">

              <h4 className="comments-count">8 Comments</h4>

              <div id="comment-1" className="comment">
                <div className="d-flex">
                  <div className="comment-img"><img src="assets/img/blog/comments-1.jpg" alt=""/></div>
                  <div>
                    <h5><a href="">Georgia Reader</a> <a href="#" className="reply"><i className="fa fa-reply"></i> Reply</a></h5>
                    <time datetime="2020-01-01">01 Jan, 2020</time>
                    <p>
                      Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                      Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                    </p>
                  </div>
                </div>
              </div>
              <div className="reply-form">
                <h4>Leave a Reply</h4>
                <p>Your email address will not be published. Required fields are marked * </p>
                <form action="">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input name="name" type="text" className="form-control" placeholder="Your Name*"/>
                    </div>
                    <div className="col-md-6 form-group">
                      <input name="email" type="text" className="form-control" placeholder="Your Email*"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <input name="website" type="text" className="form-control" placeholder="Your Website"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                    </div>
                  </div>
                  <Button type="submit" text="Post Comment" classNames="allbtn-primary glow-on-hover text-light"></Button>

                </form>

              </div>

            </div>

          </div>
{/* ====================== */}
          <div className="col-lg-4">

            <div className="sidebar">

              <h3 className="sidebar-title">Search</h3>
              <div className="sidebar-item search-form">
                <form action="">
                  <input type="text"/>
                  <button type="submit"><i className="bi bi-search"></i></button>
                </form>
              </div>

              <h3 className="sidebar-title">Categories</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li><a href="#">General <span>(25)</span></a></li>
                  <li><a href="#">Design <span>(22)</span></a></li>
                  <li><a href="#">Creative <span>(8)</span></a></li>
                </ul>
              </div>

              <h3 className="sidebar-title">Recent Posts</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src={recentblog} alt=""/>
                  <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
            
              <h3 className="sidebar-title">Related Posts</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src={recentblog} alt=""/>
                  <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              <h3 className="sidebar-title">Tags</h3>
              <div className="sidebar-item tags">
                <ul>
                  <li><a href="#">App</a></li>
                  <li><a href="#">IT</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Office</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
        </>
    )
}
export default Blogpage;