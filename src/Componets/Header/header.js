import React, { useState, useEffect } from "react";
import "./Headerstyle.css";
import logoimg from "../../img/logo.png";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Linkedin from '../../img/socialicon/Linkdin.png';
import Facebook from '../../img/socialicon/Facebook.png';
import Youtube from '../../img/socialicon/Youtube.png';
import Insta from '../../img/socialicon/Insta.png';
const Header = () => {

//navbar scroll when active state
  const [navstage, setNavbar] = useState(false);
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 20) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  });

// Navigation tab click open on top functionality
const scrollgoTop = () => {
  window.scrollTo({ top:0});
};

  return (
    <>
      {/* Navbar coding */}
      <section className="fixed-top ">
        <Navbar
          className="mainnav"
          collapseOnSelect
          expand="lg"
          style={{ backgroundColor: navstage ? "lightblue" : "transparent" }}
          >
          <Container>
            <Navbar.Brand>
              <img src={logoimg} className="headlogo" alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <div className="forunderline">
                    <Link to="/home" onClick={scrollgoTop}>HOME</Link>
                  </div>
                </Nav.Link>
                <div class="dropdown">
                  <div className="forunderline">
                    <Nav.Link >
                      <span>SERVICES</span>
                    </Nav.Link>
                  </div>
                  <div class="dropdown-content dropdownservice">
                    <div className="row">
                      <div className="col">
                        <span className="blogmodelicon">
                          <i class="fa fa-align-justify" aria-hidden="true"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/leadgeneration" onClick={scrollgoTop}>Lead Generation</Link>
                            </div>
                          </p>
                        </span>
                        <span className="blogmodelicon">
                          <i class="fa fa-laptop" aria-hidden="true"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/demandgeneration" onClick={scrollgoTop}>
                                Demand Generation{" "}
                              </Link>
                            </div>
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="dropdown">
                  <div className="forunderline">
                    {" "}
                    <Nav.Link>
                      <span>ABOUT</span>
                    </Nav.Link>
                  </div>
                  <div class="dropdown-content dropdownabout">
                    <div className="row">
                      <div className="col">
                        <span className="blogmodelicon">
                          <i class="fa fa-users" aria-hidden="true"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/teams" onClick={scrollgoTop}>Teams</Link>
                            </div>
                          </p>
                        </span>
                        <span className="blogmodelicon">
                          <i class="fa fa-laptop" aria-hidden="true"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/careers" onClick={scrollgoTop}>Careers</Link>
                            </div>
                          </p>
                        </span>
                        <span className="blogmodelicon">
                          <i class="fa fa-align-center"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/gallary" onClick={scrollgoTop}>Gallery</Link>
                            </div>
                          </p>
                        </span>
                        <span className="blogmodelicon">
                          <i class="fa fa-th" aria-hidden="true"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/companyprofile1" onClick={scrollgoTop}>Company Profile</Link>
                            </div>
                          </p>
                        </span>
                        <span className="blogmodelicon">
                          <i class="fa fa-th" aria-hidden="true"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="#" onClick={scrollgoTop}>News Latter</Link>
                            </div>
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="forunderline">
                  {" "}
                  <Nav.Link>
                    <Link to="/blog" onClick={scrollgoTop}>BLOG</Link>
                  </Nav.Link>
                </div>
                <Nav.Link>
                  <div className="forunderline">
                    <Link to="/contact" onClick={scrollgoTop}> CONTACT</Link>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <div className="socialicon-div">
        <button className="socialicon-btn" onClick={onClick}><i class="fa fa-angle-left" aria-hidden="true"></i>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </button>
           {showText ? <Text /> : null}
         </div>
    </>
  ); 
}
 const Text = () =><section className="social-media-section">
 <aside id="custom_html-9" class="widget_text widget widget_custom_html">
 <div class="textwidget custom-html-widget" id="navbar">
   <div id="floating-social">
     <a class="a" target="_blank" href="https://www.linkedin.com/company/rd-info-global-solutions/" rel="noopener">
       <img alt="linkedin" src={Linkedin} href="https://www.linkedin.com/company/rd-info-global-solutions/" className="socialimg-header"/>
     </a>
     <a class="a" target="_blank" href="https://www.facebook.com/RDInfoGlobalSolutions/" rel="noopener">
       <img alt="facebook" src={Facebook} href="https://www.facebook.com/RDInfoGlobalSolutions/" className="socialimg-header"/>
     </a>
     <a class="a" target="_blank" href="https://www.youtube.com/channel/UCumgvf7v5Z8JGHoSDqGrVAw" rel="noopener">
       <img alt="twitter"src={Insta} href="https://www.youtube.com/channel/UCumgvf7v5Z8JGHoSDqGrVAw" className="socialimg-header"/>
     </a>
     <a class="a" target="_blank" href="https://www.youtube.com/channel/UCumgvf7v5Z8JGHoSDqGrVAw" rel="noopener">
       <img alt="instagram" src={Youtube} href="https://www.youtube.com/channel/UCumgvf7v5Z8JGHoSDqGrVAw" className="socialimg-header"/>
     </a>
   </div>
 </div>
</aside>
</section>
export default Header;
