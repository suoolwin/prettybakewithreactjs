import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faHeart,faCartShopping } from "@fortawesome/free-solid-svg-icons";

import browine from "../assets/img/browine1.jpg"



const WalkinshopPage = ()=>{

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

            </section>

            {/* Start Intro Section */}
            <section id="product-cards">
                <div class="container">
                    <h1 class="mt-5 text-center">Walk in Home Shop</h1>

                    <div class="row mt-5">

                        
                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 py-3 py-md-2">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 py-3 py-md-0">
                            <div class="card product-card">
                                <div class="overlay">
                                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button type="button" class="btn btn-secondary" title="Add to Cart">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>

                                <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg" 
                                    class="card-img-top" alt="cake" />

                                <div class="card-body">
                                    <h3 class="card-title">CAKES</h3>

                                    <div class="star mb-2">
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star checked"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>

                                    <p class="card-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>

                                    <h6 className="text-end">
                                        $50.10 
                                    </h6>
                                </div>
                            </div>
                        </div>

                

                    </div>
                </div>
            </section>

            {/* End Intro Section  */}
        </>
    )

};

export default WalkinshopPage;