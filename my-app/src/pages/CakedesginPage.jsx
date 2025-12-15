import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import banner from "../assets/img/banner.jpg"

const CakedesginPage = ()=>{

    return(
        <>
            {/* Banner */}
            <section className="text-center d-flex justify-content-center align-items-center" style={{
                minHeight:"70vh",
                backgroundImage:`url(${banner})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat"
            }}>
                <div className="text-dark text-center banners">
                    <h1 className="display-3 text-uppercase bannerheaders fw-bold">Pretty Bake is a homemade bakery.</h1>
                    <p className="lead bannerparagraphs">"Baking happiness one cake at a time," "Life is short, eat the cake," "Butter, sugar, magic," and "I decorate cakes. What's your superpower?"</p>
                </div>

            </section>

            {/* Start Intro Section */}
            <section className="intros mb-3" id="cakedesgins">

            <div className="container-fluid p-3">

                <div className="row">
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                        <img src="../src/assets/img/chococake1.jpg" alt="browine2" width="100%" />
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                          <img src="../src/assets/img/chococake2.jpg" alt="cupcakes1" width="100%"/>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                          <img src="../src/assets/img/chococake3.jpg" alt="heartshape1" width="100%"/>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                        <img src="../src/assets/img/chococake4.jpg" alt="browine2" width="100%" />
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                          <img src="../src/assets/img/chococake5.jpg" alt="cupcakes1" width="100%"/>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                          <img src="../src/assets/img/heartshape1.jpg" alt="heartshape1" width="100%"/>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                          <img src="../src/assets/img/heartshape1.jpg" alt="heartshape1" width="100%"/>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                          <img src="../src/assets/img/heartshape3.jpg" alt="heartshape1" width="100%"/>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                          <img src="../src/assets/img/heartshape2.jpg" alt="heartshape1" width="100%"/>
                    </div>
               </div>

           </div>
           
           
            </section>
            {/* End Intro Section  */}
        </>
    )

};

export default CakedesginPage;