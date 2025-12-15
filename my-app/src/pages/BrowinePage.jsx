import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import browine from "../assets/img/browine1.jpg"
import image1 from "../assets/img/browine1.jpg"
import image2 from "../assets/img/browine4.jpg"
import image3 from "../assets/img/browine3.jpg"
import image4 from "../assets/img/browine4.jpg"

const BrowinePage = ()=>{

    const browines = [
        {id:1,image:image1,title:"Browine",price:"2500MMK"},
        {id:2,image:image2,title:"Browine 1 Box",price:"12500MMK"},
        {id:3,image:image3,title:"Browine 6 pic",price:"16000MMK"},
        {id:4,image:image4,title:"Browine",price:"2500MMK"},
        {id:5,image:image4,title:"Browine",price:"2500MMK"},
        {id:6,image:image3,title:"Browine 1 Box",price:"12500MMK"},
        {id:7,image:image2,title:"Browine 6 pic",price:"16000MMK"},
        {id:8,image:image1,title:"Browine",price:"2500MMK"},
    ]

    return(
        <>
            {/* Banner */}
            <section className="text-center d-flex justify-content-center align-items-center" style={{
                minHeight:"70vh",
                backgroundImage:`url(${browine})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat"
            }}>
                <div className="container-fluid bg-light bg-opacity-50 rounded text-dark text-center banners">
                    {/* <h1 className="display-3 text-uppercase bannerheaders fw-bold">Pretty Bake is a homemade bakery.</h1> */}
                    <p className="lead bannerparagraphs fs-2">A chocolate brownie, or simply a brownie, is a chocolate baked dessert bar. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density. Brownies often, but not always, have a glossy "skin" on their upper crust..</p>
                </div>

            </section>

            {/* Start Intro Section */}
            <section className="p-4 bestsellers" id="browinedesgin">

                <div className="container-fluid">

                    {/* start title  */}
                        <div className="mb-3">
                            <div className="col">
                                <h1 className="fw-bold titles">Browine</h1>
                            </div>
                        </div>
                    {/* end title  */}

                        <div className="row">

                            {
                                browines.map((browine)=>(
                                    <div key={browine.id} className="col-lg-3 col-md-4 col-sm-6 mb-3 p-5">

                                        <div className="card border-0 rounded-0 cookiescards">
                                            
                                                <img src={browine.image} alt="image1" width="300px"/>
                                        
                                                <h5 className="d-flex justify-content-center align-items-center text-uppercase fw-bold pt-5 headings">{browine.title}</h5>
                                                <span className="d-flex justify-content-end p-2">{browine.price}</span>
                                        </div>

                                    </div>
                                ))
                            }
            

                        </div>

                </div>

                
                <div className="row align-items-center">

                    <div className="col-md-6 mb-4 mb-md-0">
                        <div id="photoSlider" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={image1} className="d-block w-100" alt="Photo 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={image2} className="d-block w-100" alt="Photo 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={image3} className="d-block w-100" alt="Photo 3" />
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#photoSlider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#photoSlider" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h2 className="mb-3">Browine</h2>
                        <p>
                            A brownie is a rich, dense, chocolate baked dessert bar that falls somewhere between a cake and a cookie in texture. Originating in the United States, it is typically cut into squares or rectangles and is loved for its deep chocolate flavor. 
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>

                </div>
            
        </section>
            {/* End Intro Section  */}
        </>
    )

};

export default BrowinePage;