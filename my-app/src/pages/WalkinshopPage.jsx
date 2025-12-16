import React from "react";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faHeart,faCartShopping } from "@fortawesome/free-solid-svg-icons";

import browine from "../assets/img/browine1.jpg"
import image1 from "../assets/img/img/almondcookie.jpg"
import image2 from "../assets/img/img/applepie.jpg"
import image3 from "../assets/img/img/brookie.jpg"
import image4 from "../assets/img/img/browine.jpg"
import image5 from "../assets/img/img/burntcheesecake.jpg"
import image6 from "../assets/img/img/carrotcake.jpg"
import image7 from "../assets/img/img/cinnamnroll.jpg"
import image8 from "../assets/img/img/doublechocolatecookie.jpg"
import image9 from "../assets/img/img/frenchchocolatemoussee.jpg"
import image10 from "../assets/img/img/matchablondie.jpg"
import image11 from "../assets/img/img/matchacookie.jpg"
import image12 from "../assets/img/img/matchadarkcookie.jpg"
import image13 from "../assets/img/img/oatmealcookie.jpg"
import image14 from "../assets/img/img/originalcookie.jpg"
import image15 from "../assets/img/img/overloadchocolatemuffins.jpg"
import image16 from "../assets/img/img/redvelvetdarkcookie.jpg"
import image17 from "../assets/img/img/redvelvetslice.jpg"
import image18 from "../assets/img/img/triamisu.jpg"
import image19 from "../assets/img/img/almondcookie.jpg"
import image20 from "../assets/img/img/applepie.jpg"
import image21 from "../assets/img/img/brookie.jpg"
import image22 from "../assets/img/img/browine.jpg"
import image23 from "../assets/img/img/burntcheesecake.jpg"
import image24 from "../assets/img/img/carrotcake.jpg"
import image25  from "../assets/img/img/cinnamnroll.jpg"
import image26 from "../assets/img/img/doublechocolatecookie.jpg"
import image27 from "../assets/img/img/frenchchocolatemoussee.jpg"

const PAGESIZE = 8;

const WalkinshopPage = ()=>{

    const [page,setPage] = useState(1);

    const walkinshops = [
        {id:1,image:image1,title:"Almondcookie",price:"3000MMK"},
        {id:2,image:image2,title:"ApplePie",price:"6000MMK"},
        {id:3,image:image3,title:"Brookie",price:"2500MMK"},
        {id:4,image:image4,title:"Browine",price:"2500MMK"},
        {id:5,image:image5,title:"BurntCheeseCake",price:"10000MMK"},
        {id:6,image:image6,title:"CarrotCake",price:"5000MMK"},
        {id:7,image:image7,title:"Cinnamnroll",price:"5000MMK"},
        {id:8,image:image8,title:"DoubleChocolate",price:"3000MMK"},
        {id:9,image:image9,title:"Frenchchocolate",price:"7000MMK"},
        {id:10,image:image10,title:"MatchBlondie",price:"2500MMK"},
        {id:11,image:image11,title:"Matcha",price:"2500MMK"},
        {id:12,image:image12,title:"MatchDark",price:"2500MMK"},
        {id:13,image:image13,title:"OatMealCookie",price:"2000MMK"},
        {id:14,image:image14,title:"OriginalCookie",price:"2000MMK"},
        {id:15,image:image15,title:"ChocolateMuffinis",price:"5000MMK"},
        {id:16,image:image16,title:"RedvelvetDark",price:"3000MMK"},
        {id:17,image:image17,title:"RedVelvetSlice",price:"7000MMK"},
        {id:18,image:image18,title:"tramisu",price:"10000MMK"},
        {id:19,image:image19,title:"Almondcookie",price:"3000MMK"},
        {id:20,image:image20,title:"ApplePie",price:"6000MMK"},
        {id:21,image:image21,title:"Brookie",price:"2500MMK"},
        {id:22,image:image22,title:"Browine",price:"2500MMK"},
        {id:23,image:image23,title:"BurntCheeseCake",price:"10000MMK"},
        {id:24,image:image24,title:"CarrotCake",price:"5000MMK"},
        {id:25,image:image25,title:"Cinnamnroll",price:"5000MMK"},
    ]

    const totalPages = Math.ceil(walkinshops.length / PAGESIZE);
    const pageItems = walkinshops.slice((page-1) * PAGESIZE, page * PAGESIZE); 

    useEffect(()=>{
        if(page > totalPages) setPage(1);
    },[page,totalPages]);

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
                <div className="container bg-white bg-opacity-50 rounded">
                    <h1 className="display-6">Eat something Sweet!!!</h1>
                    <p className="lead">"Life is too short to skip cake"</p>


                    {/* search box  */}

                    <div className="mx-auto mt-3" style={{maxWidth:880}}>

                        <div className="input-group p-3">
                            <input type="text" name="query" className="form-control form-control-lg" style={{ outline:"none",boxShadow:"none"}} placeholder="Search by Item Name" />
                            <span className="input-group-text"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></span>
                        </div>

                    </div>

                </div>

            </section>

            {/* Start Intro Section */}
            <section id="product-cards">
                <div className="container">
                    <h1 className="mt-5 text-center">Walk in Home Shop</h1>

                    <div className="row mt-5">

                        {
                            pageItems.map((walkinshop)=>(
                                <div key={walkinshop.id} className="col-md-3 py-3 py-md-2">
                                    <div className="card product-card">
                                        <div className="overlay">
                                            <button type="button" className="btn btn-secondary" title="Quick Shop">
                                                <FontAwesomeIcon icon={faEye} />
                                            </button>
                                            <button type="button" className="btn btn-secondary" title="Add to Wishlist">
                                                <FontAwesomeIcon icon={faHeart} />
                                            </button>
                                            <button type="button" className="btn btn-secondary" title="Add to Cart">
                                                <FontAwesomeIcon icon={faCartShopping} />
                                            </button>
                                        </div>

                                        <img src={walkinshop.image} className="card-img-top" alt="cake" />

                                        <div className="card-body">
                                            <h3 className="card-title">{walkinshop.title}</h3>

                                            <div className="star mb-2">
                                                <i className="fas fa-star checked"></i>
                                                <i className="fas fa-star checked"></i>
                                                <i className="fas fa-star checked"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <p className="card-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </p>

                                            <h6 className="text-end">{walkinshop.price}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))  
                        }

                    </div>
                </div>

                {/* pagination  */}
                {
                    totalPages > 1 && (
                        <nav className="mt-4">
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                                    <button className="page-link" onClick={()=>setPage((curpage)=>Math.max(1,curpage-1))}><FontAwesomeIcon icon="fa-solid fa-angles-left" /></button>
                                </li>
                                {
                                    Array.from({length:totalPages}).map((_,idx)=>(
                                        <li className={`page-item ${page === idx+1 ? "active":""}`} key={idx}>
                                            <button className="page-link" onClick={()=>setPage(idx+1)}>{idx+1}</button>
                                        </li>
                                    ))
                                }
                                <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                                    <button className="page-link" onClick={()=>setPage((curpage)=>Math.min(totalPages,curpage+1))}><FontAwesomeIcon icon="fa-solid fa-angles-right" /></button>
                                </li>
                            </ul>
                        </nav>
                    )
                }
            </section>

            {/* End Intro Section  */}
        </>
    )

};

export default WalkinshopPage;