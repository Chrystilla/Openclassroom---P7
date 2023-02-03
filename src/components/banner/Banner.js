import React from 'react';
import '../banner/banner.css'

const Banner = ({banner, text}) => {
    return (
        <div className='banner'>
            <img src={banner} alt="banner"></img>
            <h1>{text}</h1>
        </div>
    );
};

export default Banner;