import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './TierOne.css';
import Deck from '../MainSlider/Carousel';
import Pic from './three.jpg'




function TierOne() {
    return (
        <div>
            <Jumbotron fluid className="tier_one-tron">
                <Container fluid>
                    <div className="title">
                        <img src={Pic} />
                
                    </div>
                </Container>
            </Jumbotron>
    
            
       
                                           
        </div>
        
            
        
    );
}

export default TierOne;