import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Logement from '../pages/logement/Logement'
import Error from '../pages/error/Error'
import Layout from '../pages/Layout';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Home/>}/>

	                <Route path="/home" element={<Home/>}/>
	                <Route path="/about" element={<About/>}/>
	                <Route path="/logement" element={<Logement/>}/>
	
	                <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default Router;