import React from "react";
import './button.css';

const Button =(props)=>{
    return(
    <>
        <button type="submit" class="btn btn-primary glow-on-hover text-light" onClick={props.fun}>{props.text}</button>

    </>
)
}
export default React.memo(Button) ;

