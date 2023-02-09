import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../logement/logement.css'
import apiData from '../../data/apiData'
import Slideshow from '../../components/slideshow/Slideshow';
import Collapse from '../../components/collapse/Collapse';


const Logement = () => {
    const [imageSlider, setImageSlider] = useState([]);

    //On récupère le parametre de l'URL de la page
    const {idLogement} = useParams();
    //Recherche de l'id ciblé dans le tableau des logements
    const dataCurrentLogement = apiData.find(data => data.id === idLogement);

	useEffect(() => { 
        //Déclenche la modification de imageSlider par les photos du logement ciblé
		setImageSlider(dataCurrentLogement.pictures);
    //Effet déclenché au moment où on récupère le parametre ID de l'URL
	}, [idLogement]);

    return (
        <div className='logement'>
            
            <Slideshow imageSlider={imageSlider}/>
            <section className='logement_header'>
                <div className='logement_content'>
                    <h2 className='logement_title'>{dataCurrentLogement.title}</h2>
                    <p className='logement_location'>{dataCurrentLogement.location}</p>
                    <div className='logement_tags'>
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
                    <p className='host_rating'>{dataCurrentLogement.rating}</p>
                </div>
            </section>

            <section className='logement_collapse'>
                <Collapse title={'Description'} text={dataCurrentLogement.description}/>
                <Collapse title={'Équipements'} text={dataCurrentLogement.equipments.map((équipement, index) => <li key={index}>{équipement}</li>)}/>
            </section>
        </div>
    );
};

export default Logement;