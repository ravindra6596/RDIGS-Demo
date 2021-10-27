import React,{useState,useEffect} from "react";
import './Cookie.css';
import Button from "../ButtonGroup/Button/button";
import { Modal, ModalBody } from 'reactstrap';
import cookie_bite from '../../img/cookie-bite.svg';
const Cookie=()=>{
    // close model 
    const [showModal, setShowModal] = useState(false)
    // // small model for cookie
    const [showText, setShowText] = useState(false);
    const onClick = () => setShowText(true);
    // set time to show model
    useEffect(() => {
        const timeId = setTimeout(() => setShowModal(true),200000)
        return () => clearTimeout(timeId)
      },[]);
    return(
        <>
        <Modal className="modelcookie" isOpen={showModal} toggle={showModal}>  
            <section>
                <div class="gdprcookie">
                <span className="Cookiemodalclosebtn" onClick={() => setShowModal(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                    <div>
                    <img src={cookie_bite} class="cookie-img" alt="Cookie Image"/> Cookies &amp; Privacy Policy <img src={cookie_bite} class="cookie-img" alt="Cookie Image"/>
                    </div>
                    <p>We use cookies to personalize your experience and analyse web traffic. Learn more about 
                       our use of cookies in our &nbsp;
                    <a href="#" target="_blank" class="cookie-privacy">Privacy Policy</a>.</p>
                    {showText ? <List /> : null}
                    <div class="gdprcookie-buttons">
                    <button type="button" className="customizebtn glow-on-hover text-light" onClick={onClick}>Customize</button> 
                    <a href="#"><Button classNames="allbtn-primary glow-on-hover text-light" text="Accept All" data-aos="fade-left"></Button></a>
                    </div>
                </div>
            </section> 
           
        </Modal>
        </>
    )
}
const List = () =><div class="gdprcookie-types">
  <div class="gdpr-h2"></div>
      <ul>
        <li>
        <input type="checkbox" id="gdpr-cookietype-0" name="gdpr[]" value="essential" />
        <label for="gdpr-cookietype-0" title="These are cookies that are essential for the 
        website to work correctly.">Essential</label>
        </li>
        <li>
        <input type="checkbox" id="gdpr-cookietype-1" name="gdpr[]" value="preferences"/>
        <label for="gdpr-cookietype-1" title="These are cookies that are related to your site 
        preferences, e.g. remembering your username, site colours, etc.">Site Preferences</label>
        </li>
        <li>
        <input type="checkbox" id="gdpr-cookietype-2" name="gdpr[]" value="analytics" />
        <label for="gdpr-cookietype-2" title="Cookies related to site visits, browser types, 
        etc.">Analytics</label>
        </li>
        <li>
        <input type="checkbox" id="gdpr-cookietype-3" name="gdpr[]" value="marketing"/>
        <label for="gdpr-cookietype-3" title="Cookies related to marketing, e.g. newsletters, 
        social media, etc">Marketing</label>
        </li>
      </ul>
  </div> ;
export default Cookie;