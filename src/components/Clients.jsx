import React from 'react';
import {Carousel} from 'react-bootstrap';
const Clients = () =>{
    return(
        <div className="p-5">
            <h3>Some of cool guys i have worked with....</h3>
            <div className="row m-2">
                <div className="col-md-6">
                    animations
                </div>
                <div className="col-md-6 p-3">
                    <Carousel>
                        <Carousel.Item className='carousel-item'>
                            <div>
                                {/* <img src="https://sahasinfo.com/assets/img/clients/moi.svg" alt="" /> */}
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>Item 2</Carousel.Item>
                        <Carousel.Item className='carousel-item'>Item 3</Carousel.Item>
                        <Carousel.Item className='carousel-item'>Item 4</Carousel.Item>
                        <Carousel.Item className='carousel-item'>Item 5</Carousel.Item>

                    </Carousel>
                </div>
            </div>

        </div>
    );
}

export default Clients;