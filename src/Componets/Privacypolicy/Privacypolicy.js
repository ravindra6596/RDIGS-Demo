import './Privacypolicy.css';
import Heading from '../Heading/Heading';
import privacymainimg from '../../img/policyimg.png';

const privacypolicy = () => {
    return (
        <>
         <div className="nav-contaniner"/>
            {/* <!-- ======= Privacy Banner Section ======= --> */}
        <section className="privacysection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="aboutwherewe" title="Privacy Policy"/>
                            <p style={{color:'white'}}>At RDIGS, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ======= Privacy  Section ======= --> */}
            <section>
                <div className="container">
                    <div className="row privacyrow1" >
                   <span style={{margin:'5px 2%'}}> <Heading classNames="aboutwherewe" title="Our Privacy Commitments"/></span>
                        <div className="col-lg-12">
                        <p>This website and associated webs (“Website”) are owned and maintained by: RD Info Global Solutions (OPC) Pvt. Ltd.
                            Address : 402, Vascon Garnets Bay, Besides Hotel Four Points By Sheraton, Viman Nagar, Pune, Maharashtra 411014
                        </p>
                        <Heading classNames="aboutwherewe"  title="Welcome!"/>
                        <p> Cookies improve your experience. We use cookies to help you access this Website faster and more efficiently. 
                            Cookies allow us to distinguish you from other users, so that we can recognize you each time you visit.  
                            Cookies also allow us to store user preferences and provide you with a positive experience when you browse this Website, 
                            including enabling you to personalize Website settings. Our marketing partners also collect web viewing data to 
                            ensure that you are seeing the most relevant advertising.
                        </p>
                        </div>
                        <div className="col-lg-6">
                            <b>1.1 Why do we use cookies?</b>
                            <p>
                            Cookies improve your experience. We use cookies to help you access this Website faster and more efficiently. 
                            Cookies allow us to distinguish you from other users, so that we can recognize you each time you visit.  
                            Cookies also allow us to store user preferences and provide you with a positive experience when you browse this Website, 
                            including enabling you to personalize Website settings. Our marketing partners also collect web viewing data to 
                            ensure that you are seeing the most relevant advertising.
                        </p>
                        <p>  Learn more about the types of cookies we use.</p>
                        <b>1.3 GDPR and Your EU Privacy Rights</b>
                        <p>
                            The General Data Protection Regulation (“GDPR”), (Regulation (EU) 2016/679) creates some new rights for European 
                            Union residents and strengthens some existing data protection rights.
                        </p>
                        <b>1.4 Cookie Policy Changes and Updates</b>
                        <p>
                            We reserve the right to amend this Cookie Policy from time to time as necessary. We will post a notice on this Website
                            if there are material changes to the Cookie Policy, but you should also check this Website periodically to review the current policy.
                        </p>
                        <b>1.5 How can we help? Getting in touch</b>
                        <p>
                            Questions, concerns or complaints:<br/>  
                            If you have any questions, concerns or complaints about RDIGS’s Personal Data practices around cookies 
                            or this Cookie Policy, we encourage you to get in touch with our appointed Data Protection Officer (“DPO”).
                            <br/>
                            If you believe you have suffered harm due to a breach of your rights by RDIGS under this Cookie Policy, 
                            and RDIGS has not handled your complaint in a reasonably sufficient manner, any EU resident may also file a
                            complaint with the applicable supervisory authority.
                            <br/>
                             The contact information for RDIGS’s Data Protection Officer is:
                             <br/><br/>
                                Mr. Shashi Kumar<br/>
                                <br/>  
                                c/o RD Info Global Solutions (OPC) Pvt. Ltd.
                                <br/>
                             Address :  402, Vascon Garnets Bay, Besides Hotel Four Points By Sheraton, Viman Nagar, Pune, Maharashtra 411014
                            <br/><br/>
                              Email: dpo@rdigs.com
                            </p>
                            
                        </div>
                        <div className="col-lg-6">
                            <b>1.2 What Are Cookies?</b>
                            <p>
                            Cookies are small text files that can be stored on a User’s computer, tablet or mobile device (“Computer”) 
                            when you visit a website. A cookie will typically contain the name of the originating domain, the lifetime of 
                            the cookie, and a randomly generated unique number or other value.
                        </p>
                        <p>    
                            Cookies used by RDIGS identify you as a unique user by means of a tracking ID. The cookie itself is anonymous 
                            and does not contain any Personal Data, except when such information has been supplied by you, such as when you 
                            provide your name and email address when completing a registration form.
                        </p>
                        <img className="img-fluid" src={privacymainimg} />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
);
}
export default privacypolicy;