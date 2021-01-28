import React from 'react';
import portrait from '../assests/portrait.png'

const Header = () =>{

    return(
        <div className='header'>
            <div className='img-container'>
                <img src={portrait}  alt='portrait'/>
            </div>
            <h1>DIEGO ROMAN</h1>
        </div>
    )
};

export default Header;