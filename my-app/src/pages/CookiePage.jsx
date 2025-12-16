import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import banner from "../assets/img/backgroundc.jpg"
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
                            minHeight:"100vh",
                            backgroundImage:`url(${banner})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            backgroundRepeat:"no-repeat"
                        }}>
                            <div className="text-dark text-center text-white banners">
                                <h1 className="display-3 text-uppercase bannerheaders fw-bold">Pretty Bake is a homemade bakery.</h1>
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