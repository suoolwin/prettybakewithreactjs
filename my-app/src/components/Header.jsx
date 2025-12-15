import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faV } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
            {/* Start Back to Top */}
            <div className="fixed-bottom">

                <Link href="index.html" className="btn-backtotps"><FontAwesomeIcon icon="fa-solid fa-arrow-up" /></Link>

            </div>
            {/* End Back to Top  */}
            {/* Start Header Section  */}
        <header>
            {/* Start Nav Bar */}
           
            {/* End Nav Bar */}

            {/* Start Banner */}
                <div className="text-light text-center banners">
                    <h1 className="display-3 text-uppercase bannerheaders fw-bold">Pretty Bake is a homemade bakery.</h1>
                    <p className="lead bannerparagraphs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            {/* End Banner */}
           
        </header>
         {/* End Header Section  */}
        </>
    )
};

export default Header;