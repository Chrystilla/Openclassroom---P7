import React from 'react';
import Banner from '../../components/banner/Banner';
import banner from '../../assets/banner_about.png'

const About = () => {
    return (
        <div className='home'>
            <Banner banner={banner}/>
            About !
        </div>
    );
};

export default About;