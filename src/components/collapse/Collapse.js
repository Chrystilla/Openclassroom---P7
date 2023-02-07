import React from 'react';
import '../collapse/collapse.css'
import arrow from '../../assets/arrow.png'
import { useState } from 'react';

const Collapse = ({id, title, text}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='collapse'>
            <div className='collapse_header' onClick={() => setIsOpen(!isOpen)}>
                    <h3>{title}</h3>
                    <img src={arrow} alt='fleche' className={isOpen ? 'arrow-up' : 'arrow-down'}/>
            </div>

            <div className='collapse_content'>
                {isOpen ? (<p>{text}</p>
                ) : (
                    null
                )}
            </div>
        </div>
    )
};

export default Collapse;