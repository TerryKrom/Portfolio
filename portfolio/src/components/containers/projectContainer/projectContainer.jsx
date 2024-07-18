import React from 'react';
import './projectContainer.css';
import { Widget } from '../../widget/Widget';

const ProjectContainer = () => {
    return (  
        <>
            <div className="container row">
                    <h1 className='text-sm-center'>Projects</h1>
                    <Widget/>
            </div>
        </>
    );
}
 
export default ProjectContainer;