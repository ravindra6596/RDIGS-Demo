import './Termscondition.css';
import Heading from '../Heading/Heading';
import termsimg from '../../img/temsmainimg.jpg';


const Termscondition = () => {
    return (
        <>
         <div className="nav-contaniner"/>
               {/* <!-- ======= Privacy Banner Section ======= --> */}
        <section className="termssection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" style={{marginTop:'10%'}}>
                        <Heading classNames="clientheadwe" title="Terms & Conditions"/>
                        <p style={{color:'white'}}>At RDIGS, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                     </div>
                </div>
            </div>
        </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6  col-md-6 col-sm-6 termscol" style={{textAlign:'justify',marginTop:'5%'}}>
                            <p>
                                These terms and conditions outline the rules and regulations for the use of RD Info Global Solutions (OPC) Pvt. Ltd. is located at 402, 
                                Vascon Garnets Bay, Besides Hotel Four Points By Sheraton, Viman Nagar, Pune, Maharashtra 411014
                            </p>
                            <br/>
                            <p>
                                By accessing our asset www.ridgs.com, we assume you accept these terms and conditions in full. 
                                Do not continue to use RDIGS’s webs if you do not accept all of the terms and conditions stated on this page.</p>
                            <p> 
                            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: 
                            “Client”, “You” and “Your” refers to you, the person accessing this website and accepting the Company’s terms and conditions. “The Company”, 
                            “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the 
                            Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance 
                            to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting 
                            the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of India. 
                            Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and 
                            therefore as referring to same.
                            </p>
                            <b>1.1 Cookies</b>
                            <p>
                           We employ the use of cookies. By using RDIGS ‘s website you consent to the use of cookies in accordance with RDIGS‘s privacy policy.
                           <br/>
                           Most of the modern day interactive web s use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to 
                           enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.<br/>
                           Most of the modern day interactive web s use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to 
                           enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.
                         </p>
                        </div>
                        <div className="col-lg-6 col-md-6" style={{marginTop:'5%'}}>
                            <img className="img-fluid" src={termsimg}/>
                        </div>
                    </div>
                </div>
            </section>     
        </>
);
}
export default Termscondition;