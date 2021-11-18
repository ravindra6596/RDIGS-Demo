import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import './Cookie.css';
import Button from "../ButtonGroup/Button/Button";
import { Modal } from 'reactstrap';
import cookiebite from '../../img/cookiebite.svg';
const Cookie = () => {
    // close model 
    const [showModal, setShowModal] = useState(false);
    // small model for cookie
    const [showText, setShowText] = useState(false);
    const onList = () => setShowText(true);
    // customize button on off
    const [list, toggleList] = React.useState(true);
    // set to check checkbox
    // const [isCheckedpreferences, setIsCheckedpreferences] = useState(false);
    // const [isCheckedanalytics, setIsCheckedanalytics] = useState(false);
    // const [isCheckedmarketing, setIsCheckedmarketing] = useState(false);
    // set time to show model
    useEffect(() => {
        const timeId = setTimeout(() => setShowModal(true), 2000);
        return () => clearTimeout(timeId)
    }, []);
    // Cookie store
    const cookies = new Cookies('');
    const d=new Date();
    d.setTime(d.getTime() + (5*10000));
    // const [preferences,setPreferences]=useState(false);
    // const [analytics,setAnalytics]=useState(false);
    // const [marketing,setMarketing]=useState(false);
    const createCookie = () => {
        cookies.set('essential', 'essential', { path: '/'});
        cookies.set('preferences', 'preferences', { path: '/'});
        cookies.set('analytics', 'analytics', { path: '/'});
        cookies.set('marketing', 'marketing', { path: '/'}); 
        // if(localStorage.getItem('.modelcookie') != 'shown'){
        //     setShowModal(".modelcookie").delay(2000).fadeIn();
        //     localStorage.setItem('.modelcookie','shown');
        // }      
    }
    // const handlePreferences=()=>{
    //     setIsCheckedpreferences(!isCheckedpreferences);
    //     if('preferences'==='isChecked'){
    //         cookies.set('preferences', 'preferences', { path: '/',expires : d});
    //     }
    // };
    // const handleAnalytics=()=>{
    //     setIsCheckedanalytics(!isCheckedanalytics);
    //     if('analytics'==='isChecked'){
    //         cookies.set('analytics', 'analytics', { path: '/',expires : d});
    //     }
    // };
    // const handleMarketing=()=>{
    //     setIsCheckedmarketing(!isCheckedmarketing);
    //     if('marketing' === 'isChecked'){
    //         cookies.set('marketing', 'marketing', { path: '/',expires : d});
    //     }
    // };
    const readCookie = () => {
        console.log(cookies.get('myCat'));
        console.log(cookies.get('essential'));
        console.log(cookies.get('preferences'));
        localStorage.getItem('.modelcookie');
     }
    return (
        <>
            <section className="cookiesection">
               <div className="container">
                <div className="row">
                    <div className="cookiemodal-div" style={{'border-radius':'30px'}}>
                    <Modal className="modelcookie" isOpen={showModal} toggle={showModal} data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                        <div class="gdprcookie">
                            <span className="Cookiemodalclosebtn" onClick={() => setShowModal(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                            <div>
                                <img src={cookiebite} class="cookie-img" alt="Cookie_Image"/> Cookies &amp; Privacy Policy
                            </div>
                            <p>We use cookies to personalize your experience and analyse web traffic. Learn more about
                                our use of cookies in our &nbsp;
                                <a href="/Privacypolicy" target="_blank" class="cookie-privacy">Privacy Policy</a>.</p>
                            {showText ? <List /> : null}
                            <div class="gdprcookie-buttons">
                                <Button type="button" value="SetCookies" name="set" classNames="btnclear22" fun={() => {onList(); createCookie(); toggleList(!list);}} text="Customize"/>
                                <span onClick={() =>{readCookie(); setShowModal(false); }}> <Button value="GetCookies" name="get" classNames="allbtn-primary glow-on-hover text-light" text="Accept All" data-aos="fade-left"/></span>
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
                 <input type="checkbox" id="gdpr_cookietype_1" name="preferences" value="preferences"/> 
                {/* onClick={handlePreferences} checked={checked} */}
                {/* value={preferences} onChange={(e) => setPreferences(e.target.value)} */}
                <label for="gdpr-cookietype-1" title="These are cookies that are related to your site 
            preferences, e.g. remembering your username, site colours, etc.">Site Preferences</label>
            </li>
            <li>
                <input type="checkbox" id="gdpr_cookietype_2" name="analytics" value="analytics" 
                />
                {/* onClick={handleAnalytics} checked={checked} */}
                <label for="gdpr-cookietype-2" title="Cookies related to site visits, browser types, 
            etc.">Analytics</label>
            </li>
            <li>
                <input type="checkbox" id="gdpr_cookietype_3" name="marketing" value="marketing"
                 />
                 {/* onClick={handleMarketing} checked={checked} */}
                <label for="gdpr-cookietype-3" title="Cookies related to marketing, e.g. newsletters, 
            social media, etc">Marketing</label>
            </li>
        </ul>
    </form>
</div>
export default Cookie;