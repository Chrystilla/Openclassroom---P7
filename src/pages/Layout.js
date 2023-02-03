import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../pages/layout.css';

const Layout = () => {
    return (
        <div className='layout'>
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Layout;