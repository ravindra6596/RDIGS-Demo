import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './DemandGeneration.css';
import Button from '../ButtonGroup/Button/Button';
import demad2 from '../../img/services/demand1.png';
import goal from '../../img/services/goal.png';
import paidsearch from '../../img/services/paidsearch.png';
import headset from '../../img/services/headset.png';
import s1 from '../../img/services/digital-marketing-3.png';
import min from '../../img/services/min.jpg';
import Heading from '../Heading/Heading';
import {Modal, ModalBody} from 'reactstrap';
import d from '../../img/services/vissionimg.jpg';
import axios from 'axios';
const DemandGeneration=()=>{
    // modal
    const [modaldemand, setModaldemand] = useState(false);
    const toggledemand = () => setModaldemand(!modaldemand);
    //Link click open on top functionality
    const scrollgoTop = () => {
        window.scrollTo({ top: 0 });
    };
    // Api calling for form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data)=> {
          axios.post('https://rdigs-api.herokuapp.com/services',data)
          .then((response) => {
              console.log(response.data);
             console.log(response);
             reset();
          })
      }
    const servicecard=[
        {
            serviceimgicon:s1,
            serviceinnerh1:"Account Based Marketing",
            serviceinnerpara:"Reach a huge area of users and get a publicty of your product and service ",
            serviceinnerspan:"video",
            serviceinnerpara1:"solution.",
            Accountbaselinks:'/accountbasemarketing',

        },
        {
            serviceimgicon:s1,
            serviceinnerh1:"Marketing Qualified Leads",
            serviceinnerpara:"Email Marketing is a great solution to reach a",
            serviceinnerspan:"high range of customers",
            serviceinnerpara1:"service.",
            Accountbaselinks:'/marketingqualiLeads',
        },
        {
            serviceimgicon:s1,
            serviceinnerh1:"Content Syndication",
            serviceinnerpara:"we provide wide range of",
            serviceinnerspan:"seo service",
            serviceinnerpara1:"to make your site at top to reach your target",
            Accountbaselinks:'/contentsyndication',
        }

    ];
   const idservice2=[
       {
            s2img:goal,
            s2h4:"Best",
            s2h4para:"Analytics Audits",
            s2para:"We have had the pleasure of partnering with a wide array of brands ranging from tech startups to Fortune 500 enterprises."
       },
       {
           s2img:paidsearch,
           s2h4:"Deep",
           s2h4para:"Technical SEO",
           s2para:"Over the last decade, we have had the pleasure of partnering with a wide array of brands ranging enterprises."
       },
       {
           s2img:headset,
           s2h4:"Modern",
           s2h4para:"Keyword Analysis",
           s2para:"Over the last decade a wide array of brands ranging from tech startups to Fortune 500 enterprises."
       }
   ];
    return(
        <>
      <div className="nav-contaniner"/>
        <section className="Demand-Generation-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe"  title="Demand Generation"/>
                            <p style={{color:'white'}}data-aos="fade-right"> Focus On The Accounts That Matters The Most</p>
                            <p style={{color:'white'}}data-aos="fade-right">ABM perfectly aligns marketing and sales department to derive greatest benefits and revenues. ABM targets accounts and nurture them based on content, relevant communications and contextual marketing</p>
                     </div>
                    </div>
                </div>
        </section>
        <section className="Demand-Generation-Sec">
            <div className="container">     
                    <div className="d-flex justify-content-center heading-demand">
                       <Heading  h1Class="clientheadwe" title="Demand Generation"></Heading>
                    </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 Demand-text-col">
                        <div className="Demand-title aos-init aos-animate" data-aos="fade-right">
                            <h4 className="Demand-subhead" data-aos="fade-down">Create. Publish. Syndicate.</h4>
                            <p className="Demand-right" data-aos="fade-down">  
                             Your strategy for content marketing should include business objectives along with audience 
                             targeting and running native ads. We can help you increase the number of viewers on your website
                              as well as your reputation by syndicating content.
                            </p>
                            <div className="Drive-Excess-Conversion-demand">
                               <Button classNames="allbtn-primary glow-on-hover text-light Drive-Excess-Conversion" text="Reach Customers Across the web" data-aos="fade-left"
                               onClick={toggledemand} fun={()=>setModaldemand(true)}></Button>
                            </div>
                        </div>
                    </div>
                    <div className="demand-form">
                    <Modal centered isOpen={modaldemand} className="modal-dialog" toggle={toggledemand}>
                            <ModalBody>
                                <span  className="demandmodalclosebtn" onClick={() => setModaldemand(false)}  ><i className="fa fa-times-circle" aria-hidden="true"></i></span>
                                <div className="container"> 
                                <div className="row">
                                 <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <img src={d} className="demand-form-img" alt=""></img>
                                 </div>
                                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div className="form-backimg">
                                        <form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-demand">
                                                <i className="fa fa-user"></i>
                                                    <input type="text" {...register("name",{ required: "Please enter your name." })} className="demand-input"  placeholder="Your Name" minLength="9" maxLength="20" required autocomplete="off"></input>
                                            </div>
                                            <div className="form-demand">
                                                <i className="fa fa-phone"></i>
                                                <input type="number" {...register("contact",{ required: "Please enter your contact." })} className="demand-input" id="Pnumber" placeholder="Phone Number" minLength="10" maxLength="12" required ></input>
                                            </div>
                                            <div className="form-demand">
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                <input type="email" {...register("email",{ required: "Please enter your email." })} className="demand-input" id="Email" placeholder="Your Email" autocomplete="off"  required></input>
                                            </div>
                                            <div className="form-demand">
                                                <i className="fa fa-address-book" aria-hidden="true"></i>
                                                <input type="text" {...register("company_name",{ required: "Please enter your conpamy name." })} className="demand-input" id="" placeholder="Company Name" autocomplete="off"  required></input>
                                            </div> 
                                            <div className="d-flex justify-content-center" style={{marginTop:'10px'}}>
                                                <Button text="Submit" type="submit" classNames="allbtn-primary glow-on-hover text-light"></Button>
                                            </div>                
                                        </form>
                                        </div>
                                        </div>    
                                    </div> 
                            </div>
                             </ModalBody>
                        </Modal>  
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 Demand-img-col">
                        <div className="text-center lg-img aos-init aos-animate" data-aos="fade-left">
                            <img src={demad2} alt="Demand Generation" className="Demand-img1" data-aos="fade-down"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="service-2" className="section-padding11 pb-5">
            <div className="container">
                <div className="row">
                    {
                    idservice2.map((data)=>{
                        return(
                            <div className="col-xs-6 col-sm-12 col-md-4 col-lg-4 col-xl-4 service-box-2-col">
                                <div className="service-box-2 mb-5">
                                    <img className="demand-goal" src={data.s2img} alt="demand-goal"></img>
                                        <div className="demand-iconpara">
                                            <h4 className="">{data.s2h4}<br></br>{data.s2h4para}</h4>
                                            <p className="mb-0">{data.s2para}</p>
                                        </div>
                                </div>
                            </div>
                        )
                    }) 
                    }    
                </div>
            </div>
    </section>
      <section className="section-ser pt-0">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-5 mb-lg-0">
                        <div className="demand-img-outer">
                          <img src={min} alt="feature bg" className="img-fluid demand-imgleft"/>
                        </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-4">
                    <div className="mb-5">
                    <div className="d-flex justify-content-center">
                        <Heading  h1Class="clientheadwe" title="Reach your Target Audience"></Heading>
                    </div>
                    <p>
                    We run account-based marketing (ABM) campaigns for targeting the accounts by professional demographics to drive more conversions. 
                    We generate target accounts and nurture them based on content, relevant communications and contextual marketing.
                    </p>
                    </div>
                </div>
                </div>
            </div>
      </section>
      <section id="service-head" className="service-style-two">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-12 m-auto">
                <div className="heading text-white text-center">
                    <div className="d-flex justify-content-center">
                      <Heading h1Class="clientheadwe" title="Servicess Demand Generation"></Heading>
                    </div>
                <p >We’re full service which means we’ve got you covered on design &amp; content right through to digital. You’ll form a lasting relationship with us.</p>
                </div>
            </div>
            </div>
        </div>
       </section>
<section id="service">
  <div className="container">
    <div className="row">
    {
            servicecard.map((user,index)=>{
                return(
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
                        <div className="service-box">
                            <div className="service-img-icon">
                            <img src={user.serviceimgicon} alt="service-icon" className="img-fluid"/>
                            </div>
                            <div className="service-inner">
                                <h4>{user.serviceinnerh1}</h4>
                                <p className="text-card-demand">{user.serviceinnerpara}&nbsp;<span>{user.serviceinnerspan}</span>&nbsp;{user.serviceinnerpara1}</p>
                            </div>
                            <div className="justify-content-center align-items-center">
                                <Link to={user.Accountbaselinks} style={{textDecoration:'none'}} fun={() =>scrollgoTop()}>
                                   <Button classNames="btnclear22" text="Readmore"/> 
                                </Link> 
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
    )

}
export default DemandGeneration;