import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id = 'supportHero'>
            <div className=' p-5' id = 'supportWrapper'>
                <h5>Support Portal</h5>
                <a href ='' style = {{textDecoration:'none'}}>Track Tickets</a>
            </div>
            <div className='row p-5 m-3'>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do i activate F&Q'/><br/>
                    <a href = ''className='p-2'>Track account Opening</a>
                    <a href = ''className='p-2'>Track segment activation</a>
                    <a href = ''className='p-2'>Intraday margins</a><br/>
                    <a href = ''className='p-2'>Kite user manual</a>

                </div>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li> <a href = ''>Current Takeovers and Delistings</a></li>
                        <li><a href = ''>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                    

                </div>
                
            </div>
        </section>
     );
}

export default Hero;