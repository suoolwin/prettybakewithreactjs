import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (

        <footer>
            <div className="container-fluid py-4 px-4">
                
                <div className="row justify-content-between linkeds">
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-3 fw-bold text-uppercase p-5">
                        <h5 className="mb-3">Visit Us</h5>
                        <Link href="javascript:void(0);" className="linkeds">No.144, MayKha Street, Pyin Oo Lwin.</Link>

                        <h6 className="pt-2">Tues:8AM - 2PM</h6>
                        <h6>Weds:8AM - 2PM</h6>
                        <h6>Thurs:8AM - 2PM</h6>
                        <h6>Fri:8AM - 2PM</h6>
                        <h6>Sat:8AM - 2PM</h6>
                        <h6>Closed Sundays,Mondays & Public Holidays</h6>
                    </div>

                    <div className="col-6 col-lg-2 mb-3 p-5">
                        <ul className="list-unstyled footerlinks text-uppercase">
                            <li><Link href="/" className="links">Home</Link></li>
                            <li><Link href="/" className="links">Delivery</Link></li>
                            <li><Link href="/cakedesgin" className="links">Cakedesgin</Link></li>
                            <li><Link href="/cookies" className="links">Cookies</Link></li>
                            <li><Link href="/browines" className="links">Brownies</Link></li>
                            <li><Link href="/contacts" className="links">contact</Link></li>
                        </ul>
                    </div>

                    

                    <div className="text-dark d-flex justify-content-between border-top pt-4">
                        <p> &copy; <span id="getyear">2000</span> Copyright. Inc,All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li><Link to="https://www.tiktok.com/@prettybake22?_r=1&_t=ZS-92ElCMDF8Fx" class="nav-link"><FontAwesomeIcon icon="fa-brands fa-tiktok" /></Link></li>
                            <li class="ms-3"><Link href="javascript:void(0);" class="nav-link"><FontAwesomeIcon icon="fa-brands fa-instagram" /></Link></li>
                            <li class="ms-3"><Link href="https://www.facebook.com/profile.php?id=100077507237076&mibextid=LQQJ4d" class="nav-link"><FontAwesomeIcon icon="fa-brands fa-facebook" /></Link></li>
                            <li class="ms-3"><Link href="javascript:void(0);" class="nav-link"><FontAwesomeIcon icon="fa-brands fa-youtube" /></Link></li>
                        </ul>
                     
                    </div>

                </div>

            </div>
        </footer>

    )
};

export default Footer;