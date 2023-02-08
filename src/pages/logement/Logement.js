import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../logement/logement.css'
import apiData from '../../data/apiData'
import Slideshow from '../../components/slideshow/Slideshow';


const Logement = () => {
    const [imageSlider, setImageSlider] = useState([]);

    const idLogement = useParams('id').id;
	const dataCurrentLogement = apiData.filter(data => data.id === idLogement);
	
	useEffect(() => {
		const dataCurrentLogement = apiData.filter(data => data.id === idLogement);
		setImageSlider(dataCurrentLogement[0].pictures);
	}, [idLogement]);

    return (
        <div>
            <Slideshow imageSlider={imageSlider}/>
        </div>
    );
};

export default Logement;