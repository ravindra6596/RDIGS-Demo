import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Headerstyle.css";
import logoimg from "../../img/logo.png";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Linkedin from '../../img/socialicon/Linkdin.png';
import Facebook from '../../img/socialicon/Facebook.png';
import Youtube from '../../img/socialicon/Youtube.png';
import Insta from '../../img/socialicon/Insta.png';
import Cookie from "../Cookie/Cookie";

const Header = () => {
  //navbar scroll when active state
  const [navstage, setNavbar] = useState(false);
  // toggle social icon
  const [show, toggleShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 20) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  });

  // Social link click then toggle close functinality
  const [expanded, setExpanded] = useState(false);
  //Click toggle Header toggle icon will change 
  const [isClosetoggle, setClosetoggle] = useState(false);
  // Navigation tab click open on top functionality
  const scrollgoTop = () => {
    window.scrollTo({ top: 0 });
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
          expanded={expanded}>
          <Container>
            <Navbar.Brand style={{ textAlign: 'justify' }}>
              <img src={logoimg} className="headlogo" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <div className="forunderline">
                    <NavLink exact to="/home" className="maincolor" activeClassName="main-nav-active" onClick={() => { scrollgoTop(); setExpanded(false); }}>HOME</NavLink>
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
                              <Link to="/leadgeneration" onClick={() => { scrollgoTop(); setExpanded(false); }}>Lead Generation</Link>
                            </div>
                          </p>
                        </span>
                        <span className="blogmodelicon">
                          <i class="fa fa-laptop" aria-hidden="true"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/demandgeneration" onClick={() => { scrollgoTop(); setExpanded(false); }}>Demand Generation{" "} </Link>
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
                              <Link to="/teams" onClick={() => { scrollgoTop(); setExpanded(false); }}>Teams</Link>
                            </div>
                          </p>
                        </span>
                        <span className="blogmodelicon">
                          <i class="fa fa-laptop" aria-hidden="true"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/careers" onClick={() => { scrollgoTop(); setExpanded(false); }}>Careers</Link>
                            </div>
                          </p>
                        </span>
                        <span className="blogmodelicon">
                          <i class="fa fa-align-center"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/gallary" onClick={() => { scrollgoTop(); setExpanded(false); }}>Gallery</Link>
                            </div>
                          </p>
                        </span>
                        <span className="blogmodelicon">
                          <i class="fa fa-th" aria-hidden="true"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/companyprofile1" onClick={() => { scrollgoTop(); setExpanded(false); }}>Company Profile</Link>
                            </div>
                          </p>
                        </span>
                        <span className="blogmodelicon">
                          <i class="fa fa-th" aria-hidden="true"></i>
                          <p className="blogmodeltxt">
                            <div className="forunderline">
                              <Link to="/newslatter" onClick={() => { scrollgoTop(); setExpanded(false); }}>News Latter</Link>
                            </div>
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
               
                  <Nav.Link>
                  <div className="forunderline">
                    <NavLink exact to="/blog" className="maincolor" activeClassName="main-nav-active" onClick={() => { scrollgoTop(); setExpanded(false); }}>BLOG</NavLink>
                    </div>
                  </Nav.Link>
            
                <Nav.Link>
                  <div className="forunderline">
                    <NavLink exact to="/contact" className="maincolor" activeClassName="main-nav-active" onClick={() => { scrollgoTop(); setExpanded(false); }}>CONTACT</NavLink>
                  </div>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <Cookie />

      <div>
        <button className="socialicon-btn" onClick={() => toggleShow(!show)}>{show ? <Text /> : <i class="fa fa-angle-right" aria-hidden="true"></i>}<i class="fa fa-angle-left" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );

}
const Text = () => <section className="social-media-section">
  <aside id="custom_html-9" class="widget_text widget widget_custom_html">
    <div class="textwidget custom-html-widget" id="navbar">
      <div id="floating-social">
        <a class="a" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/rd-info-global-solutions/" rel="noopener">
          <img alt="linkedin" src={Linkedin} href="https://www.linkedin.com/company/rd-info-global-solutions/" className="socialimg-header" />
        </a>
        <a class="a" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/RDInfoGlobalSolutions/" rel="noopener">
          <img alt="facebook" src={Facebook} href="https://www.facebook.com/RDInfoGlobalSolutions/" className="socialimg-header" />
        </a>
        <a class="a" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCumgvf7v5Z8JGHoSDqGrVAw" rel="noopener">
          <img alt="twitter" src={Insta} href="https://www.youtube.com/channel/UCumgvf7v5Z8JGHoSDqGrVAw" className="socialimg-header" />
        </a>
        <a class="a" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCumgvf7v5Z8JGHoSDqGrVAw" rel="noopener">
          <img alt="instagram" src={Youtube} href="https://www.youtube.com/channel/UCumgvf7v5Z8JGHoSDqGrVAw" className="socialimg-header" />
        </a>
      </div>
    </div>
  </aside>
</section>
export default Header;


