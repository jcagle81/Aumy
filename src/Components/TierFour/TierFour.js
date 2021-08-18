import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './TierFour.css';
import bottom from './bottom.jpg';
import utub from './utub.jpg';
import { Link } from 'react-router-dom';



function TierFour() {
    return (
        <div>
            <Jumbotron fluid className="jumbofour">
                <Container className="container" fluid>
                    
                    <div className="parent">
                        <h1 className="head">TRUNG TÂM NGOẠI NGỮ ÂU MỸ</h1>
                        <button className="Tier_four-button"><a href="https://www.youtube.com/channel/UCADKCdCEJFReDDbwti82YWw/videos" className='a'>Xem thêm</a></button>
                        
                        <img className="image1" src={bottom} /> 
                        <a href="https://www.youtube.com/channel/UCADKCdCEJFReDDbwti82YWw/videos"><img className="image2" src={utub} /></a>  
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default TierFour;