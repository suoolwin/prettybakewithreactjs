import React from "react";

import image1 from "../assets/img/browine1.jpg"
import image2 from "../assets/img/browine4.jpg"
import image3 from "../assets/img/browine3.jpg"
import image4 from "../assets/img/browine4.jpg"
import image5 from "../assets/img/chococake1.jpg"
import image6 from "../assets/img/chococake2.jpg"
import image7 from "../assets/img/chococake3.jpg"
import image8 from "../assets/img/chococake4.jpg"
import image9 from "../assets/img/cookies1.jpg"
import image10 from "../assets/img/cookies3.jpg"
import image11 from "../assets/img/cookies4.jpg"
import image12 from "../assets/img/cookies5.jpg"
import image13 from "../assets/img/heartshape1.jpg"
import image14 from "../assets/img/heartshape2.jpg"
import image15 from "../assets/img/heartshape3.jpg"
import image16 from "../assets/img/heartshape1.jpg"

const Services = () => {

    const bestsellers = [
        {id:1,image:image1,title:"Browine",price:"2500MMK"},
        {id:2,image:image2,title:"Browine 1 Box",price:"12500MMK"},
        {id:3,image:image3,title:"Browine 6 pic",price:"16000MMK"},
        {id:4,image:image4,title:"Browine",price:"2500MMK"},
        {id:5,image:image5,title:"Chocolate Cake 4\"",price:"35000MMK"},
        {id:6,image:image6,title:"Red Velvet Cake 4\"",price:"35000MMK"},
        {id:7,image:image7,title:"Chocolate Cake 6\"",price:"50000MMK"},
        {id:8,image:image8,title:"Red Velvet Cake 6\"",price:"50000MMK"},
        {id:9,image:image9,title:"Cookie",price:"2500MMK"},
        {id:10,image:image10,title:"Originale Cookie",price:"2500MMK"},
        {id:11,image:image11,title:"Double Cookie",price:"2500MMK"},
        {id:12,image:image12,title:"Red Velvet Cookie",price:"2500MMK"},
        {id:13,image:image13,title:"Heart Shape Chocolate Cake",price:"25000MMK"},
        {id:14,image:image14,title:"Heart Shape Red Velvet Cake",price:"25000MMK"},
        {id:15,image:image15,title:"Cake with Roses",price:"25000MMK"},
        {id:16,image:image16,title:"Heart Shape Cake",price:"25000MMK"},
    ]

    return (
        <>
           {/* Start Services Section  */}
            <section className="p-4 bestsellers" id="browinedesgin">

                <div className="container-fluid">

                    {/* start title  */}
                    <div className="mb-3">
                        <div className="col">
                            <h1 className="fw-bold titles">Best Seller</h1>
                        </div>
                    </div>
                    {/* end title  */}

                    <div className="row">

                        {
                            bestsellers.map((bestseller)=>(
                                <div key={bestseller.id}  className="col-lg-3 col-md-4 col-sm-6 mb-3 p-5"  id="cookiesdesgin">

                                    <div className="card border-0 rounded-0 cookiescards">
                                        
                                            <img src={bestseller.image} style={{objectFit:"cover"}} alt="image1" width="300px"/>
                                    
                                            <h5 className="d-flex justify-content-center align-items-center text-uppercase fw-bold pt-5 headings">{bestseller.title}</h5>
                                            <span className="d-flex justify-content-end p-2">{bestseller.price}</span>
                                    </div>

                                </div>
                            ))
                        }


                    </div>

                </div>
            
            </section>
        {/* End Services Section  */}
        </>
    )
};

export default Services;