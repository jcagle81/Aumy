import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './TierOne.css';
import CarouselComponent from '../MainSlider/deck';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TierOne() {
    return (
        <div className="tier_one-tron">
            <Jumbotron fluid className="tier_one-tron">
                <Container fluid>
                    <div className="title">
                        <CarouselComponent />
                    </div>
                </Container>
            </Jumbotron>
    </div>
    );
}

export default TierOne;