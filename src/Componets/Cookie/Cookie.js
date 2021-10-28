import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import {useCookies} from 'react-cookie';
import Cookies from 'universal-cookie';
import { strict } from 'assert';
import './Cookie.css';
import Button from "../ButtonGroup/Button/button";
import { Modal, ModalBody } from 'reactstrap';
import cookie_bite from '../../img/cookie-bite.svg';
const Cookie = () => {
    // close model 
    const [showModal, setShowModal] = useState(false)
    // // small model for cookie
    const [showText, setShowText] = useState(false);
    const onList = () => setShowText(true);
    // set time to show model
    useEffect(() => {
        const timeId = setTimeout(() => setShowModal(true), 200000);
        return () => clearTimeout(timeId)
    }, []);
    //   Cookie store
    const cookies = new Cookies();
    const createCookie = () => {
        cookies.set('myCat', 'Pacman', { path: '/' });
        console.log(cookies.get('myCat'));
        cookies.set('essential', 'essential', { path: '/' });
        cookies.set('preferences', 'preferences', { path: '/' });
        cookies.set('analytics', 'analytics', { path: '/' });
        cookies.set('marketing', 'marketing', { path: '/' });
    }
    // , sameSize:strict, expires : new Date(new Date().getTime() + 3 * 1000), httpOnly:true
    const readCookie = () => {
        cookies.get('essential');
        cookies.get('preferences');
        cookies.get('analytics');
        cookies.get('marketing');
    }
    return (
        <>
            <section className="cookiesection">
                <Modal className="modelcookie" isOpen={showModal} toggle={showModal} data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                    <div class="gdprcookie">
                        <span className="Cookiemodalclosebtn" onClick={() => setShowModal(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                        <div>
                            <img src={cookie_bite} class="cookie-img" alt="Cookie Image" /> Cookies &amp; Privacy Policy <img src={cookie_bite} class="cookie-img" alt="Cookie Image" />
                        </div>
                        <p>We use cookies to personalize your experience and analyse web traffic. Learn more about
                            our use of cookies in our &nbsp;
                            <a href="#" target="_blank" class="cookie-privacy">Privacy Policy</a>.</p>
                        {showText ? <List /> : null}
                        <div class="gdprcookie-buttons">
                            <button type="button" value="SetCookies" name="set" className="customizebtn text-light" onClick={() => { onList(); createCookie(); }} >Customize</button>
                            <span onClick={() => { readCookie(); setShowModal(false); }}> <Button value="GetCookies" name="get" classNames="allbtn-primary glow-on-hover text-light" text="Accept All" data-aos="fade-left" onClick={() => { readCookie(); setShowModal(false); }}></Button></span>
                        </div>
                    </div>
                </Modal>
            </section>
        </>
    )
}
const List = () => <div class="gdprcookie-types">
    <div class="gdpr-h2"></div>
    <form name="cookieform">
        <ul id="cookielist">
            <li>
                <input type="checkbox" id="gdpr_cookietype_0" name="essential" value="essential" checked/>
                {/* onChange={(e) => setEssential(e.target.value)} */}
                <label for="gdpr-cookietype-0" title="These are cookies that are essential for the 
        website to work correctly.">Essential</label>
            </li>
            <li>
                <input type="checkbox" id="gdpr_cookietype_1" name="preferences" />
                {/* onChange={(e) => setPreferences(e.target.value)} */}
                <label for="gdpr-cookietype-1" title="These are cookies that are related to your site 
        preferences, e.g. remembering your username, site colours, etc.">Site Preferences</label>
            </li>
            <li>
                <input type="checkbox" id="gdpr_cookietype_2" name="analytics" value="analytics" />
                <label for="gdpr-cookietype-2" title="Cookies related to site visits, browser types, 
        etc.">Analytics</label>
            </li>
            <li>
                <input type="checkbox" id="gdpr_cookietype_3" name="marketing" value="marketing" />
                <label for="gdpr-cookietype-3" title="Cookies related to marketing, e.g. newsletters, 
        social media, etc">Marketing</label>
            </li>
        </ul>
    </form>
</div>;
export default Cookie;