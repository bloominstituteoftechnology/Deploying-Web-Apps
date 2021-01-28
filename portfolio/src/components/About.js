import React from 'react';

const About = () =>{

    return(
        <section className='about-section'>
            <div className='about-text'>
                <p>Hi, I am Diego and I am Learning to become a Full Stack Web Developer. I am currently enrolled
                and going through Lambda's course.</p>
                <p>I have been coding now for 4 months and through Lambda I have learned multiple languages that deal with the front-end. At the end of the unit I will be going into Unit 4 for learning back-end development.</p>
                <p>I have loved coding for the feeling of solving and overcoming challenges.</p>
            </div>

            <div classname='skills'>
                <h3>Languages Learned</h3>
                <div classname='skills-container'>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default About;