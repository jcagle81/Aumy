import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Album.css';
import BookIcon from './BookIcon.png';
import { Link } from 'react-router-dom';
import classlearning from './classlearning.png';
import outsidelearning from './outsidelearning.png';
import ceremony from './cermony.png';
import teachers from './teachers.png';


function Album() {
    return (
        <div>
            <Jumbotron fluid className="Albumtron">
                <Container fluid>
                    <div className="title">
                        <h1>Album</h1>
                    </div>
                    <div className="book">
                        <img className="book" src={BookIcon} />
                    </div>
                    <div className="AlbumList">
                    <img className="" src={classlearning} />
                    <img className="" src={outsidelearning} />
                    <img className="" src={ceremony} />
                    <img className="" src={teachers} />
                    </div>
                                            
                </Container>
            </Jumbotron>                  
        </div>
    );
}

export default Album;