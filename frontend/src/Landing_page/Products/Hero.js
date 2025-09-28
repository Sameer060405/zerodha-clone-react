import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-4 mb-5 p-5'>
            <div className='row'>
                <h1 className='text-center mb-3'>Technology</h1>
                <h4 className='text-center text-muted'>Sleek,modern and intutive trading platforms.</h4>
                <h6 className='text-center'>Check out our <a href = '' style = {{textDecoration:"none"}}>investment offerings<i class="fa fa-long-arrow-right" aria-hidden = "true"></i></a></h6>
            </div>
        </div>
        
     );
}

export default Hero;