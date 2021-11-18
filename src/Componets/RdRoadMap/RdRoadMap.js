import './RdRoadMap.css';
import roadimg1 from '../../img/Rdroadmap/roadmap1.jpg';
import roadimg2 from '../../img/Rdroadmap/roadmap2.jpg';
import roadimg3 from '../../img/Rdroadmap/r.jpg';
import roadimg4 from '../../img/Rdroadmap/roadmap4.jpg';
import roadimg5 from '../../img/Rdroadmap/roadmap5.jpg';
import roadimg6 from '../../img/Rdroadmap/roadmap6.jpg';


const RdRoadMap=()=>{
    return(
        <>
            <section>
                <div className="container" style={{marginTop:'3%',marginBottom:'3%'}}>
                    <div className="row" style={{borderBottom:'2px solid #30a6e9'}}>
                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol1" >
                            <img src={roadimg1} className="img-fluid" style={{marginBottom:'5%',height:'100px'}}/>
                            <div className="roadbox" style={{backgroundColor:'#ff8a25',boxShadow:'5px 5px #f366084f'}}><h5>Title Here</h5>
                            <div className="roadverticalline"></div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol2">
                            <img src={roadimg2} className="img-fluid" style={{marginBottom:'5%',height:'100px'}}/>
                            <div className="roadbox" style={{backgroundColor:'#F33A6A',boxShadow:'5px 5px #e509424f'}}><h5>Title Here</h5></div>
                            <div className="roadverticalline2"></div>

                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol3">
                            <img src={roadimg3} className="img-fluid" style={{marginBottom:'5%',height:'100px'}}/>
                            <div className="roadbox" style={{backgroundColor:'#32CD32',boxShadow:'5px 5px #32cd327a'}}><h5>Title Here</h5></div>
                            <div className="roadverticalline"></div>

                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol4">
                            <img src={roadimg4} className="img-fluid" style={{marginBottom:'5%',height:'100px'}}/>
                            <div className="roadbox" style={{backgroundColor:'#30a6e9',boxShadow:'5px 5px #30a6e95e'}}><h5>Title Here</h5></div>
                            <div className="roadverticalline2"></div>

                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol5">
                            <img src={roadimg5} className="img-fluid" style={{marginBottom:'5%',height:'100px'}}/>
                            <div className="roadbox" style={{backgroundColor:'#082530',boxShadow:'5px 5px #0825306b'}}><h5>Title Here</h5></div>
                            <div className="roadverticalline"></div>

                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol6">
                            <img src={roadimg6} className="img-fluid" style={{marginBottom:'5%',height:'100px'}}/>
                            <div className="roadbox" style={{backgroundColor:'#800080',boxShadow:'5px 5px #8000805c'}}><h5>Title Here</h5></div>
                            <div className="roadverticalline2"></div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol7">
                            <h3>Lorem Ipsum</h3>
                            <p style={{textAlign:'justify'}}>Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol8">
                            <h3>Lorem Ipsum</h3>
                            <p style={{textAlign:'justify'}}>Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol9">
                            <h3>Lorem Ipsum</h3>
                            <p style={{textAlign:'justify'}}>Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol10">
                            <h3>Lorem Ipsum</h3>
                            <p style={{textAlign:'justify'}}>Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol11">
                            <h3>Lorem Ipsum</h3>
                            <p style={{textAlign:'justify'}}>Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 roadcol12">
                            <h3>Lorem Ipsum</h3>
                            <p style={{textAlign:'justify'}}>Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
     
    )
}
export default RdRoadMap;