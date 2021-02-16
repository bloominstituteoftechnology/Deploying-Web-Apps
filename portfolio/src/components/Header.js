import React from 'react';
import portrait from '../assests/portrait.png';
import github from '../assests/Github-512.png';
import linkedIn from '../assests/linkedin.png';

const Header = () =>{

    return(
        <div className='header'>
            <div className='img-container'>

            </div>
            <div>
                <h1>DIEGO ROMAN</h1>
                < a href='https://github.com/Diegormnv' target='_blank'>
                    <img className='links' src={github} alt='github' />
                </a>
                <a href='https://www.linkedin.com/in/diego-roman-743897142/' target='_blank'>
                    <img className='links' src={linkedIn} alt='LinkedIn'/>
                </a>    
            </div>
            
        </div>
    )
};

export default Header;