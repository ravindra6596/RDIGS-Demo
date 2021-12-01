import './RdRoadMap.css';
import React  from 'react';
import roadimg1 from '../../img/Rdroadmap/roadmap1.jpg';
import roadimg2 from '../../img/Rdroadmap/roadmap2.jpg';
import roadimg3 from '../../img/Rdroadmap/r.jpg';
import roadimg4 from '../../img/Rdroadmap/roadmap4.jpg';
import roadimg5 from '../../img/Rdroadmap/roadmap5.jpg';
import roadimg6 from '../../img/Rdroadmap/roadmap6.jpg';
import roadimg7 from '../../img/Rdroadmap/roadmap7.jpg';
import roadimg8 from '../../img/Rdroadmap/roadmap8.jpg';

const RdRoadMap=()=>{
    return(
        <>
            <section>
                <div className="container" style={{marginTop:'3%',marginBottom:'3%'}}>
                    <div className="row" style={{borderBottom:'2px solid #30a6e9'}}>
                        <div className="col roadcol1" >
                            <img src={roadimg1} className="img-fluid" style={{marginBottom:'5%',height:'100px'}} alt=""/>
                            <p className="roadmaptxtbox" style={{color:'black'}}>Inception of the RD info Solution</p>
                            <div className="roadbox" style={{backgroundColor:'#ff8a25',boxShadow:'5px 5px #f366084f'}}><h5 className="rdcircleyear">2014</h5></div>
                            <div className="roadverticalline"></div>
                        </div>

                        <div className="col roadcol2">
                            <img src={roadimg2} className="img-fluid" style={{marginBottom:'5%',height:'100px'}} alt=""/>
                            <p className="roadmaptxtbox"  style={{color:'black'}}>1 million Lead Generated</p>
                            <div className="roadbox" style={{backgroundColor:'#F33A6A',boxShadow:'5px 5px #e509424f'}}><h5 className="rdcircleyear">2015 </h5></div>
                            <div className="roadverticalline2"></div>
                        </div>

                        <div className=" col roadcol3">
                            <img src={roadimg3} className="img-fluid" style={{marginBottom:'5%',height:'100px'}} alt=""/>
                            <p className="roadmaptxtbox"  style={{color:'black'}}>Transfer to RD Info Global Solution</p>
                            <div className="roadbox" style={{backgroundColor:'#32CD32',boxShadow:'5px 5px #32cd327a'}}><h5 className="rdcircleyear">2016</h5></div>
                            <div className="roadverticalline"></div>
                        </div>
                    
                        <div className="col roadcol4">
                            <img src={roadimg4} className="img-fluid" style={{marginBottom:'5%',height:'100px'}} alt=""/>
                            <p className="roadmaptxtbox"  style={{color:'black'}}>Office in California,USA</p>
                            <div className="roadbox" style={{backgroundColor:'#30a6e9',boxShadow:'5px 5px #30a6e95e'}}><h5 className="rdcircleyear">2017</h5></div>
                            <div className="roadverticalline2"></div>
                        </div>
                        <div className=" col roadcol5">
                            <img src={roadimg5} className="img-fluid" style={{marginBottom:'5%',height:'100px'}} alt=""/>
                            <p className="roadmaptxtbox"  style={{color:'black'}}> Captured Region - America, Latam</p>
                            <div className="roadbox" style={{backgroundColor:'#082530',boxShadow:'5px 5px #0825306b'}}><h5 className="rdcircleyear">2018</h5></div>
                            <div className="roadverticalline"></div>
                        </div>
                    </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 roadcol6"> 
                                <div className="roadbox" style={{backgroundColor:'#800080',boxShadow:'5px 5px #8000805c'}}><h5 className="rdcircleyear">2019</h5></div>
                                <p className="roadmaptxtbox"  style={{color:'black'}}>First $1B Pipeline generated</p>
                                <img src={roadimg6} className="img-fluid" style={{marginBottom:'5%',height:'100px'}} alt=""/>                       
                            </div>

                            <div className="roadverticallinerow2"></div> 
                            <div className="col-lg-3 col-md-3 col-sm-3  roadcol7">
                                <div className="roadbox" style={{backgroundColor:'#0000FF',boxShadow:'5px 5px #0000ff26'}}><h5 className="rdcircleyear">2020</h5></div>
                                <p className="roadmaptxtbox"  style={{color:'black'}}>First 500 Deals Closed</p>
                                <img src={roadimg7} className="img-fluid" style={{marginBottom:'5%',height:'100px'}} alt=""/>
                            </div>

                            <div className="roadverticallinerow"></div> 
                            <div className="col-lg-3 col-md-3 col-sm-3 roadcol8">
                                <div className="roadbox" style={{backgroundColor:'#DFFF00',boxShadow:'5px 5px #dfff004f'}}><h5 className="rdcircleyear">2021</h5></div>
                                <p className="roadmaptxtbox"  style={{color:'black'}}>Progress Continue</p>
                                <img src={roadimg8} className="img-fluid" style={{marginBottom:'5%',height:'100px'}} alt=""/>
                            </div>
                            <div className="roadverticallinerow2"></div> 

                        </div>
                </div>
            </section>
        </>     
    )
}
export default RdRoadMap;