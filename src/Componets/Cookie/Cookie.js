import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import './Cookie.css';
import { useCookies } from 'react-cookie';
import Button from "../ButtonGroup/Button/button";
import { Modal, ModalBody } from 'reactstrap';
import cookie_bite from '../../img/cookie-bite.svg';
const Cookie = () => {
    // close model 
    const [showModal, setShowModal] = useState(false)
    // // small model for cookie
    const [showText, setShowText] = useState(false);
    const onList = () => setShowText(true);
    // customize button on off
    const [list, toggleList] = React.useState(false);
    // set time to show model
    useEffect(() => {
        const timeId = setTimeout(() => setShowModal(true), 2000);
        return () => clearTimeout(timeId)
    }, []);
    //   Cookie store
    const cookies = new Cookies('');
    const createCookie = () => {
        cookies.set('myCat', 'Pacman', { path: '/' ,expires : new Date(new Date().getTime() + 5 * 1000)});
        cookies.set('essential', 'essential', { path: '/',expires : new Date(new Date().getTime() + 5 * 1000)});
        cookies.set('preferences', 'preferences', { path: '/',expires : new Date(new Date().getTime() + 5 * 1000) });     
    }
    
    const readCookie = () => {
        console.log(cookies.get('myCat'));
        console.log(cookies.get('essential'));
        console.log(cookies.get('preferences'));   
     }
    // coockie try
    //  const cook=()=>{
    //     const[preferences,setPreferences]=useState('');
    //     const[coockie,setCoockie]=useState(['list']);
    // }
    // const handle=(e)=>{
    //         setCoockie('name',value,{path:'/'});
    //         setPreferences(e.target.value);
    // }  
     
    return (
        <>
            <section className="cookiesection">
                <Modal className="modelcookie" isOpen={showModal} toggle={showModal} data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                    <div class="gdprcookie">
                        <span className="Cookiemodalclosebtn" onClick={() => setShowModal(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                        <div>
                            <img src={cookie_bite} class="cookie-img" alt="Cookie Image" /> Cookies &amp; Privacy Policy
                        </div>
                        <p>We use cookies to personalize your experience and analyse web traffic. Learn more about
                            our use of cookies in our &nbsp;
                            <a href="/Privacypolicy" target="_blank" class="cookie-privacy">Privacy Policy</a>.</p>
                        {list ? <List /> : null}
                        <div class="gdprcookie-buttons">
                            <button type="button" value="SetCookies" name="set" className="customizebtn glow-on-hover text-light" onClick={() => { onList(); createCookie(); toggleList(!list);}}>Customize</button>
                            <span onClick={() => { readCookie();  setShowModal(false); }}> <Button value="GetCookies" name="get" classNames="allbtn-primary glow-on-hover text-light" text="Accept All" data-aos="fade-left"></Button></span>
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
                <label for="gdpr-cookietype-0" title="These are cookies that are essential for the 
                website to work correctly.">Essential</label>
                
            </li>
            <li>
                <input type="checkbox" id="gdpr_cookietype_1" name="preferences" />
                {/* value={preferences} onChange={(e) => setPreferences(e.target.value)} */}
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