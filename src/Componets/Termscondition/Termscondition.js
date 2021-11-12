import './Termscondition.css';
import Heading from '../Heading/Heading';
import termsimg from '../../img/termsimg3.png';
import termsimg1 from '../../img/liabilityimg.jpg';



const Termscondition = () => {
    return (
        <>
         <div className="nav-contaniner"/>
               {/* <!-- ======= Privacy Banner Section ======= --> */}
        <section className="termssection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" style={{marginTop:'10%'}}>
                        <Heading h1Class="clientheadwe" title="Terms & Conditions"/>
                        <p style={{color:'white'}}>At RDIGS, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                     </div>
                </div>
            </div>
        </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12  col-md-12 col-sm-12 termscol" style={{textAlign:'justify',marginTop:'5%'}}>
                            <h2 className="termsubhead">Terms Of Use</h2>
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
                            <b style={{color:'#30a6e9'}}>1.1 Cookies</b>
                            <p>
                           We employ the use of cookies. By using RDIGS ‘s website you consent to the use of cookies in accordance with RDIGS‘s privacy policy.
                           <br/>
                           Most of the modern day interactive web s use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to 
                           enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.<br/>
                           Most of the modern day interactive web s use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to 
                           enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.
                         </p>
                         <h3 style={{color:'#30a6e9'}}>1.Waiver and Release of Liability</h3>
                         <p>The information, content, materials, graphics, text, images, designs, trademarks, trade names and logos contained on this website are protected by trademark, copyright and other intellectual property laws under the laws of India and international treaties. Use of this site shall not be deemed as a transfer of rights in any such trademarks, copyrights or intellectual property</p>
                         <h3 style={{color:'#30a6e9'}}>2. Nature of Information and Materials</h3>
                         <p>RDIGS views the protection of your information as very important. As part of your use of the website, you may provide Xento with personal information such as your name; business name and mailing address; telephone number; fax number; and e‐mail address that will permit us to identify you. Xento will use all other personal information we collect from you only for purposes appropriate for conducting our business, including using it on other third party sites, follow up on services provided, sending announcements on new features, events, products or services, creation of a client database, audits, reporting requirements, and for other activities related to business administration, marketing, research, product development, or improving the quality of our services and products. Although we may collect and compile aggregate data about your transactions with Xento, Xento will not sell, give or otherwise make available to third parties any personally‐identifiable information about you except as a part of any sale of assets, joint venture, merger or partnership or as required by law or judicial or governmental order.</p>
                        </div>
                    </div>
                    <div className="row"style={{margin:'2% 0px',textAlign:'justify'}}>
                        <div className="col-lg-6 col-md-6">
                            <img className="img-fluid termdiscimg" src={termsimg}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                           <h3 className="termdesclam">Disclaimer</h3>
                           <p>
                           To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions 
                           relating to our website and the use of this website (including, without limitation, any warranties implied by law 
                           in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this 
                           disclaimer will:</p>
                           <ul>
                               <li>limit or exclude our or your liability for death or personal injury resulting from negligence.</li>
                               <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation. Or</li>
                               <li>limit any of our or your liabilities in any way that is not permitted under applicable law.</li>
                           </ul>
                         
                        </div>
                    </div>
                    <div className="row"style={{margin:'2% 0px',textAlign:'justify'}}>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                           <h3 className="termdesclam">Liability</h3>
                           <ul>
                               <li>limit or exclude our or your liability for death or personal injury resulting from negligence.</li>
                               <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation. Or</li>
                               <li>limit any of our or your liabilities in any way that is not permitted under applicable law.</li>
                           </ul>
                           <p>
                           Most of the modern day interactive web s use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to 
                           enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.
                        </p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <img className="img-fluid termdiscimg"style={{height:'300px',width:'100%'}} src={termsimg1}/>
                        </div>
                    </div>
                </div>
            </section>     
        </>
);
}
export default Termscondition;