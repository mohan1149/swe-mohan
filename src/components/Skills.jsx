import React, { useEffect } from 'react';
import anime from 'animejs';
const Skills = () => {
    useEffect(() => {
        // anime({
        //     targets: '.tech-skills > .el',
        //     easing: 'easeInOutQuad',
        //     scale: 2,
        //     loop:true,
        // });
    });
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
            name: "bootstrap",
            image: '/images/bootstrap.png'
        },
        {
            name: "react",
            image: '/images/react.png',
            padding: true,
        },
        {
            name: "node",
            image: '/images/node.png'
        },
        {
            name: "mui",
            image: '/images/mui.jpg'
        },
        {
            name: "tail",
            image: '/images/tail.jpeg'
        },
        {
            name: "vue",
            image: '/images/vue.png'
        },
        {
            name: "typescript",
            image: '/images/typescript.png'
        },
        {
            name: "cypress",
            image: '/images/cypress.jpeg'
        },
        {
            name: "php",
            image: '/images/php.png'
        },
        {
            name: "laravel",
            image: '/images/laravel.jpg'
        },
        {
            name: 'Linux',
            image: '/images/linux.png',
            padding: true,
        },
        {
            name: 'Linux',
            image: '/images/drupal.png',
            padding: true,
        },
        {
            name: 'mySQl',
            image: '/images/mysql.svg'
        },
        {
            name: "android",
            image: '/images/android.png'
        },
        {
            name: "ios",
            image: '/images/ios.png'
        },
       

      
        {
            name: 'Linux',
            image: '/images/java.png',
            padding: true,
        },
        {
            name: 'Linux',
            image: '/images/gitlab.png',
            padding: true,
        },
        {
            name: 'Linux',
            image: '/images/github.png',
            padding: true,
        },

        {
            name: 'Linux',
            image: '/images/docker.png',
            padding: true,
        },
        {
            name: 'Linux',
            image: '/images/nginx.png',
            padding: true,
        },
        {
            name: 'Linux',
            image: '/images/search.png',
            padding: true,
        },
        {
            name: 'Linux',
            image: '/images/web.png',
            padding: true,
        },

        {
            name: 'Linux',
            image: '/images/animejs.jpg',
        },
        {
            name: 'Firebase',
            image: '/images/firebase.webp',
        },
        {
            name:"Lottie",
            image:'/images/lottie.png'
        }
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
                        padding: '1rem',
                        marginBottom: '2rem'
                    }}
                >
                    {
                        skills.map((item, index) => {
                            return (
                                <span key={index}>
                                    <img className='m-2 el' src={item.image} alt="" width={70} height={70} 
                                        style={{
                                            padding: item.padding ? '7px' : 'auto',
                                        }}
                                    />
                                </span>

                            );
                        })
                    }
                </div>

            </div>
        </div>
    );
}
export default Skills;