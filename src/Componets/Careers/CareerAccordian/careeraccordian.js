import './careeraccordian.css';
import Button from '../../ButtonGroup/Button/button';
import opportimg1 from '../../../img/career/oppoimg1.png';
import opportimg2 from '../../../img/career/oppoimg2.png';
import opportimg3 from '../../../img/career/oppoimg3.png';
import opportimg4 from '../../../img/career/oppoimg4.png';
import opportimg5 from '../../../img/career/oppoimg5.png';


const Careeraccordian =()=>{

    const data = [
        { 
            opportunityimg:opportimg1, 
            oppimgalt:"web project ",
            oppheading: "Web Project Manager - Team Of PHP MySQL Developers ",
            oppdesc:"MySQL Developer I West New York, USA I Full Time I 2 Days Ago",
        },
        { 
            opportunityimg:opportimg2, 
            oppimgalt:"web project ",
            oppheading: "DevOps Project Manager - Team Of DevOps Developers",
            oppdesc:"MySQL Developer I West New York, USA I Full Time I 2 Days Ago",
        },
        { 
            opportunityimg:opportimg3, 
            oppimgalt:"web project ",
            oppheading: "Magento Project Manager - Team Of Magento Developers ",
            oppdesc:"MySQL Developer I West New York, USA I Full Time I 2 Days Ago",
        },
        { 
            opportunityimg:opportimg4, 
            oppimgalt:"web project ",
            oppheading: "Web Project Manager - Team Of PHP Web Developers ",
            oppdesc:"MySQL Developer I West New York, USA I Full Time I 2 Days Ago",
        },
        { 
            opportunityimg:opportimg5, 
            oppimgalt:"web project ",
            oppheading: "React  Manager - Team Of React Developers ",
            oppdesc:"MySQL Developer I West New York, USA I Full Time I 2 Days Ago",
        }, 
      ];
    return(
    <>
       
    <section  className="accordiansec">
        <div className="container">
            <div className="row" >
                {
                    data.map((data) =>(
                        <div className="col-lg-12 col-md-12 col-sm-12 carshadow">
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    <img className="accordimg img-fluid" src={data.opportunityimg} alt={data.oppimgalt}/>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7" style={{textAlign:'left'}}>
                                    <h5 className="oppheading">{data.oppheading}</h5>
                                    <p className="oppdetails">{data.oppdesc}</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3"  style={{paddingTop:'2%'}}>
                                    <Button classNames="btnclear" text="Apply Now" />
                                </div>
                            </div>
                        </div>

                    ))}
            </div>
        </div> 
        </section>
    </>
)
}
export default Careeraccordian;

