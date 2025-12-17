import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faHeart,faCartShopping, faCartPlus, faArrowLeft,faShoppingCart,faTag,faTrash } from "@fortawesome/free-solid-svg-icons";

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

const CartPage = ()=>{

    const navigate = useNavigate()
    const [carts,setCarts] = useState([]);
 
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
        {id:26,image:image26,title:"doublechocolate",price:"5000MMK"},
        {id:27,image:image27,title:"frenchchocolate",price:"5000MMK"},
    ];

    useEffect(()=>{
        const getcarts = JSON.parse(localStorage.getItem("cart")) || [];
        setCarts(getcarts);
    },[]);

    const removeHandler = (productid)=>{
        const updatecart = carts.filter(cart => cart.id !== productid);
        setCarts(updatecart);
        localStorage.setItem("cart",JSON.stringify(updatecart));
    };

    const clearHandler = (id)=>{
        setCarts([]);
        localStorage.removeItem("cart");
    };


    const qtychangeHandler = (productid,delta)=>{

        const updatecart =  carts.map(cart=>( cart.id === productid ? {...cart,qty: Math.max(1,(cart.qty || 1)+delta)} : cart ));

        setCarts(updatecart);
        localStorage.setItem("cart",JSON.stringify(updatecart));

    };

    const total = carts.reduce((sum, cart) => {
    const price = Number(cart.price.toString().replace(/[^\d]/g, ""));
        return sum + price * (cart.qty || 1);
    }, 0);


    if(carts.length === 0){
        return (
            <div className="container text-center py-5">
                <h4>Your cart is empty</h4>
                <button type="button" className="btn btn-outline-secondary mb-4" onClick={()=>navigate("/furnitures")}><FontAwesomeIcon icon={faArrowLeft} /> Back to Shop</button>
            </div>
        )
    }


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
                    <p className="lead">The secret ingredient is always love</p>
                </div>

            </section>

            <section className="container py-5">

                    <button type="button" className="btn btn-outline-secondary mb-4" onClick={()=>navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>


                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4><FontAwesomeIcon icon={faShoppingCart} className="me-2" /> Your Cart</h4>
                        <button type="button" className="btn btn-danger btn-sm" onClick={clearHandler}>Clear Cart</button>
                    </div>

                    {/* products cards  */}
                    <div className="row g-4">

                        {
                            carts.map(cart=>(
                                <div key={cart.id} className="col-lg-4 col-md-6  text-center">

                                    <div className="card h-100 shadow-sm">
                                        <img src={cart.image} className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} alt={cart.title}
/>
                                        <div className="card-body d-flex flex-column">
                                            <span className="card-title">{cart.title}</span>
                                            <span className="card-muted small">{cart.description?.substring(0,70)}...</span>
                                            
                                            <div className="d-flex justify-content-between mt-auto">

                                                <span className="fw-bold text-success">
                                                    <FontAwesomeIcon icon={faTag} className="me-1" /> {Number(cart.price.toString().replace(/[^\d]/g, "")).toLocaleString()} MMK
                                                </span>

                                                {/* Qty Control  */}
                                                <div className="d-flex align-items-center mt-2">
                                                    <button type="button" className="btn btn-sm btn-outline-dark rounded-circle d-flex justify-content-center align-items-center" style={{width:"20px",height:"20px"}} onClick={()=>qtychangeHandler(cart.id,-1)}> - </button>
                                                    <small className="fw-bold mx-2">Qty: {cart.qty || 1}</small>
                                                    <button type="button" className="btn btn-sm btn-outline-dark rounded-circle d-flex justify-content-center align-items-center" style={{width:"20px",height:"20px"}} onClick={()=>qtychangeHandler(cart.id,1)}> + </button>
                                                </div>

                                                <button className="btn btn-sm btn-outline-danger" onClick={()=>removeHandler(cart.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                                
                                            </div>
                                        </div>

                                    </div>

                                    

                                </div>
                            ))
                        }

                    </div>

                    
                    {/* Cart Total  */}
                    <div className="bg-light rounded shadow-sm p-4 mt-5">
                        <h4>Total : <span className="text-success">{total.toLocaleString()} MMK</span></h4>
                        <button type="button" className="btn btn-dark mt-3" onClick={()=>navigate("/checkout")} >Proceed to Checkout</button>
                    </div>

            </section>
        </>
    )

};

export default CartPage;