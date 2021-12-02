import React,{useEffect,useState} from "react";
import "./Blog.css";
import Button from '../ButtonGroup/Button/Button';
import aboutimg from '../../img/blog/aboutimg.jpg';
import bg from '../../video/bg.mp4';
import Banner1 from "../Banner1/Banner1";
import { Link} from 'react-router-dom';
const Blog = (props) => {
  const [items, setItems] = useState([]);
  const [isReadMore, setIsReadMore] = useState(true);
  const [isReadmorepara, setIsReadmorepara]=useState(true); 
  useEffect(()=>{

    fetch(`https://b2bnetworkservices.online/blogs/public`)
      .then((res) => res.json())
      .then((data) => setItems(data.blogs));
  }, []);

//scroll to top
  const scrollgoToplink = () => {
  const[count,setCount]=useState(3);
  const inc=()=>{
    setCount(count+3);

    console.log(setCount);
  }
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const toggleHeadingreadmore = () => {
    setIsReadmorepara(!isReadmorepara);
  }
  return (
    <>
      <div className="nav-contaniner"/>
<Banner1/>
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
              <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
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
   