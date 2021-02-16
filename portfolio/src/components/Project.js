import React from 'react';

const Project = ({project}) =>{

    return(
        <div className='project-wrapper' href='' target='_blank'>
            <p>{project.title}</p>
            <div>{project.imageUrl}</div>
            <p>{project.description}</p>
        </div>
    )
}

export default Project;
