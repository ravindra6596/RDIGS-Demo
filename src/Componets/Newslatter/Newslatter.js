import React, { useEffect, useState }  from "react";
import axios from "axios";
import { Modal, ModalBody } from 'reactstrap';
import Heading from '../Heading/Heading';
import './Newslatter.css';
import Button from "../ButtonGroup/Button/Button";
import newscardimage1 from '../../img/Newslatter/newscardimg1.jpg';
import newscardimage4 from '../../img/Newslatter/newscardimg2.jpg';
import newscardimage5 from '../../img/Newslatter/newscardsimg4.jpg';
import newsbanboximg1 from '../../img/Newslatter/newsbanboximg.jpg';
import newsgalimg1 from '../../img/Newslatter/newsgalimg1.jpg';
import { Link } from "react-router-dom";
const Newslatter =()=>{
  const [modal, setModal] = useState(false);

//Link Navigation tab click open on top functionality
const scrollgoToplinknews = () => {
  window.scrollTo({ top:0});
};
    const data = [
        {
            newsimg: newscardimage1,
            caralt: "Diverse img",
            para1: "What goes into the making of RD info global solutions?👻🎃",
            para2: "We love to work with people who are enthusiastic, creative and have a great learning attitude. And you fit the bill perfectly. It's great to have you with us.The",
            newslink1:"#squadghouls"
        },
        {
            newsimg: newscardimage5,
            caralt: "Team Hardwork img",        
            para1: "What goes into the making of RD info global solutions?👻🎃",
            para2: "We love to work with people who are enthusiastic, creative and have a great learning attitude. And you fit the bill perfectly. It's great to have you with us.The",
            newslink1:"#squadghouls"

        },
        {
            newsimg: newscardimage4,
            caralt: "career img",
            para1: "What goes into the making of RD info global solutions?👻🎃",
            para2: "We love to work with people who are enthusiastic, creative and have a great learning attitude. And you fit the bill perfectly. It's great to have you with us.The",
            newslink1:"#squadghouls"
        },
        {
            newsimg: newscardimage4,
            para1: "What goes into the making of RD info global solutions?👻🎃",
            para2: "We love to work with people who are enthusiastic, creative and have a great learning attitude. And you fit the bill perfectly. It's great to have you with us.The",
            newslink1:"#squadghouls"
        },
        {
            newsimg: newscardimage5,
            caralt: "Promotion img",
            para1: "What goes into the making of RD info global solutions?👻🎃",
            para2: "We love to work with people who are enthusiastic, creative and have a great learning attitude. And you fit the bill perfectly. It's great to have you with us.The",
            newslink1:"#squadghouls"
        },
    ];
    const newgaldata = [
      {
        newsgalimg: newsgalimg1,
        newsalt: "Promotion img",
        newsgalpara1: "Nice Lily",
        newsgalpara2:"Lily likes to play with crayons and pencils"
      },
      {
        newsgalimg: newsgalimg1,
        newsalt: "Promotion img",
        newsgalpara1: "Nice Lily",
        newsgalpara2:"Lily likes to play with crayons and pencils"
      },
      {
        newsgalimg: newsgalimg1,
        newsalt: "Promotion img",
        newsgalpara1: "Nice Lily",
        newsgalpara2:"Lily likes to play with crayons and pencils"
      },
      {
        newsgalimg: newsgalimg1,
        newsalt: "Promotion img",
        newsgalpara1: "Nice Lily",
        newsgalpara2:"Lily likes to play with crayons and pencils"
      },
      {
        newsgalimg: newsgalimg1,
        newsalt: "Promotion img",
        newsgalpara1: "Nice Lily",
        newsgalpara2:"Lily likes to play with crayons and pencils"
      },
      {
        newsgalimg: newsgalimg1,
        newsalt: "Promotion img",
        newsgalpara1: "Nice Lily",
        newsgalpara2:"Lily likes to play with crayons and pencils"
    }
  ];
  //Post API Logic 
  const [postemail,setPostemail]= useState("");
  const handleChange = (event) => {
    setPostemail({ email: event.target.value });
  }

 const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email:'' 
    };

    axios.post(`https://rdigs-api.herokuapp.com/newsletter`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  const handleReset = (e) => {
        console.log("reset");
        setPostemail('');  
  }
 

    return(
    <>
       {/* {/ NewsLatter Modal /} */}
      <Modal isOpen={modal} centered>
        <ModalBody className="homemodalbody">
          <span className="homemodalclosebtn" onClick={() => setModal(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
              <Heading h1Class="clientheadwe" spanClass="forRessubhead" title="To Get Latest News"/>
                <form onSubmit={handleSubmit}>
                {/* <div class="form-group">
                        <input className="newslattinputs" autocomplete="off" placeholder="Your Name" type="text" name="name"/>
                    </div> */}
                   
                    <div class="form-group">
                        <input onChange={handleChange}  id="email" value={data.email} className="newslattinputs" autocomplete="off" placeholder="Your Email" type="email" name="email"/>
                    </div>
                    {/* <div class="form-group">
                        <input className="newslattinputs"autocomplete="off" placeholder="Your Number" type="number" name="number"/>
                    </div> */}
              
                  <div style={{ display: 'flex'}}>
                    <input type="checkbox" checked style={{marginTop:'1%',paddingLeft:'2px'}}/>
                    <p style={{paddingLeft:'2%'}}>I agree to receive marketing & promotional emails by RD Info Global Solutions.Check our 
                    <Link to="/privacypolicy" onClick={scrollgoToplinknews}>Privacy Policy</Link> And <Link to="/termscondition" onClick={scrollgoToplinknews}>Terms and Codition.</Link></p>
                  </div>
                  <div style={{ textAlign: 'center'}}><Button fun={() => handleReset()} classNames="allbtn-primary glow-on-hover text-light" text="Submit"/></div>
                </form>
        </ModalBody>
      </Modal>

      {/* <!-- ======= Newslatter Banner Section ======= --> */}
        <div className="nav-contaniner"/>
          <section className="newssection">
                <div className="container">
                    <div className="row">
                        <span className="newsheadcom"><Heading h1Class="clientheadwe" title="NewsLatter"/></span>
                        <p className="headcomparg">At RDIGS, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                    </div>
                </div>
            </section>
          {/* <!-- ======= Newslatter Section 2 ======= --> */}
            <section>
              <div className="container newsbanbox" data-aos="fade-up">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <img className="img-fluid newssec2img" src={newsbanboximg1}/>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 newssec2col2" >
                    <h2 style={{color:'#30a6e9'}}>Beer,Biryani,tech Bytes:Snowflake</h2>
                    <span style={{color:'#7A7A7A'}}>2:00-3:30 IST</span>
                    <p style={{paddingRight:'10% '}}>Looking to gain new user skills, share best practices, and network with fellow Snowflake and Big Data enthusiasts? Join our upcoming Beer, Biryani, and [tech] Bytes Snowflake series as we dive into Snowflake – a cloud data warehousing company revolutionizing the way businesses see and use their data.</p>
                  </div>
                </div>
              </div>
            </section>
          {/* <!-- ======= Newslatter Gallery Section 3 ======= --> */}
          <section>
            <div className="container">
              <div className="row no-gutters" style={{marginTop:'5%'}}>
                {/* Using Map Function to access the data */}
                  {newgaldata.map((newgaldata) => (
                  <div className="col-lg-4 col-md-4 col-sm-4" data-aos="zoom-in-up">
                        <div class="newslattergrid">
                          <figure class="effect-lily">
                              <img src={newgaldata.newsgalimg} alt="img1"/>
                                <figcaption>
                                <div>
                                <h2>{newgaldata.newsgalpara1}</h2>
                                <p>{newgaldata.newsgalpara2}</p>
                                </div>
                                </figcaption>			
                          </figure>
                      </div>
                  </div>
                  ))}
              </div>
            </div>
          </section>

        {/* <!-- ======= Newslatter Section 4 ======= --> */}
        <section>
            <div className="container">
                <div className="row" style={{marginTop:'5%'}}  data-aos="zoom-in-down">
                {/* Using Map Function to access the data */}
                 {data.map((data) => (
                    <div className="col-lg-4 col-md-4 col-sm-6" style={{marginBottom:'5%'}}>
                        <div className="newscard">
                            <img className="img-fluid newslatimg" src={data.newsimg}/>
                                <div style={{textAlign:'justify',padding:'10%'}}>
                                    <p className="newscardpara2">{data.para1}</p>
                                    <p className="newscardpara2">{data.para2}</p>
                                    <Link to="/home"><p>{data.newslink1}</p></Link>
                                   <Button  fun={() => setModal(true)} classNames="allbtn-primary glow-on-hover text-light" text="Get NewsLatter"/>
                                </div>
                        </div>
                    </div>
                 ))}

                </div> 
            </div>
        </section> 
</>
)
}
export default Newslatter;

