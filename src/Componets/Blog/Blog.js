import React,{useEffect,useState} from "react";
import "./Blog.css";
import axios from 'axios';
import Button from '../ButtonGroup/Button/Button';
import cardimg2 from "../../img/blog/cardimg2.jpg";
import aboutimg from '../../img/blog/aboutimg.jpg';
import bg from '../../video/bg.mp4';
const Blog = () => {
  const [items, setItems] = useState([]);
  const[visible,setVisible]=useState(3);
  const [isReadMore, setIsReadMore] = useState(true);
  // useEffect(() => {   
  // axios.get(`https://b2bnetworkservices.online/blogs/public`)
  //             .then(res => {
  //               setData(res.data.blogs);
  //               console.log(Data);
  //             });
  //           }, []);
  useEffect(()=>{
    fetch('https://b2bnetworkservices.online/blogs/public')
    .then((res)=>res.json())
    .then((data)=>setItems(data.blogs));
  },[]);
  const showMoreItems=()=>{
    setVisible((prevValue)=>prevValue + 3);
  };
  const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
     };
 
  // ==================
//  const[visible,setVisible]=useState(3);
//  const showMoreItems =()=>{
//    setVisible((prevValue)=>prevValue + 3);
//  };



  // const carddata=[
  //   {
  //     cardpic:cardimg2,
  //     cardday:"26",
  //     cardmonth:"June",
  //     cardyear:"2021",
  //     cardhead:"Finance And Legal Working Streams Occur Throughout",
  //     cardpara:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  //   },
  //    {
  //     cardpic:cardimg2,
  //     cardday:"26",
  //     cardmonth:"June",
  //     cardyear:"2021",
  //     cardhead:"Finance And Legal Working Streams Occur Throughout",
  //     cardpara:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  //   },
  //   {
  //     cardpic:cardimg2,
  //     cardday:"26",
  //     cardmonth:"June",
  //     cardyear:"2021",
  //     cardhead:"Finance And Legal Working Streams Occur Throughout",
  //     cardpara:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  //   },
  //   {
  //     cardpic:cardimg2,
  //     cardday:"26",
  //     cardmonth:"June",
  //     cardyear:"2021",
  //     cardhead:"Finance And Legal Working Streams Occur Throughout",
  //     cardpara:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  //   },
  //   {
  //     cardpic:cardimg2,
  //     cardday:"26",
  //     cardmonth:"June",
  //     cardyear:"2021",
  //     cardhead:"Finance And Legal Working Streams Occur Throughout",
  //     cardpara:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  //   },
  //   {
  //     cardpic:cardimg2,
  //     cardday:"26",
  //     cardmonth:"June",
  //     cardyear:"2021",
  //     cardhead:"Finance And Legal Working Streams Occur Throughout",
  //     cardpara:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  //   }
  // ];


  return (
    <>
      <div className="nav-contaniner"/>
      {/* <section className="Blogsection">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ marginTop:'10%'}}>
                            <Heading  h1className="clientheadwe" title="Blog"/>
                            <p style={{ color:'white'}}>At RDIGS, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                        </div>
                    </div>
                </div>
      </section>  */}
{/* ===================================================== */}
<video className="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src={bg} type="video/mp4" /></video>
        <div className="heading-banner-blog text-light">
          <h2>RD Info Global Solution</h2>
        </div>
        <div className="masthead">
        </div>

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
         items.slice(0,visible).map((item)=>{
          // Data.map((data,i)=>{
         return(
               <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 b-card" data-aos="zoom-in-down">
               <div className="d-lg-flex card-body card-border">
               <div className="card-blog-div border-0 me-lg-4 mb-lg-0 mb-4">
                   <div className="backgroundEffect"></div>
                  <div className="pic"><img src={item.coverImg} alt=""/> 
                       <div className="date"><span className="day">{item.publishDate}</span>
                       {/* <span className="month">{data.cardmonth}</span>
                        <span className="year">{data.cardyear}</span>  */}
                         </div>
                 </div>  
                    <div className="content">
                   
                       <p className="h-1 mt-4 cardhead">{item.title}</p>
                        <p className="text-muted mt-3 card-para">
                            {isReadMore ? item.shortDes.slice(0,80) : item.shortDes}
                        <span onClick={toggleReadMore} className="read-or-hide">
                            {isReadMore ? "...read more" : " show less"}
                        </span>
                        </p> 
                       <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                          <a className="blog-single-page-link" href="/blogpage">
                           <Button classNames="btnclear22" text="Read More">
                           </Button></a>
                           <div className="d-flex align-items-center justify-content-center foot blog-admin-msg">
                               <p className="admin">{item.author}</p>&nbsp;&nbsp;
                               <p className="ps-3 icon text-muted"><span className="fa fa-comment pe-1"></span>{}</p>
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
              <Button text="Load More" classNames="allbtn-primary glow-on-hover text-light" id="loadMore" onClick={showMoreItems}></Button> 
              </div>
            </div>
    </div>
    </div>
     </section>
  {/* team testimonial slider */}      
    </>
  );   
};
// 

 
export default Blog;
