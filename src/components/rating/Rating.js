import React from 'react';
import '../rating/rating.css'
import red_star from '../../assets/red_star.svg'
import grey_star from '../../assets/grey_star.svg'

const Rating = ({hostRate}) => {
    //Construction d'un Array de 5 éléments qu'on rempli avec les étoiles
    const fullStars = Array(5).fill(<img src={red_star} alt='Full star' className='redStar'/>)
    const emptyStars = Array(5).fill(<img src={grey_star} alt='Empty Star' className='greyStar'/>)
    return (
        //Slice pour enlever le nombre d'étoiles
        //Map pour itérer le nombre d'étoiles
            <div className='ratingStars'>
                {fullStars.slice(5-hostRate).map((fullStar, index) => {
                return (<p key={index}>{fullStar}</p>)
                })}
                {emptyStars.slice(hostRate).map((emptyStar, index) => {
                return (<p key={index}>{emptyStar}</p>)
                })}
            </div>
    );
};

export default Rating;