import "./about.css";
import aboutfrontimg from "../../img/About-us-1.png";
import Heading from "../Heading/Heading";

const about = () => {
  return (
    <>
            <section className="aboutsec1" style={{marginTop:'2px'}}>
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-right">
                          <Heading  h1Class="aboutwherewe" title="About"/>
                              <p className="aboutpara">Pellentesque id erat venenatis, rhoncus tellus ac, laoreet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Interdum et malesuada fames ac ante ipsum primis in faucibus.Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                              <p className="aboutpara">Pellentesque id erat venenatis, rhoncus tellus ac, laoreet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Interdum et malesuada fames ac ante ipsum primis in faucibus.Interdum et malesuada fames ac ante ipsum primis in faucibus.</p> 
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6" data-aos="flip-right">
                          <div class="elementor-image">
                            <img  className="aboutsecimg img-fluid" alt="" srcSet={aboutfrontimg} sizes="(max-width: 200px) 100vw, 200pxpx"/>											
                          </div>
                        </div>
                    </div>
                </div>                   
            </section>  
    </>
  );
};
export default about;
