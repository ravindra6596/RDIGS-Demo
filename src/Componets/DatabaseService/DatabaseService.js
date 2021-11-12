import React  from "react";
import './DatabaseService.css';
import Heading from "../Heading/Heading";
import Button from "../ButtonGroup/Button/Button";
import { Link } from "react-router-dom";
const DatabaseService =()=>{
    return(
    <>
        <div className="nav-contaniner"/>
            <section className="dbservice-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Database Service"/>
                            <p style={{color:'white'}}>Get Access To The Customized B2B List  </p>
                            <p style={{color:'white'}}>We have a team of proficient who build a contact list that will provide you an access to limitless combination of data fields for giving you a database of your ideal targets. We build a well-tailored list as per your requirement and ideal prospects. Our precise and verified list building service will increase your chances of success.</p>
                        </div>
                    </div>
                </div>
            </section>   
  

</>
)
}
export default DatabaseService;

