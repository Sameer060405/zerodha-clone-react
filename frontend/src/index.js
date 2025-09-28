import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Landing_page/Home/HomePage";
import PricingPage from "./Landing_page/Pricing/PricingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Landing_page/signup/Signup";
import Product_page from "./Landing_page/Products/Product_page";
import AboutPage from "./Landing_page/About/AboutPage";
import SupportPage from "./Landing_page/Support/SupportPage";
import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import NotFound from "./Landing_page/NotFound";
import 'font-awesome/css/font-awesome.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product_page />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
