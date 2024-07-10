import React, { useEffect } from 'react';
import anime from 'animejs';
const Skills = () => {
    const skills = [
        {
            name: "JavaScript",
            image: '/images/js.png'
        },
        {
            name: "HTML",
            image: '/images/html.png'
        },
        {
            name: "CSS",
            image: '/images/css.png'
        },
        {
            name: "Bootstrap",
            image: '/images/bootstrap.png'
        },
        {
            name: "jQuery",
            image: '/images/jquery.png'
        },

        {
            name: "React JS & React Native",
            image: '/images/react.png',
            padding: true,
        },
        {
            name: "Node.JS",
            image: '/images/node.png'
        },
        {
            name: "Material UI",
            image: '/images/mui.jpg'
        },
        {
            name: "Tailwind CSS",
            image: '/images/tail.jpeg'
        },
        {
            name: "Vue.js",
            image: '/images/vue.png'
        },
        {
            name: "Typescript",
            image: '/images/typescript.png'
        },
        {
            name: "Cypress",
            image: '/images/cypress.jpeg'
        },
        {
            name: "PHP",
            image: '/images/php.png'
        },
        {
            name: "Laravel",
            image: '/images/laravel.jpg'
        },
        {
            name: 'Linux',
            image: '/images/linux.png',
            padding: true,
        },
        {
            name: 'Drupal CMS',
            image: '/images/drupal.png',
            padding: true,
        },
        {
            name: 'MySQl',
            image: '/images/mysql.svg'
        },
        {
            name: "Android Apps",
            image: '/images/android.png'
        },
        {
            name: "iOS Apps",
            image: '/images/apple.png'
        },

        {
            name: 'Java Spring Boot',
            image: '/images/java.png',
            padding: true,
        },
        {
            name: 'Gitlab CI/CD',
            image: '/images/gitlab.png',
            padding: true,
        },
        {
            name: 'Github',
            image: '/images/github.png',
            padding: true,
        },

        {
            name: 'Docker Containerization',
            image: '/images/docker.png',
            padding: true,
        },
        {
            name: 'Nginx',
            image: '/images/nginx.png',
            padding: true,
        },
        {
            name: 'Google SEO',
            image: '/images/search.png',
            padding: true,
        },
        {
            name: 'AWS',
            image: '/images/web.png',
            padding: true,
        },

        {
            name: 'Anime JS',
            image: '/images/animejs.jpg',
        },
        {
            name: 'Firebase',
            image: '/images/firebase.webp',
        },
        {
            name: "Lottie Animation",
            image: '/images/lottie.png'
        },
        {
            name: "RESTful APIS",
            image: '/images/postman.png',
            padding: true,
        },
        {
            name: "Expo",
            image: '/images/expo.png'
        },
        {
            name: "Flutter",
            image: '/images/flutter.png',
            padding: true,
        },

    ];
    return (
        <div className='container-fluid p-5'>
            <h1 className='text-center mt-3'>Technologies, I work with..</h1>
            <div className="row ">
                <div className="col-md-5 d-none d-lg-block">
                    <lottie-player src="/animations/skills.json" speed="1" loop="" autoplay="">
                    </lottie-player>
                </div>
                <div className="col-md-12 col-lg-7 tech-skills mt-4 px-lg-5 py-lg-5"
                    style={{
                        padding: '0.1rem',
                        marginBottom: '1rem',
                        textAlign: 'center'
                    }}
                >
                    {
                        skills.map((item, index) => {
                            return (
                                <span key={index}>
                                    <img className='m-2 el' src={item.image} alt={item.name} width={70} height={70}
                                        title={item.name}
                                        style={{
                                            padding: item.padding ? '7px' : 'auto',
                                        }}
                                    />
                                </span>

                            );
                        })
                    }
                </div>
                <div className="col-12">
                    <marquee behavior="scrolling">
                        {
                            skills.map((item, index) => {
                                return (
                                    <span key={index}>
                                        <strong
                                            className='mx-2'
                                            style={{
                                                color: '#FFF',
                                                textDecoration:'underline'
                                            }}
                                        >{item.name}</strong>

                                    </span>

                                );
                            })
                        }
                    </marquee>
                </div>
            </div>
        </div>
    );
}
export default Skills;