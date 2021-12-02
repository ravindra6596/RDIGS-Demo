import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './Blogpage.css';
import team3 from '../../img/team/WilliamMathurai.jpg';
import recentblog from '../../img/blog/recentblog.jpg';
import Button from '../ButtonGroup/Button/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Blogpage=(props)=>{
   const [items, setItems] = useState([]);
   const { id } = useParams()
   useEffect(()=> {
    axios.get(`https://b2bnetworkservices.online/blogs/public/${id}`)
    .then(res => {
        console.log(res);
        console.log(res.data.seo);
        setItems(res.data);
        console.log(items);
    })
    .catch(err =>{
        console.log(err)
    })
}, [])
    return(
        <>
        <div className="nav-contaniner"/>
    {/*============== Blog Single Section================ */}
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">
              <div className="row"> 
              <div className="col-lg-8 entries" data-aos="zoom-in-right">
              <article className="entry entry-single" >
              <div className="entry-img">
                <img src={items.coverImg} alt="" className="img-fluid"/>
              </div>
              <h2 className="entry-title" props={items}>
                  {items.title}
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="fa fa-user-circle-o"></i>
                   {items.author}
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fa fa-clock-o"></i> 
                    <a href="blog-single.html"><time datetime="2020-01-01">{items.publishDate}</time></a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fa fa-comment"></i> 
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
              <div className="entry-content">
                <blockquote>
                  <p>{items.shortDes}</p>
                </blockquote>
                <p className="description-blogpage" dangerouslySetInnerHTML={{__html:items.description}}></p>
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
              <img src={team3} className="rounded-circle float-left" alt=""/>
              <div>
                <h4>William Mathurai</h4>
                <div className="social-links">
                  <Link to="https://twitters.com/#"><i className="fa fa-twitter"></i></Link>
                  <Link to="https://facebook.com/#"><i className="fa fa-facebook"></i></Link>
                  <Link to="https://www.linkedin.com/#"><i className="fa fa-linkedin"></i></Link>
                </div>
                <p>
                     {items.shortDes}  
                </p>
              </div>
            </div>
            <div className="blog-comments d-flex justify-content-center">
              <h4 className="comments-count">{items.comments}</h4>
              <div id="comment-1" className="comment">
                <div className="d-flex">
                  <div className="comment-img"><img src="assets/img/blog/comments-1.jpg" alt=""/></div>
                  <div>
                    <h5><a href="">{items.author}</a> <a href="#" className="reply"><i className="fa fa-reply"></i> Reply</a></h5>
                    <time datetime="2020-01-01">{items.createdAt}</time>
                  </div>
                </div>
              </div>
              </div>
              </div>
             <div className="col-lg-4" data-aos="zoom-in-left">
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
                  <img src={items.coverImg} alt=""/>
                  <h4><a href="#">{items.title}</a></h4>
                  <time datetime="2020-01-01">{items.publishDate}</time>
                  <div>
                  <i className="fa fa-eye mx-2"></i>
                  {items.views}</div>
                </div>
              </div>
             <h3 className="sidebar-title">Related Posts</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src={items.coverImg} alt=""/>
                  <h4><a href="blog-single.html">{items.author}</a></h4>
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
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
        <div className="reply-form">
                <h4>Leave a Reply</h4>
                <p>Your email address will not be published. Required fields are marked * </p>
                <form action="">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input name="name" type="text" className="form-control" placeholder="Your Name*"/>
                    </div>
                    <div className="col-md-6 form-group">
                      <input name="email" type="email" className="form-control" placeholder="Your Email*"/>
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
      </div>
    </section> 
        </>
    )
}
export default Blogpage;