import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Album.css';
import BookIcon from './BookIcon.png';
import ceremony from './ceremony.png';
import outsidelearning from './outsidelearning.png';
import teachers from './teachers.png';
import classlearning from './classlearning.jpg';

function News() {
    return (
        <div>
            <Jumbotron fluid className="Albumtron">
                <Container fluid className="Albumlist">
                    <div className="title">
                        <h1>GIỚI THIỆU NGOẠI NGỮ ÂU MỸ</h1>
                    </div>
                    <div className="book">
                        <img className="book" src={BookIcon} />
                    </div>
                    <div className="">
                        <div className="picturelist">
                            <div>
                                <img className="classlearning" src={classlearning} />
                                <h2 className="descripttext">In Class Learning</h2>
                            </div>
                            <div>   
                                <img className="outsidelearning" src={outsidelearning} />
                                <h2 className="descripttext">Out of Class Learning</h2>
                            </div>     
                            <div>
                                <img className="ceremony" src={ceremony} />
                                <h2 className="descripttext">Celebration</h2>
                            </div>
                            <div>                            
                                <img className="teachers" src={teachers} />
                                <h2 className="descripttext">Teachers</h2>
                            </div>
                        </div>
                    </div>
                                            
                </Container>
            </Jumbotron>                  
        </div>
    );
}

export default News;