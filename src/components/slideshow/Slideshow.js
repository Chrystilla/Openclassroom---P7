import React, { useState } from 'react';
import '../slideshow/slideshow.css'
import arrow_back from '../../assets/arrow_back.png'
import arrow_forward from '../../assets/arrow_forward.png'


const Slideshow = ({imageSlider}) => {

    //On fixe l'index de la slide sur laquelle nous sommes
    const[currentIndex, setCurrentIndex] = useState(0)

    const goToPrevSlide = () => {
        const isFirstSlide = currentIndex === 0
        // Si nous sommes sur la 1ère slide : jump sur la dernière slide, sinon slide -1
        const newIndex = isFirstSlide ? imageSlider.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNextSlide = () => {
        const isLastSlide = currentIndex === imageSlider.length - 1
        // Si nous sommes sur la dernière slide : jump sur la 1ère slide, sinon slide +1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className='slideshow' style={{ backgroundImage: `url("${imageSlider[currentIndex]}")`}}>
            {imageSlider.length > 1 && 
                <>
                    <div className='arrow'>
                        <img src={arrow_back} className='arrow_back' alt="show previous slide" onClick={goToPrevSlide}/>
                        <img src={arrow_forward} className='arrow_forward' alt="show next slide" onClick={goToNextSlide}/>
                    </div>
                    <p className='slide_count'>{currentIndex + 1}/{imageSlider.length}</p>
                </>
            }
        </div>
    );
};

export default Slideshow;