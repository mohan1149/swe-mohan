import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Projects = () => {
    const projectsList = [
        {
            'title': 'MA Store',
            'type': 'Mobile Applications (iOS & Android)',
            'size': 'col-md-4',
            'description': 'MA Store, an innovative mobile application designed to simplify the process of purchasing and managing gift cards and online vouchers. With an integrated e-wallet feature, it provides a seamless and secure experience for users to buy, send, and track gift cards from a wide range of popular brands and retailers.',
            'images': [],
        },
        {
            'title': 'Smart Parking Q8',
            'type': 'Mobile Applications (iOS & Android)',
            'size': 'col-md-4',
            'description': "Smart Parking Q8 is a cutting-edge mobile application designed to streamline the process of finding and booking parking spots. Whether you need a space in a public lot, commercial parking garage, or an individual’s driveway, Smart Parking Q8 offers a seamless and convenient solution. With real-time availability, secure payments, and easy navigation.",
            'images': [],
        },
        {
            'title': 'ePOS Admin',
            'type': 'Mobile Application (iOS)',
            'size': 'col-md-4',
            'description': 'ePOS Admin is a powerful and intuitive mobile application designed to serve as the administrative hub for point of sale (POS) systems. It provides business owners and managers with comprehensive tools to oversee and manage sales operations, inventory, staff, and customer data from anywhere. With real-time analytics, secure access, and efficient management features.',
            'images': [],
        },
        {
            'title': 'Ooredoo My Business',
            'type': 'Mobile Applications (iOS & Android)',
            'size': 'col-md-4',
            'description': 'My Business, a comprehensive mobile application for Ooredoo, a leading telecommunications company. This app empowers Ooredoo customers to manage various aspects such as Plan Usage, Line Status, Add-ons and Bundles  of their accounts with ease and convenience.',
            'images': [],
        },
        {
            'title': 'iTenant',
            'type': 'Web Application (Real Estate)',
            'size': 'col-md-4',
            'description': 'iTeanant is a sophisticated web application designed to assist real estate owners in efficiently managing their properties and tenants. This application provides a comprehensive suite of tools to streamline property management processes, offering both convenience and efficiency to property owners and managers.',
            'images': [],
        },
        {
            'title': 'Bliss Q8',
            'type': 'Web Application(E-Commerce)',
            'size': 'col-md-4',
            'description': 'A robust e-commerce application dedicated to selling organic beauty products for face and body. This platform provides an engaging and seamless shopping experience, promoting natural and eco-friendly skincare and cosmetic products',
            'images': [],
        },
        {
            'title': 'Ooredoo DLMS',
            'type': 'Web & Mobile Applications',
            'size': 'col-md-4',
            'description': 'An integrated web and mobile application designed to manage delivery orders, inventory, and driver tracking. This solution provides a comprehensive platform for businesses to streamline their delivery operations, ensuring efficient order management, accurate inventory tracking, and real-time driver monitoring.',
            'images': [],
        },
        {
            'title': 'Mishari Hajj',
            'type': 'Web Application',
            'size': 'col-md-4',
            'description': 'A web application designed to streamline the operations of travel agencies. This application assists travel agencies in managing their customers, utilities, expenses, and trips, providing a centralized platform for efficient and organized operations',
            'images': [],
        },
        
        {
            'title': 'Baladiya VMS',
            'type': 'Web Application',
            'size': 'col-md-4',
            'description': 'The complte web application to manage companies, issue warnings and violations, and streamline workflow processes. This platform provides a centralized system to ensure regulatory compliance, enhance transparency, and improve operational efficiency.',
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