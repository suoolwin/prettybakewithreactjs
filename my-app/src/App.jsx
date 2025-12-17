import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage';
import CakedesginPage from "./pages/CakedesginPage.jsx";
import CookiePage from "./pages/CookiePage.jsx";
import BrowinePage from "./pages/BrowinePage.jsx";
import HomedelieveryPage from "./pages/HomedeliveryPage.jsx";
import WalkinshopPage from "./pages/WalkinshopPage.jsx";
import CartPage from './pages/CartPage.jsx';

function App() {


  return (
    <div className="App">

        
        <Navbar />

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/walkinshops" element={<WalkinshopPage />} />
            <Route path="/cakedesgins" element={<CakedesginPage />} />
            <Route path="/cookies" element={<CookiePage />} />
            <Route path="/browines" element={<BrowinePage />} />
            <Route path="/homedeliverys" element={<HomedelieveryPage />} />

            <Route path="/carts" element={<CartPage />} />
        </Routes>

        <Footer />

    </div>
  )
}

export default App
