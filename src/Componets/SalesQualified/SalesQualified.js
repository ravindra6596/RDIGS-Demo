import React  from "react";
import './SalesQualified.css';
import Button from "../ButtonGroup/Button/Button";
import { Link } from "react-router-dom";
const SalesQualified =()=>{
    return(
    <>
        <div className="nav-contaniner"/>
        <section style={{backgroundColor:'#f6f9ff'}}>
            <div className="container">
                <div className="row">
                  <div className="col-lg-12"style={{margin:'5% 0px'}}>
                     <h1 style={{color:'blue',fontSize:'100px',fontWeight:'bold'}}>404</h1>
                     <p style={{color:'#30a6e9',fontSize:'30px'}}>The Page You are Looking doesn't exist</p>
                     <Link to="/home"><Button text="Back To Home" classNames="allbtn-primary glow-on-hover text-light"/></Link>
                  </div>
                </div>
            </div>
        </section>   
</>
)
}
export default SalesQualified;

