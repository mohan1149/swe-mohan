import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Projects = () => {
    const projectsList = [
        {
            'title': 'MA Store',
            'type': 'Mobile Applications (iOS & Android)',
            'size': 'col-md-4',
            'description': 'MA Store, an innovative mobile application designed to simplify the process of purchasing and managing gift cards and online vouchers. With an integrated e-wallet feature, Giftly provides a seamless and secure experience for users to buy, send, and track gift cards from a wide range of popular brands and retailers. The app also offers exclusive online vouchers, personalized recommendations, and real-time order tracking, making it the go-to solution for all gifting needs.',
            'images': [],
        },
        {
            'title': 'Smart Parking Q8',
            'type': 'Mobile Applications (iOS & Android)',
            'size': 'col-md-4',
            'description': "Smart Parking Q8 is a cutting-edge mobile application designed to streamline the process of finding and booking parking spots. Whether you need a space in a public lot, commercial parking garage, or an individual’s driveway, Smart Parking Q8 offers a seamless and convenient solution. With real-time availability, secure payments, and easy navigation, Smart Parking Q8 is the ultimate tool for hassle-free parking.",
            'images': [],
        },
        {
            'title': 'ePOS Admin',
            'type': 'Mobile Application (iOS)',
            'size': 'col-md-4',
            'description': 'ePOS Admin is a powerful and intuitive mobile application designed to serve as the administrative hub for point of sale (POS) systems. It provides business owners and managers with comprehensive tools to oversee and manage sales operations, inventory, staff, and customer data from anywhere. With real-time analytics, secure access, and efficient management features, POSAdmin ensures smooth and efficient business operations',
            'images': [],
        },
        {
            'title': 'Ooredoo My Business',
            'type': 'Mobile Applications (iOS & Android)',
            'size': 'col-md-4',
            'description': 'ePOS Admin is a powerful and intuitive mobile application designed to serve as the administrative hub for point of sale (POS) systems. It provides business owners and managers with comprehensive tools to oversee and manage sales operations, inventory, staff, and customer data from anywhere. With real-time analytics, secure access, and efficient management features, POSAdmin ensures smooth and efficient business operations',
            'images': [],
        },
        {
            'title': 'iTenant',
            'type': 'Web Application (Real Estate)',
            'size': 'col-md-4',
            'description': 'ePOS Admin is a powerful and intuitive mobile application designed to serve as the administrative hub for point of sale (POS) systems. It provides business owners and managers with comprehensive tools to oversee and manage sales operations, inventory, staff, and customer data from anywhere. With real-time analytics, secure access, and efficient management features, POSAdmin ensures smooth and efficient business operations',
            'images': [],
        },
        {
            'title': 'Bliss Q8',
            'type': 'Web Application(E-Commerce)',
            'size': 'col-md-4',
            'description': 'ePOS Admin is a powerful and intuitive mobile application designed to serve as the administrative hub for point of sale (POS) systems. It provides business owners and managers with comprehensive tools to oversee and manage sales operations, inventory, staff, and customer data from anywhere. With real-time analytics, secure access, and efficient management features, POSAdmin ensures smooth and efficient business operations',
            'images': [],
        },
        {
            'title': 'Mishari Hajj',
            'type': 'Web Application',
            'size': 'col-md-4',
            'description': 'ePOS Admin is a powerful and intuitive mobile application designed to serve as the administrative hub for point of sale (POS) systems. It provides business owners and managers with comprehensive tools to oversee and manage sales operations, inventory, staff, and customer data from anywhere. With real-time analytics, secure access, and efficient management features, POSAdmin ensures smooth and efficient business operations',
            'images': [],
        },
        {
            'title': 'Ooredoo DLMS',
            'type': 'Web & Mobile Applications',
            'size': 'col-md-4',
            'description': 'ePOS Admin is a powerful and intuitive mobile application designed to serve as the administrative hub for point of sale (POS) systems. It provides business owners and managers with comprehensive tools to oversee and manage sales operations, inventory, staff, and customer data from anywhere. With real-time analytics, secure access, and efficient management features, POSAdmin ensures smooth and efficient business operations',
            'images': [],
        },
        {
            'title': 'Baladiya VMS',
            'type': 'Web Application',
            'size': 'col-md-4',
            'description': 'ePOS Admin is a powerful and intuitive mobile application designed to serve as the administrative hub for point of sale (POS) systems. It provides business owners and managers with comprehensive tools to oversee and manage sales operations, inventory, staff, and customer data from anywhere. With real-time analytics, secure access, and efficient management features, POSAdmin ensures smooth and efficient business operations',
            'images': [],
        },
        
    ];
    return (
        <div className='p-5'>
            <h1 className='mb-3'>projects I have completed...</h1>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>
                    {
                        projectsList.map((item, index) => {
                            return (
                                <PojectWork item={item} key={index} />
                            );
                        })
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}

const PojectWork = (data) => {
    const item = data.item;
    return (
        <div>
            <div className="g-card">
                {/* <div>
                    <button
                        style={{
                            backgroundColor: '#FFF',
                            color: '#000',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            border: 'none',
                            borderRadius: 5,
                            float: 'right'
                        }}
                    >&#9974;</button>
                </div> */}
                <h3 className='mb-1'>{item.title}</h3>
                <h6>{item.type}</h6>
                <hr
                    style={{
                        color: '#FFF'
                    }}
                />

                <p
                    style={{
                        color: '#FFF'
                    }}
                >{item.description}</p>
            </div>
        </div>
    );
}
export default Projects;