import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './TierFour.css';
import bottom from './bottom.jpg';
import utub from './utub.jpg';



function TierFour() {
    return (
        <div>
            <Jumbotron fluid className="jumbofour">
                <Container className="t-4_pic" fluid>
                    <div className="tier_four" styles={{ backgroundImage:`url(${bottom})` }} >
                    
                    <img className="imgone" src={utub} />  
                        
                    </div>
                </Container>
            </Jumbotron>
    
           
        </div>
       
                                           
        
        
            
        
    );
}

export default TierFour;