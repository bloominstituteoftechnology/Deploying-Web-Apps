import React from 'react';
import portrait from '../assests/portrait.png';
import github from '../assests/Github-512.png';
import linkedIn from '../assests/linkedin.png';

const Header = () =>{

    return(
        <div className='header'>
            <div className='img-container'>
                <img src={portrait}  alt='portrait'/>
            </div>
            <div>
                <h1>DIEGO ROMAN</h1>
                <img className='links' src={github} alt='github' />
                <img className='links' src={linkedIn} alt='LinkedIn'/>
            </div>
            
        </div>
    )
};

export default Header;