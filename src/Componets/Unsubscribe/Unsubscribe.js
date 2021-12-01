import './Unsubscribe.css';
import React, { Component }  from 'react';
import Heading from '../Heading/Heading';
import Button from '../ButtonGroup/Button/Button';
import unsubimg from '../../img/unsub2.jpg';
const Unsubscribe = () => {
   return (
        <>
          <div className="nav-contaniner"/>
            {/* <!-- ======= Privacy Banner Section ======= --> */}
        <section className="unsubsection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{marginTop:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Unsubscribe"/>
                            <p style={{color:'white'}}>At RDIGS, we’re on a mission to help our clients deliver innovative experiences and drive value for their business</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8" style={{padding:'10%'}}>
                            <Heading h1Class="clientheadwe" title="Unsubscribe Here"/>
                            <p> We hate goodbyes-but if you have a change of heart, we'll always be here with great ideas to share.
                                please enter your mail address below to unsubscribe..</p>
                            <input type="email" class="form-unsubinput" aria-describedby="emailHelp" placeholder="Enter Your Email" required/>
                            <Button text="Unsubscribe Now" classNames="allbtn-primary glow-on-hover text-light"></Button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <img className="img-fluid" src={unsubimg}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Unsubscribe;