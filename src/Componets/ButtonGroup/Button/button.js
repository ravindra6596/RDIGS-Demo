import React from "react";
import './Button.css';
const Button =(props)=>{
    return(
    <>
        <button className={props.classNames} type="submit"  onClick={props.fun}>{props.text}</button>
    </>
    )
}
export default React.memo(Button) ;

