
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
const Experience = () => {
    const events = [
        {
            status: 'Lead SWE @ Diyar United',
            date: 'Dec 2020',
            icon: 'pi pi-shopping-cart',
            color: '#9C27B0',
            image: 'game-controller.jpg',
            text: 'Promoted as Lead SWE, architected,designed, developed and published several mobile and web applications. Build robust API services and gained expert level skills on SDLC and led teams, fostering collaboration and driving projects to successful completion.',
        },
        {
            status: 'Senior SWE @ owlconcepts',
            date: 'Jun 2020',
            icon: 'pi pi-cog',
            color: 'red',
            text: "Moved to owlconcepts, developed Mobile Applicstions, E-Commerce Applications and obtained skills on REST APIs, CI/CD, Docker, Cloud Platforms and Security."
        },
        {
            status: 'Associate Developer @ Infanion',
            date: 'Apr 2018',
            icon: 'pi pi-shopping-cart',
            color: '#FF9800',
            text: "Joined as Associate Software Developer and build few web applications and gained soild understanding of Web Servers and Responsive designs."
        },
        {
            status: 'Graduated from AITS',
            date: 'Mar 2018',
            icon: 'pi pi-check',
            color: '#607D8B',
            text: "Completed Bachelor's Engineering  in Computer Science and Engineering with 7.75 CCPA"
        }
    ];
    const customizedMarker = (item) => {
        return (

            <span className="f"
                style={{
                    backgroundColor: item.color,
                    height: 40,
                    width: 40,
                    borderRadius: 30,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <span
                    style={{
                        backgroundColor: '#FFF',
                        height: 30,
                        width: 30,
                        borderRadius: 20,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <span
                        style={{
                            backgroundColor: '#000',
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <span
                            style={{
                                backgroundColor: '#FFF',
                                height: 10,
                                width: 10,
                                borderRadius: 5,
                                display: 'inline-block',
                            }}
                        >
                        </span>
                    </span>
                </span>
            </span>

        );
    };

    const customizedContent = (item) => {
        return (
            <div className='g-card'>
                <h4>{item.status}</h4>
                <h6
                    className='expDate'
                >{item.date}</h6>
                <h5
                >{item.text}</h5>
            </div>
        );
    };
    return (
        <div className="p-5" style={{
            backgroundColor: '#404040'
        }}>
            <h1>Something more about me..</h1>
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}

export default Experience;

