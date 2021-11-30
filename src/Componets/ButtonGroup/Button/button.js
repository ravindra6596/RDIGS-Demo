import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
const Button =(props)=>{
    return(
    <>
    <Link to={props.link}>
        <button className={props.classNames} type="submit"  onClick={props.fun} >{props.text}</button>
    </Link>
    </>
    )
}
export default React.memo(Button) ;

