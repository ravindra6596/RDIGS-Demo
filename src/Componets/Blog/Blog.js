import React,{useEffect,useState} from "react";
import "./Blog.css";
import Banner1 from "../Banner1/Banner1";
import Button from '../ButtonGroup/Button/Button';
import aboutimg from '../../img/blog/aboutimg.jpg';
import Roland from '../../img/blog/Roland.jpg';
import Heading from "../Heading/Heading";
import { Link} from 'react-router-dom';
const Blog = (props) => {
  const [items, setItems] = useState([]);
  const [isReadMore, setIsReadMore] = useState(true);
  const [isReadmorepara, setIsReadmorepara]=useState(true); 
// =============================================
  useEffect(()=>{
    fetch(`https://b2bnetworkservices.online/blogs/public`)
    .then((res)=>res.json())
    .then((data)=>setItems(data.blogs));
  },[]);
//scroll to top
  const scrollgoToplink = () => {
    window.scrollTo({ top:0});
  };
  const[count,setCount]=useState(3);
  const inc=()=>{
    setCount(count+3);
    console.log(setCount);
  }
  // const toggleReadMore = () => {
  //       setIsReadMore(!isReadMore);
  //    };
  const toggleHeadingreadmore=()=>{
        setIsReadmorepara(!isReadmorepara);
  }
  return (
    <>
      <div className="nav-contaniner"/>
      <section className="Blogsection">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ marginTop:'10%'}}>
                            <Heading  h1className="clientheadwe" title="Blog"/>
                            <p style={{ color:'white'}}>At RDIGS, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                        </div>
                    </div>
                </div>
      </section> 
   
      {/* ===================================================== */}
      {/* <div className="container-fluid">
        <div className="row">
            <video className="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src={bg} type="video/mp4" /></video>
          </div>
      </div> */}
      {/* <Banner1/> */}
      {/* =======================section about blog==================== */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="about-img" data-aos="fade-right" data-aos-delay="100">
              <img src={aboutimg} alt=""/>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-content" data-aos="fade-left" data-aos-delay="100">
              <h2>About Blog</h2>
              <h3>Get instant access to actionable ideas you can implement today.</h3>
              <p>B2B blogs can be a challenge for even the most experienced content marketer.

There’s the issue of tone, for example. You have to maintain one that’s professional, yet still readable and friendly. That can be difficult, especially when you’re working in a highly specialized industry.

Then there are things like images – how do you find interesting images for each and every blog post? You can subscribe to a stock image service, or better yet, have an intern or employee skilled in photography take a collection of shots of the office, your products, company employees, etc.

But perhaps one of the most difficult parts of maintaining a B2B blog is simply figuring out what to write about. B2C blog topics are generally easier to come up with because you can appeal to so many different people’s interests. B2B topics, however, generally cover a narrower, much more specific range.

So how do you beat that B2B writer’s block? One way is by checking out our list of foolproof B2B blog ideas below.</p>
              <p>If you have a party, conference, educational event, or charity fundraiser that’s either coming up or just recently happened, use your blog to showcase it.

If the event is already past, go image-heavy and post plenty of photos. If it hasn’t happened yet, use your blog to talk up the event and help promote it.</p>
              <ul>
                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section className="card-blog">
     <div className="container card-blog-cont ">
       <div className="row">
        {
         items.slice(0,count).map((item,i)=>{
         return(
          
               <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 b-card" data-aos="zoom-in-down">
               <div className="d-lg-flex card-body card-border" id="cardblog" key={item._id}>
               <div className="card-blog-div border-0 me-lg-4 mb-lg-0 mb-4" key={i} data-id={item._id}>
                   <div className="backgroundEffect"></div>
                   <div className="cardid"></div>
                  <div className="pic"><img src={item.coverImg} alt=""/> 
                       <div className="date">
                         <span className="day">{item.publishDate}</span>
                       </div>
                 </div>  
                    <div className="content">
                         <p className="h-1 mt-4 cardhead">
                            {isReadmorepara ? item.title.slice(0,25):item.title}
                          <span onClick={toggleHeadingreadmore} className="read-or-hide">
                          {isReadmorepara ? "..." : " "}
                          </span>
                        </p>
                        <p className="text-muted mt-3 card-para">
                            {isReadMore ? item.shortDes.slice(0,100) : item.shortDes}
                        <span className="read-or-hide">
                            {isReadMore ? "..." : " "}
                        </span>
                        </p> 
                       <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                           <div className="btn-readmore-blog">
                              <Link to={`/blogpage/`+item._id}>
                                <Button classNames="btnclear22" text="Read More" link={`/blogpage/`+item._id} fun={()=>scrollgoToplink()}>
                                </Button>
                              </Link>
                           </div>
                           <div className="d-flex align-items-center justify-content-center foot blog-admin-msg">
                               <p className="admin justify-content-center align-items-center">{item.author}</p>&nbsp;&nbsp;
                               <p className="ps-3 icon text-muted"><span className="fa fa-pencil pe-1"></span>{}</p>
                          </div>
                        </div> 
                   </div>
               </div>
               </div>
               </div> 
             )
           })
         }  
             <div className="col-12">   
              <div className="d-flex justify-content-center" style={{marginTop:'10px',marginBottom:'10px'}}>
                <Button classNames="allbtn-primary glow-on-hover text-light" fun={() =>{inc();}} text='Load More'></Button>
              </div>
            </div> 
            <div> 
            </div>
    </div>
    </div>
     </section>     
    </>
  );   
}; 
export default Blog;
   