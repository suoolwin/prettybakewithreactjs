import React from "react";

import image1 from "../assets/img/cookies1.jpg"
import image2 from "../assets/img/cookies5.jpg"
import image3 from "../assets/img/cookies3.jpg"
import image4 from "../assets/img/cookies4.jpg"

const Cookies = () => {

    const cookies = [
        {
            id:1,
            image:image1,
            title:"Original New York Cookies",
            price:"2500MMK"
        },
        {
            id:2,
            image:image2,
            title:"Double Chocolate New York Cookies",
            price:"2500MMK"
        },
        {
            id:3,
            image:image3,
            title:"Matcha New York Cookies",
            price:"2500MMK"
        },
        {
            id:4,
            image:image4,
            title:"Red Velvet New York Cookies",
            price:"2500MMK"
        },
    ]

    return (
        <>
            {/* Start Cookies Section  */}
            <section className="p-4 cookies">

                <div className="container-fluid">

                    {/* start title  */} 
                    <div className="mb-3">
                        <div className="col">
                            <h1 className="titles">Cookies</h1>
                        </div>
                    </div>

                    {/* end title  */}

                    <div className="row">
                        
                            {
                                cookies.map((cookie)=>(
                                    <div key={cookie.id} className="col-lg-3 col-md-3 col-sm-12 mb-3">
                                        <div className="card border-0 rounded-0 cookiescards">
                                        
                                            <img src={cookie.image} alt="image1" width="100%"/>
                                    
                                            <h5 className="text-uppercase fw-bold pt-5 d-flex justify-content-center align-content-center headings">{cookie.title}</h5>
                                            <span className="d-flex justify-content-end p-2">{cookie.price}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        
                    </div>

                </div>
            
            </section>
        {/* End Cookies Section  */}
        </>
    )
};

export default Cookies;