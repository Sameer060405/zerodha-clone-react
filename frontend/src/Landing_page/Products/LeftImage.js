import React from 'react';

function LeftImage({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container border-top mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src = {imageURL}/>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='mb-3'style = {{marginLeft:"100px"}}>{productName}</h1>
                    <p style = {{marginLeft:"100px"}}>{productDescription}</p>
                    <div>
                    <a href = {tryDemo} style = {{textdecoration:"none", marginLeft:"100px"}}className='mb-3'>Try demo</a>
                    <a href = {learnMore} style = {{textdecoration:"none", marginLeft:"150px"}}className='mb-3'>Learn More</a>
                    </div>
                    <div className='mt-3'>
                    <a href = {googlePlay} style = {{textdecoration:"none", marginLeft:"100px"}}><img src = 'media/googlePlayBadge.svg'/></a>
                    <a href = {appStore} style = {{textdecoration:"none", marginLeft:"80px"}}><img src = 'media/appStoreBadge.svg'/></a>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default LeftImage;