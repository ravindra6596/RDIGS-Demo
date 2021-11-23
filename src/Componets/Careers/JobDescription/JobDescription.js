import './JobDescription.css';
import axios from 'axios';
import Heading from '../../Heading/Heading';
import Button from '../../ButtonGroup/Button/Button';
import { useEffect, useState } from 'react';
const JobDescription =()=>{

        const[selectedFile,setSelectedFile] = useState();
        const changeHandler = (e) => {
            setSelectedFile(e.target.files[0]);
        }
        const handleSubmission = () => { }

 //Post API Logic 
  const url="https://rdigs-api.herokuapp.com/career"
  const [jddata, setjdData] = useState({
    name:"",
    email:"",
    contact:"",
    company_name:"",
    resume:""
  });
  function handle(e) {
    const newapidata = {}
    newapidata[e.target.id]=e.target.value
    setjdData(newapidata);
  }

  function submit(e) {
    e.prevenDefault();
    axios.post(url,{
      name:jddata.name,
      email:jddata.email,
      contact:jddata.contact,
      company_name:jddata.company_name,
      resume:jddata.resume
    })
    .then(res =>{
      console.log(res.jddata);
      console.log('asdfghjjhgfd');
    })
  }
 
    return(
    <>
    <div className="nav-contaniner"></div>
    <section className="jdcareerban">
        <div className="container ">
            <div className="row">
                <div className="col-lg-12" style={{margin:'8% 0px'}}>
                    <Heading h1Class="clientheadwe" title="Lead | Demand Generation "/>
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
                        <h5><b style={{fontFamily:'Orbitron',color:'#30a6e9'}}>Location -</b>Viman Nagar-Pune</h5>

                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                         <form onSubmit={(e)=> submit(e)} className="jdformcol" style={{padding:'3%'}}>
                                <h1 className="applyheretxt">Apply Here..</h1>
                                <div className="form-group">
                                    <input onChange={(e)=>handle(e)} value={jddata.name} id="name" type="text" className="formjd"  placeholder="Enter Name"autocomplete="off" required />
                                </div>
                                <div className="form-group">
                                    <input onChange={(e)=>handle(e)} value={jddata.contact} id="contact" type="number" className="formjd" placeholder="Enter Phone No" autocomplete="off" required/>
                                </div>
                                <div className="form-group">
                                    <input onChange={(e)=>handle(e)} value={jddata.email} type="email" id="email" className="formjd"  placeholder="Enter Email" autocomplete="off" required />
                                </div>
                                <div className="form-group">
                                    <input onChange={(e)=>handle(e)} value={jddata.company_name} id="company_name" type="text" className="formjd" placeholder="Enter Company Name" autocomplete="off" />
                                </div>
                                <div className="form-group" style={{textAlign:'justify',border:'1px solid #ced4da'}}>
                                    <label for="exampleInputFile" style={{paddingLeft:'1%'}}>Upload File</label><i class="fa fa-image mx-2 updatePost"></i><small class="img-add">(only Pdf, Doc, & txt files are allowed)</small>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <div class="input-group">
                                                <input onChange={(e)=>changeHandler(e)} value={jddata.resume} id="resume" type="file" name="file"  style={{paddingLeft:'1%'}}/>
                                            </div> 
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


	