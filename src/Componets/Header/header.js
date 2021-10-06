import React, { useState,useEffect  } from "react";
import './Headerstyle.css';
import logoimg from '../../img/logo.png';
import { Nav,Container,Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header =()=>{
 //navbar scroll when active state
 const [navstage, setNavbar] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
        if(window.scrollY >= 20){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    })
  })

    return(
    <>
        {/* Navbar coding */}
            <section className="fixed-top ">
            <Navbar className="mainnav"  collapseOnSelect expand="lg"  style={{backgroundColor: navstage ? "lightblue" :"transparent"}} >
            <Container>
            <Navbar.Brand><img src={logoimg} className="headlogo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link ><div className="forunderline"><Link to="/home">HOME</Link></div></Nav.Link>
                <div class="dropdown">
                <div className="forunderline"><Nav.Link><span >SERVICES</span></Nav.Link></div>
                    <div class="dropdown-content dropdownservice">
                        <div className="row">
                            <div className="col">
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-align-justify" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><div className="forunderline"><Link to="/leadgeneration">Lead Generation</Link></div></p>
                                </span>
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-laptop" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><div className="forunderline"><Link to="/demandgeneration">Demand Generation </Link></div></p>
                                </span>
                            </div>    
                        </div>
                    </div>
                    </div>

                <div class="dropdown">
                <div className="forunderline"> <Nav.Link><span >ABOUT</span></Nav.Link></div>
                    <div class="dropdown-content dropdownabout">
                        <div className="row">
                            <div className="col">
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-users" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><div className="forunderline"><Link to="/teams">Teams</Link></div></p>
                                </span>
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-laptop" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><div className="forunderline"><Link to="/careers">Careers</Link></div></p>
                                </span>
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-align-center"></i>
                                    <p className="blogmodeltxt"><div className="forunderline"><Link to="/gallary">Gallery</Link></div></p>
                                </span>
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-th" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><div className="forunderline"><Link to="/companyprofile1">Company Profile</Link></div></p>
                                </span>
                                <span className="blogmodelicon"> 
                                    <i class="fa fa-th" aria-hidden="true"></i>
                                    <p className="blogmodeltxt"><div className="forunderline"><Link to="#">News Latter</Link></div></p>
                                </span>
                            </div>
                           
                        </div>
                    </div>
                    </div>
                <div className="forunderline"> <Nav.Link><Link to="/blog">BLOG</Link></Nav.Link></div>
                <Nav.Link ><div className="forunderline"><Link to="/contact"> CONTACT</Link></div></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>   
        </section>
        <section>
            <aside id="custom_html-9" class="widget_text widget widget_custom_html">
            <div class="textwidget custom-html-widget">
                <div id="floating-social">
                    <Link target="_blank" to="https://www.linkedin.com/" rel="noopener">
                        <img alt="linkedin" src="https://3yghedxb20r3923my4c3z70e-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/linkedin-2.svg"/>
                    </Link>
                    <Link target="_blank" to="https://www.facebook.com/" rel="noopener">
                        <img alt="facebook" src="https://3yghedxb20r3923my4c3z70e-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/facebook-2.svg"/>
                    </Link>
                    <Link target="_blank" to="https://twitter.com/" rel="noopener">
                        <img alt="twitter" src="https://3yghedxb20r3923my4c3z70e-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/twitter-2.svg"/>
                    </Link>
                    <Link target="_blank" to="https://www.instagram.com/" rel="noopener">
                        <img alt="instagram" src="https://3yghedxb20r3923my4c3z70e-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/instagram-2.svg"/>
                    </Link>
                </div>
            </div>
            </aside>
        </section>    
    </>
)
}
export default Header;

