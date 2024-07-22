import React from 'react';

const Services = () => {
    return (
        <div className='container-fluid pb-5'>
            <h1 className='mb-3 pt-5 px-5'>I can help you in...</h1>
            <div className="row px-3">
                <div className="col-md-4 p-0">
                    <div className="g-card services">
                        <div className='text-center p-2'>
                            <img src='/images/www.png' width={'80rem'} />
                        </div>
                        <h4>Web Applications</h4>
                        <h6 className='mt-2'>I design and develop Web Appliactions, PWAs, and SPAs with cutting edge web technologies like React JS, CSS3, Material UI and Bootstrap.</h6>
                    </div>
                </div>


                <div className="col-md-4 p-0">
                    <div className="g-card services">
                        <div className="text-center p-2">
                            <img src='/images/mobile.png' width={'80rem'} />
                        </div>
                        <h4>Mobile Applications</h4>
                        <h6 className='mt-2'>I build iOS and Android mobile appliactions with Hybrid Techologies like React Native, Flutter for all kinds of your businesses.</h6>
                    </div>
                </div>
                <div className="col-md-4 p-0">
                    <div className="g-card services">
                        <div className="text-center p-2">
                            <img src='/images/cart.png' width={'80rem'} />
                        </div>
                        <h4>E-Commerce Applications</h4>
                        <h6 className='mt-2'>I will make fully responsive and mobile friendly E-Commerce applications which will make you to reach all of your coustomers.</h6>
                    </div>
                </div>
                <div className="col-md-4 p-0">
                    <div className="g-card services">
                        <div className="text-center p-2">
                            <img src='/images/api.png' width={'80rem'} />
                        </div>
                        <h4>RESTFul APIs</h4>
                        <h6 className='mt-2'>I will develop robust and scalable RESTful APIs using Node.js and Express.js, ensuring efficient and secure data handling.</h6>
                    </div>
                </div>
                <div className="col-md-4 p-0">
                    <div className="g-card services">
                        <div className="text-center p-2">
                            <img src='/images/seo.png' width={'80rem'} />
                        </div>
                        <h4>SEO & Digital Marketing</h4>
                        <h6 className='mt-2'>I'm aimed to boost and promote your brand via different digital channels like social media networks, ad campaigns and emails.</h6>
                    </div>
                </div>
                <div className="col-md-4 p-0">
                    <div className="g-card services">
                        <div className="text-center p-2">
                            <img src='/images/maintenance.png' width={'80rem'} />
                        </div>
                        <h4>Support & Maintenance</h4>
                        <h6 className='mt-2'>I can support you in publishing apps to Stores and help you in deploying appication in AWS, GCP or On premises. .</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;