import React from 'react';
import '../gallery/gallery.css'
import apiData from '../../data/apiData'
import Card from '../card/Card';

const Gallery = () => {
    return (
        <main className="gallery">
            {/* Iteration du contenu d'apiData */}
            {apiData.map((logement) => {
                
                {/*Sous le format défini dans le composant Card*/}
                return (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                )
            })}
        </main>
    );
};

export default Gallery;