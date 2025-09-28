import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import Footer from '../Footer';
import Navbar from '../Navbar';
import openAccount from "../OpenAccount";

function PricingPage() {
    return ( 
        <>
        <Hero />
        <openAccount />
        <Brokerage />
        
        </>
     );
}

export default PricingPage;