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
                {/* On applique le Layout sur toutes les Routes */}
                <Route element={<Layout/>}>
                    {/* Création d'une Route par path */}
                    <Route index element={<Home/>}/>

	                <Route path="/home" element={<Home/>}/>
	                <Route path="/about" element={<About/>}/>
	                <Route path="/logement/:idLogement" element={<Logement/>}/>
                    <Route path="/error" element={<Error/>}/>

	                {/*Path="*" fonctionne si l'URL ne correspond à rien de déclaré ci-dessus*/}
	                <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default Router;