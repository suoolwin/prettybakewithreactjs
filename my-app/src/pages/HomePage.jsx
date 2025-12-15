import React from "react";

import Header from "../components/Header";
import Adv from "../components/Adv";
import BackToTop from "../components/BackToTop";
import Clients from "../components/Clients";
import Cookies from "../components/Cookies";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const HomePage = ()=>{
    return(
        <>
            <Header />
            <Navbar />
            <Intro />

            <BackToTop />

            <Cookies />
            <Adv />
            <Services />
            <Clients />

        </>
    )
};

export default HomePage;
