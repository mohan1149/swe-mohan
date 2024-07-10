import anime from 'animejs';
import React, { useEffect } from "react";
const Intro = () => {
    const stars = 150;
    const viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const getRandomX = () => {
        return Math.floor(Math.random() * Math.floor(viewPortWidth)).toString();
    }
    const getRandomY = () => {
        return Math.floor(Math.random() * Math.floor(viewPortHeight)).toString();
    }
    const randomRadius = () => {
        return Math.random() * 0.9 + 1.3;
    };
    const starryNight = () => {
        anime({
            targets: ["#sky .star"],
            opacity: [
                {
                    duration: 100,
                    value: "0"
                },
                {
                    duration: 500,
                    value: "1"
                }
            ],
            easing: "linear",
            loop: true,
            delay: (el, i) => 50 * i
        });
    };
    const shootingStars = () => {
        anime({
            targets: ["#shootingstars .wish"],
            easing: "linear",
            loop: true,
            delay: (el, i) => 200 * i,
            opacity: [
                {
                    duration: 500,
                    value: "1"
                }
            ],
            width: [
                {
                    value: "250px"
                },
                {
                    value: "0px"
                }
            ],
            translateX: 450
        });
    };


    useEffect(() => {
        starryNight();
        shootingStars();
    }, []);

    return (
        <div id="intro-content" className=''>
            <svg id="sky">
                {[...Array(stars)].map((x, y) => (
                    <circle
                        cx={getRandomX()}
                        cy={getRandomY()}
                        r={randomRadius()}
                        stroke="none"
                        strokeWidth="0"
                        fill="white"
                        key={y}
                        className="star"
                    />
                ))}
            </svg>
            <div className=""
                style={{
                    position: 'absolute',
                    width: '99vw',
                    textAlign: 'center',
                    top: '10rem',
                }}
            >
                <h1
                    style={{
                        fontSize: '3rem'
                    }}
                >Hello, I'm Mohan.</h1>
                <h2 className=''>Lets build something amazing..</h2>
            </div>
            {/* <div id="shootingstars">
                {[...Array(150)].map((x, y) => (
                    <div
                        key={y}
                        className="wish"
                        style={{
                            left: `${getRandomY()}px`,
                            top: `${getRandomX()}px`
                        }}
                    />
                ))}

            </div> */}
        </div>
    );
}
export default Intro;