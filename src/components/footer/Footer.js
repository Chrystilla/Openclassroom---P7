import React from 'react';
import '../footer/footer.css'
import logo from '../../assets/black_logo.svg'


const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo} alt='kasa logo' className='logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;