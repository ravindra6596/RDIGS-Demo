import React from "react";
import "./CompanyProfile1.css";
import Heading from "../Heading/Heading";
import Tab from 'react-bootstrap/Tab';
import {Nav,Row,Col} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import about1 from '../../img/blog/about1.jpg';
import ourvision from '../../img/companyprofile/ourvision.jpg';
import ourmission from '../../img/companyprofile/ourmission.jpg';
import ourprincipal from '../../img/companyprofile/ourprincipal.jpg';
import avatarsm from '../../img/blog/avatar-sm.png';
const CompanyProfile1 = () => {
  // const[swiper, setSwiper]=usestate('');
 const Swiper=('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  })
  const userdata=[
    {
      heading:"VISSION",
      vmpimg:ourvision,
      vmppara:"To provide highest quality added services to our purchasers and delivering measurable results. individual customers.learn more."
    },
    {
      heading:"MISSION",
      vmpimg:ourmission,
      vmppara:"Our vision is to stay a foremost outsourcing company that gives our clients the simplest services at competitive costs."
    },
    {
      heading:"PRINCIPLE",
      vmpimg:ourprincipal,
      vmppara:"Client Value Creation, Integrity &amp; Transparency, Authenticity and Excellence are the core values of RD info Solutions."
    } 
  ]
  const blogdata=[
    {
      h3name:'Roland D’Costa',
      h4sub:'Ceo &amp; Founder',
      h4sub1:'Captain Of The Ship',
      slidep:'Roland D’Costa, a stellar entrepreneur and a result driven professional, having an incredible track record of building companies and growing pipeline and ultimately revenue. Roland provides strategic leadership and management direction to RDIGS, he is young, dynamic, and an oracle for all technical solutions, and believes in investing his energy in continuous growth for the customer businesses and beneficiaries.'
    },
    {
      h3name:'Ajay Rawat',
      h4sub:'Chief Operating Officer',
      h4sub1:'The Superman',
      slidep:'Best known for his operations, client management and customer service work. Ajay is the superman of our team. He handles the entire RDIGS operations. He has adapted the operational techniques and methodologies that allow RDIGS to excel in performance and gather appreciation from our clients. '
    },
    {
      h3name:'William Mathurai',
      h4sub:'Chif Revenue Officer',
      h4sub1:'The Superman',
      slidep:'Best known for his operations, client management and customer service work. Ajay is the superman of our team. He handles the entire RDIGS operations. He has adapted the operational techniques and methodologies that allow RDIGS to excel in performance and gather appreciation from our clients. '
    }
  ]
  return (
    <>
      <div className="nav-contaniner" />
            <section className="companyprofilesection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%',color:'white'}}>
                            <Heading h1Class="clientheadwe" title="Company Profile"/>
                            <p style={{color:'white'}}> we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                     </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row gx-0">
                <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                  <div className="content">
                    <h3>Who We Are</h3>
                    <h2>Leadtronics Employee</h2>
                    <p>
                      Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                  <img src={about1} className="img-fluid about1img" alt=""/>
                </div>
              </div>
            </div>
            </section>
            <section className="vision-mission-principal">
              <div className="container">
                <div className="row vision-mission-principle-row">
                  {
                 userdata.map((data,i)=>{
                   return(
                    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="vision-title">
                      <h4 className="heading-vmp">{data.heading}</h4>
                    </div>
                   <div className="vision-div">
                   <p className="company-vmp">{data.vmppara}</p>
                  </div>
                  </div>
                   )
                 })
                }
                </div>
              </div>
            </section>
            <section>
   {/* ========================== */}
   <section id="testimonials" className="testimonials">
      <div className="container" data-aos="zoom-in">
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
      {
      blogdata.map((blog,i)=>{
        return( 
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 swiper">
        <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={avatarsm} className="testimonial-img" alt=""/>
                <h3>{blog.h3name}</h3>
                <h4>{blog.h4sub}</h4>
                <h4>{blog.h4sub1}</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                   {blog.slidep} 
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p> 
              </div>
            </div>
          </div>
        </div>
        </div>  
           )
          })
        }
       </Carousel> 
      </div>  
    </section>
  {/* team testimonial slider */}
            {/* <div className="blog-slider">
            <div className="blog-slider__wrp swiper-wrapper">
              <div className="blog-slider__item swiper-slide">
                <div className="blog-slider__img">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt=""/>
                </div>
                <div className="blog-slider__content">
                  <div className="blog-slider__title">{}</div>
                  <div className="blog-slider__text">{}</div>
                </div>
              </div>
            </div>
            <div className="blog-slider__pagination"></div>
          </div>  */}
            </section>
              <section className="company-choose-section">
                <div className="container">
                <div className="row">
                  <div className="col-12">
                    <Heading h1Class="clientheadwe" title="WHY WE CHOOSE US"></Heading>
                    <p>Choosing a solutions provider that understands your business’ needs can feel overwhelming; we’re here to tell you that it doesn’t have to be.</p>
                  </div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={4} className="six-reason-col">
                      <Nav variant="pills" className="flex-column">
                        <div className="reason-compprofile">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Global Team</Nav.Link>
                        </Nav.Item>
                        </div>
                        <div className="reason-compprofile">
                        <Nav.Item>
                          <Nav.Link eventKey="second">Suite of Solutions</Nav.Link>
                        </Nav.Item>
                        </div>
                        <div className="reason-compprofile">
                       <Nav.Item>
                          <Nav.Link eventKey="third">Agile Delivery</Nav.Link>
                        </Nav.Item>
                        </div>
                        <div className="reason-compprofile">
                        <Nav.Item>
                          <Nav.Link eventKey="four">Scaled Pricing</Nav.Link>
                        </Nav.Item>
                        </div>
                        <div className="reason-compprofile">
                        <Nav.Item>
                          <Nav.Link eventKey="five">Team Collaboration</Nav.Link>
                        </Nav.Item>
                        </div>
                        <div className="reason-compprofile">
                        <Nav.Item>
                          <Nav.Link eventKey="six">Integrated Knowledge</Nav.Link>
                        </Nav.Item>
                        </div>
                      </Nav>
                    </Col>
                    <Col sm={8} className="six-reason-img">
                      <Tab.Content className="tab-divfor-img">
                        <Tab.Pane eventKey="first">
                          <div className="first-div">
                            <Heading h1Class="clientheadwe" title="Global Team"></Heading>
                            <p className="text-light p-3">
                              With over 700+ certified and trained professionals, Apisero designs custom-built solutions for mid-market, enterprise, and strategic customers across the globe.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div className="second-div">
                            <Heading h1Class="clientheadwe" title="Suite of Solutions"></Heading>
                            <p className="text-light p-3">
                              Apisero develops tailored solutions that fit your organization’s goals. From Architecture and Implementation to Managed Services, Data Migration, Advisory Services, and more, we’ve got you covered.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <div className="three-div">
                            <Heading h1Class="clientheadwe" title="Agile Delivery"></Heading>
                            <p className="text-light p-3">
                            Your company needs a solution, and you need it as quickly and efficiently as possible. That’s why we offer quick ramp-up and down times to ensure you’re optimizing your business as soon as you can.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="four">
                          <div className="four-div">
                            <Heading h1Class="clientheadwe" title="Scaled Pricing"></Heading>
                            <p className="text-light p-3">
                            Your partnership matters to us. That’s why Apisero works with each customer to define a custom engagement and pricing model that suits your business’ unique needs.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="five">
                          <div className="five-div">
                            <Heading h1Class="clientheadwe" title="Team Collaboration"></Heading>
                            <p className="text-light p-3">
                            We know change can be scary, but with us, it doesn’t have to be. We’ll work closely with your internal teams to ensure they’re trained, enabled, and ready for action.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="six">
                          <div className="six-div">
                            <Heading h1Class="clientheadwe" title="Integrated Knowledge"></Heading>
                            <p className="text-light p-5">
                            Leveraging our extensive industry and platform know-how, Apisero offers customers specialized services that empower their business to capitalize on investments faster than ever before.
                            </p>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
              </div>
              </section> 
            
      
    </>
  );
};
export default CompanyProfile1;
