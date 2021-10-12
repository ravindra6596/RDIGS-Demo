import React from 'react';
import './Bannercommon.css';
export default function Bannercommon() {
    return (
        <>
        <section className="banner-common">
            <div className="container">
                <div className="row">
                        <header class="page-header-ui page-header-ui-dark bg-img-cover overlay overlay-60" style="background-image: url(https://source.unsplash.com/PTRzqc_h1r4/1600x900)">
                                    <div class="page-header-ui-content position-relative">
                                        <div class="container px-5 text-center">
                                            <div class="row gx-5 justify-content-center">
                                                <div class="col-lg-8">
                                                    <h1 class="page-header-ui-title mb-3">Publications</h1>
                                                    <p class="page-header-ui-text mb-0">Browse articles, keep up to date, and learn more on our blog!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="svg-border-rounded text-light">
                                        {/*  Rounded SVG Border */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                                    </div>
                        </header>
                    </div>
            </div>
        </section>   
        </>
    )
}

