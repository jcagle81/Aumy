import React from "react";
import headerimg from './headerimg.png';
import './Header.css';
import { Jumbotron, Container } from 'reactstrap';


function Header() {
    return (
        <React.Fragment>
            <Jumbotron fluid className="jumboheader">
                <Container fluid>
                <h1 className="slogan">Thành công của bạn là mục tiêu của chúng tôi!</h1>
                </Container>
            </Jumbotron>
    
            <img className="headerimg" src={headerimg} />
       
                                           
        </React.Fragment>
        
            
        
    );
}

export default Header;