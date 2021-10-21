import './JobDescription.css';
import Button from '../../ButtonGroup/Button/button';
import Heading from '../../Heading/Heading';
const JobDescription =()=>{

    return(
    <>
    <div className="nav-contaniner"></div>
    <section className="jdcareerban">
        <div className="container ">
            <div className="row">
                <div className="col-lg-12" style={{margin:'8% 0px'}}>
                    <Heading classNames="clientheadwe" title="Front-End Developer"/>
                </div>
            </div>
        </div>
    </section>
        <section>
            <div className="container">
                <div className="row" style={{margin:'5% 0px'}}>
                    <div className="col-lg-12 col-md-12 col-sm-12" style={{textAlign:'justify',marginBottom:'2%'}}>
                        <h4><b style={{fontFamily:'Orbitron',color:'#30a6e9',paddingRight:'5px'}}>Job ID:</b>001</h4>
                        <h3 className="jdroles-res">Roles and Responsibilities</h3>
                        <ul>
                        <span><li>Identify, analyze and develop interfaces and integration flows using mule ESP with Mule runtime, connectors, design center and API management.</li></span>
                        <span><li>0-5 years of hands on exp in mule DW and java, knowledge on mule architecture along with XML,SOAP,WSDL,XSLT,REST services, knowledge on security, login, policy management.</li></span>
                        <span><li>Prepares work to be accomplished by gathering information and materials.</li></span>
                        <span><li>Enhancement of existing services when required, Implementation experience with Mule API management.</li></span>
                        <spn><li>Creating/Developing RAML and microservices per requirement.</li></spn>
                        </ul>
                        <h4 style={{fontFamily:'Orbitron',color:'#30a6e9'}}>Requirements & Qualifications:</h4>
                        <ul>
                           <span> <li>Excellent Communication skills</li></span>
                            <li>Should be able to speak fluent English.</li>
                            <li>Good phone etiquette.</li>
                            <li>Good personality.</li>
                            <li>Minimum percentile of 50% in 10th, 12th, UG & PG (if applicable).</li>
                            <li>Prepares final layout by marking and pasting up finished copy and art.</li>
                            <li>Willing to work in Night Shift.</li>
                        </ul>
                        <h5><b style={{fontFamily:'Orbitron',color:'#30a6e9'}}>Experience -</b> 0–1 Years</h5>
                        <h5><b style={{fontFamily:'Orbitron',color:'#30a6e9'}}>Location -</b> Pune- Viman Nagar</h5>

                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                         <form className="jdformcol" style={{padding:'3%'}}>
                                <h1 className="applyheretxt">Apply Here..</h1>
                                <div className="form-group">
                                    <input type="text" className="formjd" aria-describedby="emailHelp" placeholder="Enter Name"autocomplete="off" required />
                                </div>
                                <div className="form-group">
                                    <input type="number" className="formjd" aria-describedby="emailHelp" placeholder="Enter Phone No" autocomplete="off" required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="formjd" aria-describedby="emailHelp" placeholder="Enter Email"autocomplete="off" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="formjd" placeholder="Enter Company Name" autocomplete="off" />
                                </div>
                                <div className="form-group" style={{textAlign:'justify'}}>
                                    <label for="exampleInputFile">Upload File</label><i class="fa fa-image mx-2 updatePost"></i><small class="img-add">(only Pdf, Doc, & txt files are allowed)</small>
                                    <div className="input-group">
                                        <div className="custom-file">
                                        <input className="jdfilechoose" type="file" name=""  accept="pdf/*" id="filetag" autocomplete="off" required />
                                        <label className="jdfilechooselabel" for="">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{margin:'5%',textAlign:'center'}}>
                                <div className="col"><Button classNames="allbtn-primary glow-on-hover text-light" text="Apply" /></div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </section>
 
    </>
)
}
export default JobDescription;

