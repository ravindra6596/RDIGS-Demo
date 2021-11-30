import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
const Button =(props)=>{
    return(
    <>
       <button className={props.classNames} type="submit"  onClick={props.fun} >{props.text}</button>
     </>
    )
}
export default React.memo(Button) ;

