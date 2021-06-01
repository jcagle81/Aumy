import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './News.css';
import BookIcon from './BookIcon.png';
import { Link } from 'react-router-dom';
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import five from './5.jpg';
import six from './6.jpg';
import seven from './7.jpg';
import eight from './8.jpg';
import nine from './9.jpg';
import ten from './10.jpg';
import eleven from './11.jpg';
import twelve from './12.jpg';


function News() {
    return (
        <div>
            <Jumbotron fluid className="Newstron">
                <Container fluid>
                    <div className="title">
                        <h1>GIỚI THIỆU NGOẠI NGỮ ÂU MỸ</h1>
                    </div>
                    <div className="book">
                        <img className="book" src={BookIcon} />
                    </div>
                    <div className="newsList">
                    <img className="" src={one} />
                    <img className="" src={two} />
                    <img className="" src={three} />
                    <img className="" src={four} />
                    <img className="" src={five} />
                    <img className="" src={six} />
                    <img className="" src={seven} />
                    <img className="" src={eight} />
                    <img className="" src={nine} />
                    <img className="" src={ten} />
                    <img className="" src={eleven} />
                    <img className="" src={twelve} />
                    </div>
                                            
                </Container>
            </Jumbotron>                  
        </div>
    );
}

export default News;