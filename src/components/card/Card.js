import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';


const Card = ({id, title, cover}) => {
        return (
            <Link to={`/logement/${id}`} className="card">
                <img src={cover} alt={title}/>
			    <h2>{title}</h2>
            </Link>
    );
};

export default Card;