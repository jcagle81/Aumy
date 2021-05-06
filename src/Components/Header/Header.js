import React from "react";
import headerimg from './headerimg.png';
import './Header.css';
import { Jumbotron, Container } from 'reactstrap';

function Header() {
    return (
        <React.Fragment>
            <Jumbotron fluid className="jumboheader">
                <Container fluid>
                <h1 className="display-3">Thành công của bạn là mục tiêu của chúng tôi!</h1>
                <p className="lead"></p>
                </Container>
            </Jumbotron>
    
            <img src={headerimg} />
        
                                           
        </React.Fragment>
        
            
        
    );
}

export default Header;