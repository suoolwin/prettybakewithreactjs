import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import favicon from '../assets/img/icon.jpg';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg fixed-top">

                <Link to="/" className="navbar-brand text-light mx-3">
                    <img src={favicon} width="70" alt="favicon" />
                    <span className="text-uppercase h2 fw-bold mx-2">Pretty Bake</span>
                </Link>

                <button type="button" className="navbar-toggler navbuttons" data-bs-toggle="collapse" data-bs-target="#nav" >
                    <div className="bg-light lines1"></div>
                    <div className="bg-light lines2"></div>
                    <div className="bg-light lines3"></div>
                </button>

                <div id="nav" className="navbar-collapse collapse justify-content-end text-uppercase fw-bold">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item dropdown"><Link to="/" className="nav-link dropdown-toggle mx-2 menuitems" data-bs-toggle="dropdown">Delivery</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/homedeliverys" className="dropdown-item">Home Delivery</Link></li>
                                <li><Link to="/choosedeliverys" className="dropdown-item">Choose Delivery</Link></li>
                                <li><Link to="/deliveryforothers" className="dropdown-item">Delivery For Other</Link></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item"><Link to="/walkinshops" className="nav-link mx-2 menuitems" >Walk-in</Link></li>
                        <li className="nav-item"><Link to="/cakedesgins" className="nav-link mx-2 menuitems">Cakedesgin</Link></li>
                        <li className="nav-item"><Link to="/cookies" className="nav-link mx-2 menuitems">Cookies</Link></li>
                        <li className="nav-item"><Link to="/browines" className="nav-link mx-2 menuitems">Brownies</Link></li>
                        <li className="nav-item"><Link to="/contacts" className="nav-link mx-2 menuitems">contact</Link></li>
                    </ul>
                </div>

            </nav>
    )
};

export default Navbar;