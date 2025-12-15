import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import banner from "../assets/img/banner.jpg"
import image1 from "../assets/img/cookies1.jpg"
import image2 from "../assets/img/cookies5.jpg"
import image3 from "../assets/img/cookies3.jpg"
import image4 from "../assets/img/cookies4.jpg"

const CookiePage = () => {

    const cookies = [
        { id: 1, image: image1, title: "Original New York Cookies", price: "2500MMK" },
        { id: 2, image: image2, title: "Double Chocolate New York Cookies", price: "2500MMK" },
        { id: 3, image: image3, title: "Matcha New York Cookies", price: "2500MMK" },
        { id: 4, image: image4, title: "Red Velvet New York Cookies", price: "2500MMK" },
        { id: 5, image: image4, title: "Original New York Cookies", price: "2500MMK" },
        { id: 6, image: image3, title: "Double Chocolate New York Cookies", price: "2500MMK" },
        { id: 7, image: image2, title: "Matcha New York Cookies", price: "2500MMK" },
        { id: 8, image: image1, title: "Red Velvet New York Cookies", price: "2500MMK" },
    ]

    return (
        <>
            {/* Banner */}
            <section className="text-center d-flex justify-content-center align-items-center" style={{
                marginTop: "90px",        
                marginBottom: "80px",     
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
                 }} >

                        <div className="col-md-12 mb-4 mb-md-0">
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

            </section>

            {/* Start Intro Section */}
            <section className="p-4 cookies">

                <div className="container-fluid">

                    

                    
                
                </div>

            </section>
            {/* End Intro Section  */}
        </>
    )

};

export default CookiePage;