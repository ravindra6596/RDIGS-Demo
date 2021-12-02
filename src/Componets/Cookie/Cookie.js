import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import './Cookie.css';
import Button from "../ButtonGroup/Button/Button";
import { Modal } from 'reactstrap';
import cookiebite from '../../img/cookiebite.svg';
import { Link } from "react-router-dom";
const Cookie = () => {
// close model 
    const [showModal, setShowModal] = useState(false);
//Link Navigation tab click open on top functionality
  const scrollgoToplinknews = () => {
    window.scrollTo({ top:0});
  };
// set time to show model
    useEffect(() => {
        const timeId = setTimeout(() => setShowModal(true), 2000);
        return () => clearTimeout(timeId)
    }, []);
//cookie 
  const [show, setShow] = useState(true);
  const [list, showList] = useState(false);
  const [preferences,setPreferences]=useState(true);
  const [analytics,setAnalytics]=useState(true);
  const [marketing,setMarketing]=useState(true);
  
  const cookies = new Cookies();
  useEffect(() => {
    let name = cookies.get('name');
    if (name === "Essential") {
        setShow(false)
    }
    else {
        setShow(true)
    }
}, []);
const handleset=()=>{
    const d=new Date();
    d.setTime(d.getTime() + (5*10000))
    if(preferences)
    {
        cookies.set('preferences', 'preferences', { path: '/',expires : d});
    }
    if(analytics)
    {
        cookies.set('analytics', 'analytics', { path: '/',expires : d});
    }
    if(marketing)
    {
        cookies.set('marketing', 'marketing', { path: '/',expires : d});
    }
    else{
        cookies.set('essential','essential', {path:'/', expires : d});
        setShow(false)
    }
}
    return (
        <>
            <section className="cookiesection" style={{ display: !show ? 'none' : '' }}>
               <div className="container">
                <div className="row">
                    <div className="cookiemodal-div" style={{'border-radius':'30px' }}>
                    <Modal className="modelcookie" isOpen={showModal} toggle={showModal} data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                        <div class="gdprcookie">
                            <span className="Cookiemodalclosebtn" onClick={() => setShowModal(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                            <div>
                                <img src={cookiebite} class="cookie-img" alt="Cookie_Image" alt=""/> Cookies &amp; Privacy Policy
                            </div>
                            <p>We use cookies to personalize your experience and analyse web traffic. Learn more about
                                our use of cookies in our &nbsp;
                                <Link to="/Privacypolicy" onClick={scrollgoToplinknews} class="cookie-privacy">Privacy Policy</Link>.
                            </p>
                            <div class="gdprcookie-types" style={{display:list ? "block":'none'}}>
                                <div class="gdpr-h2"></div>
                                <form name="cookieform">
                                    <ul id="cookielist">
                                        <li>
                                            <input type="checkbox" id="gdpr_cookietype_0" name="essential" value="essential" checked/>
                                            <label for="gdpr-cookietype-0" title="These are cookies that are essential for the 
                                            website to work correctly.">Essential</label>
                                        </li>
                                        <li> 
                                            <input type="checkbox" id="gdpr_cookietype_1" name="preferences" value="preferences" defaultChecked onChange={() =>setPreferences(false)} /> 
                                            <label for="gdpr-cookietype-1" title="These are cookies that are related to your site 
                                        preferences, e.g. remembering your username, site colours, etc.">Site Preferences</label>
                                        </li>       
                                        <li>
                                            <input type="checkbox" id="gdpr_cookietype_2" name="analytics" value="analytics" defaultChecked onChange={() =>setAnalytics(false)}/>
                                            <label for="gdpr-cookietype-2" title="Cookies related to site visits, browser types, 
                                        etc.">Analytics</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="gdpr_cookietype_3" name="marketing" value="marketing" defaultChecked onChange={() =>setMarketing(false)}/>
                                            <label for="gdpr-cookietype-3" title="Cookies related to marketing, e.g. newsletters, 
                                        social media, etc">Marketing</label>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div class="gdprcookie-buttons">
                                <Button type="button" value="SetCookies" name="set" classNames="btnclear22 btn-customise" fun={() => {list ? showList(false) : showList(true)}} text="Customize"/>
                                <span onClick={() =>{setShowModal(false);}}> 
                                <Button value="GetCookies" name="get" classNames="allbtn-primary glow-on-hover text-light" text="Accept All" data-aos="fade-left" fun={()=>handleset()}/></span>
                            </div>
                        </div>  
                    </Modal>
                    </div>
                </div>
               </div>
            </section>
        </>
    )
}
export default Cookie;
