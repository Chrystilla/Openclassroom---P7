import React from 'react';
import '../about/about.css'

import Banner from '../../components/banner/Banner';
import banner from '../../assets/banner_about.png'
import aboutData from '../../data/aboutData'
import Collapse from '../../components/collapse/Collapse';

const About = () => {

    return (
        <div className='about'>
            <Banner banner={banner}/>
            <main>
                {aboutData.map((data) => {
                    return (
                        <div key={data.id} className='about_collapse'>
                            <Collapse title={data.title} text={data.text}/>
                        </div>
                    )
                })}
            </main>
        </div>
    );
};

export default About;