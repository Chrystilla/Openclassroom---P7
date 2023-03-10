import React from 'react';
import { useState, useEffect  } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import '../logement/logement.css'
import apiData from '../../data/apiData'
import Slideshow from '../../components/slideshow/Slideshow';
import Collapse from '../../components/collapse/Collapse';
import Rating from '../../components/rating/Rating';


const Logement = () => {
    //On récupère le parametre ID de l'URL de la page avec le Hook useParams()
    const {idLogement} = useParams();
    //Recherche du logement ciblé grâce à l'id dans le tableau des logements
    const dataCurrentLogement = apiData.find(data => data.id === idLogement);

    const [imageSlider, setImageSlider] = useState([]);

	useEffect(() => {
        //Si l'id ciblé existe dans le tableau des logements
        if (dataCurrentLogement) {
       //Déclenche la modification de imageSlider par les photos du logement ciblé
		setImageSlider(dataCurrentLogement.pictures);
        }
    //Effet déclenché au moment où on récupère le parametre ID de l'URL
	}, [idLogement]);

    //Si l'id ciblé n'existe dans le tableau des logements => affichage de la page Erreur
    if (dataCurrentLogement == undefined) {
        return (
            <Navigate to="/error"/>
        )
    } else {
    //Sinon : Construction de la page
        return (
            <div className='logement'>
                
                <Slideshow imageSlider={imageSlider}/>
                <section className='logement_header'>
                    <div className='logement_content'>
                        <h2 className='logement_title'>{dataCurrentLogement.title}</h2>
                        <p className='logement_location'>{dataCurrentLogement.location}</p>
                        <div className='logement_tags'>
                            {/* On itère les tags de chaque logement avec .map() */}
                            {dataCurrentLogement.tags.map((tags, index) => {
                            return (<p key={index}>{tags}</p>)
                            })}
                        </div>
                    </div>

                    <div className='host_profil'>
                        <div className='host_name_picture'>
                            <p className='host_name'>{dataCurrentLogement.host.name}</p>
                            <img src={dataCurrentLogement.host.picture} className='host_picture' alt='host profilpic'/>
                        </div>
                        <Rating hostRate={dataCurrentLogement.rating}/>
                    </div>
                </section>

                <section className='logement_collapse'>
                    <Collapse title={'Description'} text={dataCurrentLogement.description}/>
                    <Collapse title={'Équipements'} text={dataCurrentLogement.equipments.map((équipement, index) => <li key={index}>{équipement}</li>)}/>
                </section>
            </div>
        )
    }
};

export default Logement;