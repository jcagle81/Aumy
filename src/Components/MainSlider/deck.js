import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import one from './one.jpg'
import two from './two.jpg'
import four from './four.jpg'
import five from './five.jpg'
import six from './six.jpg'
import seven from './seven.jpg'
import eight from './eight.jpg'
import nine from './nine.jpg'
import './deck.css'

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showIndicators={false} stopOnHover swipeable>
                <div>
                    <img src={one} />
                </div>
                <div>
                    <img src={two} />
                </div>
                <div>
                    <img src={four} />
                </div>
                <div>
                    <img src={five} />
                </div>
                <div>
                    <img src={six} />
                </div>
                <div>
                    <img src={seven} />
                </div>
                <div>
                    <img src={eight} />
                </div>
                <div>
                    <img src={nine} />
                </div>
            </Carousel>
        </div>
    );
}