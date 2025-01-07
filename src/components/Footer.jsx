import React, { useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import contact from "./lotties/contact.json";
import FAQ from './FAQ';
const Footer = () => {
    const lottieRef = useRef();
    useEffect(() => {
        lottieRef.current.play();
    }, []);
    return (
        <div>
            <div className='container'
                onMouseEnter={()=>{
                    lottieRef.current.stop();
                    lottieRef.current.play();

                }}
            >
                <h1 className='pt-5'>you can find me at..</h1>
                <div className="row">
                    <div className="col-md-6 d-none d-lg-block">
                        <Lottie
                            lottieRef={lottieRef}
                            animationData={contact}
                            loop={false}
                            autoplay={false}
                        />
                    </div>

                    <div className="col-md-6 p-5">
                        <h5>
                            <p>
                                I'm always excited to connect with new people, collaborate on projects, and discuss innovative ideas. Whether you have a question, a business proposal, or just want to say hello, feel free to reach out.
                            </p>
                            <p>
                                I am available at your request and eager to assist you with your needs.
                            </p>
                            <p>
                                I can speak Telugu, Hindi, German and ofcourse English. You can reach me @
                            </p>
                        </h5>
                        <ul className='contact-links'>
                            <li>
                                <span>
                                    <img src="/images/email.png" alt="" />
                                    <a href="mailto:mohan.velegacherla@gmail.com">mohan.velegacherla@gmail.com</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src="/images/whatsapp.png" alt="" />
                                    <a href="http://web.whatsapp.com/send/?phone=918074966828&text=Hello" target="_blank" rel="noopener noreferrer">+91 8074966828</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src="/images/git.png" alt="" />
                                    <a href="https://github.com/mohan1149" target="_blank" rel="noopener noreferrer">@mohan1149</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src="/images/medium.png" alt="" />
                                    <a href="https://medium.com/@mohan.velegacherla" target="_blank" rel="noopener noreferrer">@mohan.velegacherla</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src="/images/linkedin.png" alt="" />
                                    <a href="https://www.linkedin.com/in/mohan-velegacherla-820aab1a2/" target="_blank" rel="noopener noreferrer">mohan-velegacherla</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src="/images/xing.png" alt="" />
                                    <a href="https://www.xing.com/profile/Mohan_Velegacherla" target="_blank" rel="noopener noreferrer">Mohan_Velegacherla</a>
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="block-wave">
                {/* <svg className='wave-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#404040" fillOpacity="1" d="M0,160L0,128L38.9,128L38.9,224L77.8,224L77.8,128L116.8,128L116.8,288L155.7,288L155.7,0L194.6,0L194.6,288L233.5,288L233.5,224L272.4,224L272.4,288L311.4,288L311.4,64L350.3,64L350.3,192L389.2,192L389.2,32L428.1,32L428.1,96L467,96L467,256L505.9,256L505.9,128L544.9,128L544.9,32L583.8,32L583.8,288L622.7,288L622.7,192L661.6,192L661.6,64L700.5,64L700.5,64L739.5,64L739.5,160L778.4,160L778.4,96L817.3,96L817.3,128L856.2,128L856.2,256L895.1,256L895.1,224L934.1,224L934.1,192L973,192L973,160L1011.9,160L1011.9,160L1050.8,160L1050.8,256L1089.7,256L1089.7,160L1128.6,160L1128.6,160L1167.6,160L1167.6,256L1206.5,256L1206.5,64L1245.4,64L1245.4,96L1284.3,96L1284.3,128L1323.2,128L1323.2,96L1362.2,96L1362.2,256L1401.1,256L1401.1,96L1440,96L1440,320L1401.1,320L1401.1,320L1362.2,320L1362.2,320L1323.2,320L1323.2,320L1284.3,320L1284.3,320L1245.4,320L1245.4,320L1206.5,320L1206.5,320L1167.6,320L1167.6,320L1128.6,320L1128.6,320L1089.7,320L1089.7,320L1050.8,320L1050.8,320L1011.9,320L1011.9,320L973,320L973,320L934.1,320L934.1,320L895.1,320L895.1,320L856.2,320L856.2,320L817.3,320L817.3,320L778.4,320L778.4,320L739.5,320L739.5,320L700.5,320L700.5,320L661.6,320L661.6,320L622.7,320L622.7,320L583.8,320L583.8,320L544.9,320L544.9,320L505.9,320L505.9,320L467,320L467,320L428.1,320L428.1,320L389.2,320L389.2,320L350.3,320L350.3,320L311.4,320L311.4,320L272.4,320L272.4,320L233.5,320L233.5,320L194.6,320L194.6,320L155.7,320L155.7,320L116.8,320L116.8,320L77.8,320L77.8,320L38.9,320L38.9,320L0,320L0,320Z"></path></svg> */}
            </div>
            <div className="terminal">
                <FAQ/>
            </div>
            <p>[![](https://visitcount.itsvg.in/api?id=mohan1149&icon=0&color=0)](https://visitcount.itsvg.in)</p>
        </div>
        // <div className='container-fluid p-0 m-0'>
        //     <div className="row container-fluid m-0 p-0">
        //         <div className="col-md-6 m-0 p-0 footer-content"
        //             style={{
        //                 overflow: 'hidden',
        //                 textAlign: 'center'
        //             }}
        //         >
        //             <img ref={svgRef} src='/animations/globe.svg' />
        //         </div>
        //         <div className="col-md-6">
        //             <h2>sw</h2>
        //         </div>
        //     </div>
        //    
        // </div>
    );
}

export default Footer;