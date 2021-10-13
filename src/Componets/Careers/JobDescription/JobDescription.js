import './JobDescription.css';
import Button from '../../ButtonGroup/Button/button';
import Heading from '../../Heading/Heading';
const JobDescription =()=>{

    return(
    <>
    <div className="nav-contaniner"></div>
    <section className="jdcareerban">
        <div className="container ">
            <div className="row">
                <div className="col-lg-12" style={{margin:'8% 0px'}}>
                    <Heading title="Front-End Developer"/>
                </div>
            </div>
        </div>
    </section>
        <section>
            <div className="container">
                <div className="row" style={{textAlign:'justify',margin:'5% 0px'}}>
                    <div className="col-l-8 col-md-8 col-sm-8">
                    <h3><b>Job ID:</b>001</h3>
                        <h3>Roles and Responsibilities</h3>
                        <ul className="jdlist">
                        <span style={{display:'flex'}}><i class="fa fa-check jdicons"></i>  <li>Prepares work to be accomplished by gathering information and materials.</li></span>
                        <span style={{display:'flex'}}><i class="fa fa-check jdicons"></i><li>Prepares work to be accomplished by gathering information and materials.</li></span>
                        <span style={{display:'flex'}}><i class="fa fa-check jdicons"></i>    <li>Prepares work to be accomplished by gathering information and materials.</li></span>
                        </ul>
                        <h3>Requirements & Qualifications:</h3>
                        <ul>
                         <li>Excellent Communication skills</li>
                         <li>Should be able to speak fluent English.</li>
                          <li>Good phone etiquette.</li>
                          <li>Good personality.</li>
                          <li>Prepares final layout by marking and pasting up finished copy and art.</li>
                          <li>Willing to work in Night Shift.</li>
                        </ul>
                        <h3> <b>Experience -</b> 0–1 Years</h3>
                        <h3> <b>Location -</b> Pune- Viman Nagar</h3>

                    </div>
                    <div className="col-l-4 col-md-4 col-sm-4 jdformcol">
                        <h1>Apply Here...</h1>
                         <form style={{paddingTop:'5%'}}>
                                <div class="form-group">
                                    <input type="text" className="formjd" aria-describedby="emailHelp" placeholder="Enter Name" />
                                </div>
                                <div class="form-group">
                                    <input type="number" className="formjd" aria-describedby="emailHelp" placeholder="Enter Phone No" />
                                </div>
                                <div class="form-group">
                                    <input type="text" className="formjd" aria-describedby="emailHelp" placeholder="Enter Email" />
                                </div>
                                <div class="form-group">
                                    <input type="text" className="formjd" placeholder="Enter Company Name" />
                                </div>
                                    <input type="file" class="form-control formjd" id="customFile" />
                            
                                
                                <div className="row" style={{margin:'5%'}}>
                                <div className="col btngetintouch"><Button classNames="allbtn-primary glow-on-hover text-light" text="GET IN TOUCH" /></div>
                                    <div className="col conformcleardiv"> <Button classNames="btnclear" text="Clear" /></div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </section>
 
    </>
)
}
export default JobDescription;

