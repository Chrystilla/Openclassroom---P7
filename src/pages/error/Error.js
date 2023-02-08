import React from 'react';
import { Link } from 'react-router-dom';
import '../error/error.css'

const Error = () => {
    return (
        <div className='error'>
				<p className='error_number'>404</p>
				<p className='error_content'>Oups! La page que vous recherchez n'existe pas.</p>
				<p className='error_return'><Link to='/'>Retourner sur la page d'accueil</Link></p>
        </div>
    );
};

export default Error;