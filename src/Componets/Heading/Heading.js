import React from "react";
import './Heading.css';
const Heading=(props)=>{
return(
    <>
     <h1 className="aboutwherewe" data-aos="fade-down">{props.title}</h1>
    </>
)
}
export default React.memo(Heading) ;