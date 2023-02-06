import React from 'react';
import Banner from '../../components/banner/Banner';
import banner from '../../assets/banner_home.png'
import Gallery from '../../components/gallery/Gallery';


const Home = () => {
    return (
        <div className='home'>
            <Banner banner={banner} text='Chez vous, partout et ailleurs'/>
            <Gallery/>         
        </div>
    );
};

export default Home;