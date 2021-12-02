import React, { useState }  from 'react';
import './JobDescription.css';
import Swal from "sweetalert2"; 
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Heading from '../../Heading/Heading';
import Button from '../../ButtonGroup/Button/Button';
const JobDescription =()=>{
   
 //Post API Logic 
 const { register, handleSubmit ,reset} = useForm();
 const [selectedFile, setSelectedFile] = useState();

//For file upload set the value of variable
 const handleChange =(event)=>{
    console.log(event.target.file)  
    setSelectedFile(event.target.files[0])
}
const onSubmit = (data)=> {
    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("contact",data.contact);
    formData.append("email",data.email);
    formData.append("company_name",data.company_name);
    formData.append("resume",selectedFile);
    formData.append("message",data.message);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ':' + pair[1]);
    }
    console.log(formData);
    console.log(data);
    axios.post('https://rdigs-api.herokuapp.com/career', formData).then(res => {
        console.log(res);
        console.log(res.data);
    }) 
        Swal.fire({
            position: 'centerd',
            icon: 'success',
            title: 'Your Data has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        reset();    
  }  

const { jobid } = useParams()
const { role1 } = useParams()
const { role2 } = useParams()
const { requiremet1 } = useParams()
const { experience } = useParams()
console.log(jobid);

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
                    {/* {
                    data.map((data) =>{
                        return(
                        <> */}
                            <h4><b style={{fontFamily:'Orbitron',color:'#30a6e9',paddingRight:'5px'}}>Job ID:</b>{jobid}</h4>
                            <h3 className="jdroles-res">Roles and Responsibilities</h3>
                            <ul>
                                <li>Lead Identify and develop interfaces and integration flows using mule ESP with Mule runtime, connectors, design center and API management.</li>
                                <li>0-5 years of hands on exp in mule DW and java, knowledge on mule architecture along with XML,SOAP,WSDL,XSLT,REST services, knowledge on security, login, policy management.</li>
                                 {/*<li>{role1}</li>
                             <span><li>{role4}</li></span>
                            <spn><li>{role5}</li></spn> */}
                            </ul>
                            <h4 style={{fontFamily:'Orbitron',color:'#30a6e9'}}>Requirements & Qualifications:</h4>
                            <ul>
                                 <li>Good personality.</li>
                                 <li>Excellent Communication skills</li>
                                {/*<li>{data.requiremet3}</li>
                                <li>{data.requiremet4}</li>
                                <li>{data.requiremet5}</li>
                                <li>{data.requiremet6}</li>
                                <li>{data.requiremet7}</li>*/}
                            </ul>
                             <h5><b style={{fontFamily:'Orbitron',color:'#30a6e9'}}>Experience -</b>0-2 Year</h5> 
                            <h5><b style={{fontFamily:'Orbitron',color:'#30a6e9'}}>Location -</b>Viman Nagar-Pune</h5> 
                            
                        {/* </>                     
                        )}
                    )} */}
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                         <form onSubmit={handleSubmit(onSubmit)} autocomplete="off" className="jdformcol" style={{padding:'3%'}}>
                                <h1 className="applyheretxt">Apply Now...</h1>
                                <div className="form-group">
                                    <input  className="formjd"  placeholder="Enter Name"
                                     type="text" 
                                     {...register("name")}
                                     required
                                    />
                                </div>
                                <div className="form-group">
                                    <input className="formjd" placeholder="Enter Phone No"
                                     type="number" 
                                     {...register("contact")}
                                     required
                                     />
                                </div>
                                <div className="form-group">
                                    <input className="formjd"  placeholder="Enter Email" 
                                      type="email"
                                     {...register("email")} 
                                     required
                                    />
                                </div>
                                <div className="form-group">
                                    <input className="formjd" placeholder="Enter Company Name" 
                                        type="text" 
                                        {...register("company_name")}
                                        required
                                     />
                                </div>
                                <div className="form-group" style={{textAlign:'justify',border:'1px solid #ced4da',borderRadius:'5px'}}>
                                    <label for="exampleInputFile" style={{paddingLeft:'1%'}}>Upload File</label><i class="fa fa-image mx-2 updatePost"></i><small class="img-add">(only Pdf, Doc, & txt files are allowed)</small>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <div class="input-group">
                                            <input  type="file" style={{paddingLeft:'1%'}}
                                              name="resume"
                                              {...register("resume")}
                                              onChange={handleChange}
                                              required
                                            />
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="formjd" rows="4" cols="123" name="message"  placeholder="Enter your message here..."
                                    type="textarea" 
                                    {...register("message")}
                                    required
                                    />
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


	