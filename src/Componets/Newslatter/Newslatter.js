import React, { useState }  from "react";
import { Modal, ModalBody } from 'reactstrap';
import './Newslatter.css';
import Button from "../ButtonGroup/Button/button";
import newscardimage1 from '../../img/Newslatter/newscardimg1.jpg';
import newscardimage2 from '../../img/Newslatter/newscardimg2.jpg';
import newscardimage3 from '../../img/Newslatter/newscardimg3.jpg';
import newscardimage4 from '../../img/Newslatter/newscardimg2.jpg';
import newscardimage5 from '../../img/Newslatter/newscardsimg4.jpg';
import { Link } from "react-router-dom";
const Newslatter =()=>{
  const [modal, setModal] = useState(false);
    
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
    return(
    <>


  {/* {/ Header Modals /} */}
  {/* <Modal isOpen={modal} centered>
        <ModalBody className="homemodalbody" >
          <span className="homemodalclosebtn" onClick={() => setModal(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                <h1>To Get Latest Updates</h1>
                <form>
                  <input placeholder="Enter your E-Mail Here " className="homemodalinput" />
                </form>
                <div style={{ display: 'flex', marginTop: '5px' }}>
                  <input type="checkbox" checked />
                  <p className="homemodalAgree">I agree to receive marketing & promotional emails by RD Info Global Solutions.Check our <span style={{ color: '#30a6e9' }}>Privacy Policy</span> And <span style={{ color: '#30a6e9' }}>Terms and Codition.</span> </p>
                </div>
                <div style={{ textAlign: 'center' }}><Button classNames="allbtn-primary glow-on-hover text-light" text="Submit" /></div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal> */}
        <div className="nav-contaniner"/>
        <section data-aos="fade-up">
            <div className="container">
                <div className="row" style={{margin:'3% 0px'}}>
                {/* Using Map Function to access the data */}
                 {data.map((data) => (
                    <div className="col-lg-4 col-md-4 col-sm-6" style={{marginBottom:'5%'}}>
                        <div className="newscard">
                            <img className="img-fluid newslatimg" src={data.newsimg}/>
                                <div style={{textAlign:'justify',padding:'10%'}}>
                                    <p>{data.para1}</p>
                                    <p>{data.para2}</p>
                                    <Link to="/home"><p>{data.newslink1}</p></Link>
                                </div>
                                <Button  fun={() => setModal(true)} classNames="allbtn-primary glow-on-hover text-light" text="Get NewsLatter"/>
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

