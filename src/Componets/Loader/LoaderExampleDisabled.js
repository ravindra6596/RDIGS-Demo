import React,{useState,useEffect} from 'react';
import './Loader.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Header } from 'semantic-ui-react';
//import Footer from '../Footer/Footer';
const LoaderExampleDisabled=()=>{
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },300000)
  },[])
    return(
        <>
        {
          loading ?
          <section className="loader">
          <Loader type="Oval" color="#00BFFF" className="Loader-round" width={100} height={100} duration={300000}/>    
          </section>
          :
          <Header/>
        }
        </>
  )
}
export default LoaderExampleDisabled;

