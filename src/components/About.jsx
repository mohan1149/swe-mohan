import React from 'react';
import Rabbit from './../animations/Rabbit';
const About = () => {
    return (
        <div className='container-fluid p-5'>
            <h1 className=''>Who am I ?</h1>
            <div className="row mt-4">
                <div className="col-md-7 d-sm-block d-xs-block d-lg-none d-md-none">
                    <div className="text-md">
                        <h5>
                            I'm a seasoned Full Stack Developer with 6.5 years of experience in crafting robust and scalable web applications. My expertise spans a wide range of technologies, including React JS, React Native, Redux, HTML 5, CSS, jQuery, Bootstrap, Node.js, Express.js, Next.js, PHP, Laravel, Nginx, and Git.
                        </h5>
                        <br />
                    </div>
                </div>
                <div className="col-md-7 d-none d-lg-block d-xl-block d-md-block">
                    <h5 className="text-md">
                        I'm a seasoned Full Stack Developer with 6.5 years of experience in  crafting robust and scalable web applications. My expertise spans a wide range of technologies, including React JS, React Native, Redux, HTML 5, CSS, jQuery, Bootstrap, Node.js, Express.js, Next.js, PHP, Laravel, Nginx, and Git.
                    </h5>
                    <br />
                    <h5 className="text-md">
                        Throughout my career, I have consistently delivered high-quality solutions, driving success for both startups and established enterprises. I am passionate about staying updated with the latest industry trends and continuously improving my skills.
                    </h5>
                    <br />
                    <h5 className='text-md d-none d-lg-block d-xl-block d-md-none'>
                        I thrive in collaborative environments and enjoy solving complex problems with innovative approaches. Whether it's building dynamic user interfaces or developing efficient server-side applications, I am committed to creating exceptional digital experiences.
                    </h5>
                    <br />
                    <h5 className='text-md'>
                        Let's connect and explore how we can work together to bring your vision to life!
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