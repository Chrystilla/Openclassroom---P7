import React from 'react';
import Banner from '../../components/banner/Banner';
import banner from '../../assets/banner_home.png'

const Home = () => {
    return (
        <div className='home'>
            <Banner banner={banner} text='Chez vous, partout et ailleurs'/>
            Home !
        </div>
    );
};

export default Home;