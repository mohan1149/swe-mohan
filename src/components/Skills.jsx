import React from 'react';
import PowerGrid from '../animations/PowerGrid';
const Skills = () => {
    return (
        <div className='container-fluid p-5'>
            <h1 className='text-3xl'>What Skills I have ?</h1>
            <div className="row">
                <div className="col-md-5">
                    <PowerGrid />
                </div>
                <div className="col-md-7">
                   
                </div>

            </div>
        </div>
    );
}
export default Skills;