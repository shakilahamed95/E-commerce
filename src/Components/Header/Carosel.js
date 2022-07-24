import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/banner1.jpg'
import banner2 from '../../Images/banner2.jpg'
import banner3 from '../../Images/banner3.jpg'

const Carosel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>The Best Place</h2>
                    <h4>Your Can Relay on !</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>The Best Place</h2>
                    <h4>Your Can Trust 100 % !</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2>The Best Place</h2>
                    <h4>For Your Shopping</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carosel;