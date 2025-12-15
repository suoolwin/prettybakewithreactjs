import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import lightbox from "lightbox2";

import banner from "../assets/img/banner.jpg"

import chococake1 from "../assets/img/chococake1.jpg"
import chococake2 from "../assets/img/chococake2.jpg"
import chococake3 from "../assets/img/chococake3.jpg"
import chococake4 from "../assets/img/chococake4.jpg"
import chococake5 from "../assets/img/chococake5.jpg"
import chococake6 from "../assets/img/heartshape1.jpg"
import chococake7 from "../assets/img/heartshape1.jpg"
import chococake8 from "../assets/img/heartshape3.jpg"
import chococake9 from "../assets/img/heartshape2.jpg"

const CakedesginPage = ()=>{

    const cakedesgins = [
            {id:1,image:chococake1},
            {id:2,image:chococake2},
            {id:3,image:chococake3},
            {id:4,image:chococake4},
            {id:5,image:chococake5},
            {id:6,image:chococake6},
            {id:7,image:chococake7},
            {id:8,image:chococake8},
            {id:9,image:chococake9},
        ]

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

            <section className="py-5">
            <div className="container-fluid">

                 
                <div className="text-center mb-3">
                    <div className="col">
                        <h3 className="titles">Properties</h3>
                    </div>
                </div>
                

                <ul className="list-inline text-start text-uppercase fw-bold">
                    <li className="list-inline-item propertylists activeitems" data-filter="all">All <span className="mx-3 mx-md-5 text-muted">/</span></li>
                    <li className="list-inline-item propertylists" data-filter="house">Cake <span className="mx-3 mx-md-5 text-muted">/</span></li>
                    <li className="list-inline-item propertylists" data-filter="decoration">CupCakes <span className="mx-3 mx-md-5 text-muted"></span></li>
                </ul>

                {/* <div className="container-fluid">
                    <div class="d-flex flex-wrap justify-content-center">
                        <div class="filters house"><a href="./src/assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 1"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image1"/></a></div>
                        <div class="filters house"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 2"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image2"/></a></div>
                        <div class="filters house"><a href="./assets/img/img/almondcookie.jgp" data-lightbox="property" data-title="Image 3"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image3"/></a></div>
                        <div class="filters decoration"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 4"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image4"/></a></div>
                        <div class="filters decoration"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 5"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image5"/></a></div>
                        <div class="filters decoration"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 6"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image6"/></a></div>
                        <div class="filters furniture"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 7"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image7"/></a></div>
                        <div class="filters furniture"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 8"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image8"/></a></div>
                        <div class="filters furniture"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 9"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image9"/></a></div>\
                        <div class="filters office"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 10"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image10"/></a></div>
                        <div class="filters office"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 11"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image11"/></a></div>
                        <div class="filters office"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 12"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image12"/></a></div>
                        <div class="filters decoration"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 13"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image13"/></a></div>
                        <div class="filters decoration"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 14"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image14"/></a></div>
                        <div class="filters house"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 15"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image15"/></a></div>
                        <div class="filters furniture"><a href="./assets/img/img/almondcookie.jpg" data-lightbox="property" data-title="Image 16"><img src="./assets/img/img/almondcookie.jpg" width="200px" alt="image16"/></a></div>
                    </div>
                </div> */}

            </div>
        </section>

            {/* Start Intro Section */}
            <section className="intros mb-3" id="cakedesgins">

            <div className="container-fluid p-3">

                <div className="row">

                    {
                        cakedesgins.map((cakedesgin)=>(
                            <div key={cakedesgin.id} className="col-lg-4 col-sm-12 mb-3"> 
                                <img src={cakedesgin.image} alt="browine2" width="100%" />
                            </div>
                        ))
                    }
                    
                    
               </div>



           </div>
           
           
            </section>
            {/* End Intro Section  */}
        </>
    )

};

export default CakedesginPage;