import React from 'react';
import '../gallery/gallery.css'
import apiData from '../../api/apiData'
import Card from '../card/Card';

const Gallery = () => {
    return (
        <main className="gallery">
            {apiData.map((data) => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    );
};

export default Gallery;