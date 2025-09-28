import React from 'react';

function RightImage({imageURL, productName, productDescription, tryDemo, learnMore}) {
    return ( 
        <div className='container border-top mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1 className='mb-3'style = {{marginright:"100px"}}>{productName}</h1>
                    <p style = {{marginright:"100px"}}>{productDescription}</p>
                    <div>
                    
                    <a href = {learnMore} style={{marginright:"100px"}}>Learn More</a>
                    </div>
                   

                </div>
                <div className='col-6'>
                    <img src = {imageURL}/>
                </div>
                
            </div>
        </div>
        
     );
}

export default RightImage;