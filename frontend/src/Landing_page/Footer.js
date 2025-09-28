import React from 'react';
function Footer() {
    return ( 
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src = 'media/logo.svg' style = {{width:"50%"}} />
                    <p>
                        &copy; 2010-2024, Not Zerodha Booking Ltd. All rights reserved.
                    </p>
                </div>
                <div className='col' style = {{textDecoration:"none"}}>
                    <p>Company</p>
                    <a href = '' style = {{textDecoration:"none"}}>About</a><br/>
                    <a href = '' style = {{textDecoration:"none"}}>Products</a><br/>
                    <a href = '' style = {{textDecoration:"none"}}>Pricing</a><br/>
                    <a href = '' style = {{textDecoration:"none"}}>Education</a><br/>
                    <a href = '' style = {{textDecoration:"none"}}>Press & Media</a><br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href ='' style = {{textDecoration:"none"}}>Contact Us</a><br/>
                    <a href ='' style = {{textDecoration:"none"}}>Support portal</a><br/>
                    <a href ='' style = {{textDecoration:"none"}}>Z Connect Blog</a><br/>
                    <a href ='' style = {{textDecoration:"none"}}>List of Charges</a><br/>
                    <a href ='' style = {{textDecoration:"none"}}>Downloads and Resources</a><br/>

                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href ='' style = {{textDecoration:"none"}}>Open an Account</a><br/>
                    <a href ='' style = {{textDecoration:"none"}}>Fund Transfer</a><br/>
                    <a href ='' style = {{textDecoration:"none"}}>60 day Challenge</a><br/>
                </div>
                <div className='mt-5 fs-8'>
                <p className='text-muted'>
                    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

                </p>
                <p className='text-muted'>
                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>
                <p className='text-muted'>
                    Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p>
            </div>
            </div>
        </div>
     );
}

export default Footer;