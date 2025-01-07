import React from 'react';
import { ArcherContainer, ArcherElement } from 'react-archer';
const Services = () => {
    const rootStyle = { display: 'flex', justifyContent: 'center' };
    const rowStyle = { margin: '200px 0', display: 'flex', justifyContent: 'space-between' };
    const boxStyle = { padding: '10px', border: '1px solid black' };
    return (
        <div className='container-fluid pb-5'>
            <h1 className='mb-3 pt-5 px-5'>I can help you in...</h1>
            <div className="row p-2 p-md-3 p-lg-5">
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
            <div style={{ height: '500px', margin: '50px' }} className='d-none d-lg-block'>
                <ArcherContainer strokeColor="red">
                    <div style={rootStyle}>
                        <ArcherElement
                            id="root"
                            relations={[
                                {
                                    targetId: 'element2',
                                    targetAnchor: 'top',
                                    sourceAnchor: 'bottom',
                                    style: {
                                        strokeColor: '#FFF',
                                        strokeWidth: 3
                                    },
                                    label: <div style={{
                                        marginTop: '-50px',
                                        color: '#fff',
                                        fontWeight: "bold"
                                    }}>Requirements</div>,
                                },
                            ]}
                        >
                            <div className='g-card services bg-white text-bold'>
                                <p>
                                    Website
                                </p>
                                <p>
                                    Mobile App
                                </p>
                            </div>
                        </ArcherElement>
                    </div>

                    <div style={rowStyle}>
                        <ArcherElement
                            id="element2"
                            relations={[
                                {
                                    targetId: 'element3',
                                    targetAnchor: 'left',
                                    sourceAnchor: 'right',
                                    style: { strokeColor: '#FFF', strokeWidth: 3 },
                                    label: <div style={{
                                        marginTop: '-30px',
                                        color: '#fff',
                                        fontWeight: "bold"
                                    }}>Planning & Start</div>,
                                },
                            ]}
                        >
                            <div>
                                <div className='g-card services bg-white text-bold'>
                                    <p>
                                        Gathering
                                    </p>
                                    <p>
                                        Analysis
                                    </p>
                                </div>
                            </div>
                        </ArcherElement>

                        <ArcherElement id="element3"
                            relations={[
                                {
                                    targetId: 'element4',
                                    targetAnchor: 'left',
                                    sourceAnchor: 'right',
                                    style: { strokeColor: '#FFF', strokeWidth: 3, strokeDasharray: '5,4' },
                                    label: <div style={{
                                        marginLeft: -40,
                                        marginTop: -40,
                                        color: '#fff',
                                        fontWeight: "bold"
                                    }}>Go Live</div>,
                                },
                            ]}
                        >
                            <div>
                                <div className='g-card services bg-white text-bold'>
                                    <p>
                                    Design & Development
                                    </p>
                                    <p>
                                        Testing
                                    </p>

                                </div>
                            </div>
                        </ArcherElement>
                        <ArcherElement
                            id="element4"
                            relations={[
                                {
                                    targetId: 'root',
                                    targetAnchor: 'right',
                                    sourceAnchor: 'left',
                                    style: { strokeColor: '#FFF', strokeWidth: 3, strokeDasharray: '5,4' },
                                    label: <div style={{
                                        marginLeft: 160,
                                        marginTop: -40,
                                        color: '#fff',
                                        fontWeight: "bold"
                                    }}>New Changes</div>,
                                },
                            ]}
                        >
                            <div>
                                <div className='g-card services bg-white text-bold'>
                                    <p>
                                        Publishing
                                    </p>
                                    <p>
                                        Deploymemt
                                    </p>
                                </div>
                            </div>
                        </ArcherElement>
                    </div>
                </ArcherContainer>
            </div>
        </div>
    );
}

export default Services;