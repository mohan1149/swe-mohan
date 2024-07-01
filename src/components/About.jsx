import React from 'react';
import Rabbit from './../animations/Rabbit';
const About = () => {
    return (
        <div className='container-fluid p-5'>
            <h1 className=''>Who am I ?</h1>
            <div className="row mt-4">
                <div className="col-md-7">
                    <h5 className="text-md">As a highly skilled and experienced mobile and web application developer with over 6 years in the industry, I specialize in React Native, React JS, TypeScript,Node JS and other bunch of JavaScript frameworks.</h5>
                    <br />
                    <h5 className="text-md">
                        With a proven track record of delivering high-quality applications that meet client expectations, I am passionate about developing user-friendly and efficient solutions that help businesses achieve their goals.
                        Throughout my career, I have been involved in the development of numerous successful projects, from concept to deployment.
                    </h5>
                    <br />
                    <h5 className='text-md'>
                        I have a deep understanding of the software development life cycle and have honed my skills in project management, team collaboration, and problem-solving.
                        As a developer, I am always eager to take on new challenges and push the boundaries of what's possible in application development.
                    </h5>
                    <br />
                    <h5 className='text-md'>
                        I am committed to staying up-to-date with the latest technologies and industry trends to ensure that my clients receive the best possible solutions for their needs.
                    </h5>
                </div>
                <div className="col-md-4">
                    <Rabbit />
                </div>
            </div>
        </div>
    );
}
export default About;