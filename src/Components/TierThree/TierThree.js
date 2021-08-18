import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './TierThree.css';
import bookicon from './bookicon.png';
import kinder from './kinder.png';
import primary from './primary.png';
import highschool from './highschool.png';
import { Link } from 'react-router-dom';




function TierThree() {
    return (
        <div>
            <Jumbotron fluid className="tier_three-tron">
                <Container fluid>
                    <div className="title">
                        <h1>CHƯƠNG TRÌNH TIÊU BIỂU</h1>
                    </div>
                    <div className="book">
                        <img className="book" src={bookicon} />
                    </div>
                    <div className="course-overview">
                        <h5>Hệ thống tiếng anh giao tiếp toàn diện cho người bắt đầu</h5>
                    </div>
                    <div className="course-look">
                        <div className="kindergarten">
                        <Link to={'/Kinder'} className='a'><img className="primpic" src={kinder} /></Link>
                            <div className="box">
                                <h5>ANH VĂN MẪU GIÁO</h5>
                                <h6>
                                    Phương pháp trực quan sinh động kết hợp với tình huống thực tế. Các bé sẽ được học qua các đoạn video , tranh , ảnh, đồ vật thật
                                </h6>
                            </div>
                        </div>
                        <div className="primary">
                        <Link to={'/Junior'} className='a'><img className="primpic" src={primary} /></Link>
                            <div className="box">
                                <h5>ANH VĂN THIẾU NHI</h5>
                                <h6>
                                    Tại ngoại ngữ ÂU MỸ, chương trình Anh Văn thiếu nhi 100% Giáo Viên Bản Ngữ được xây dựng chuyên sâu dành cho độ tuổi thiếu niên nhằm cung cấp cho các em khả...
                                </h6>
                            </div>
                        </div>
                        <div className="highschool">
                        <Link to={'/Senior'} className='a'><img className="primpic" src={highschool} /></Link>
                            <div className="box">
                                <h5>ANH VĂN THIẾU NIÊN</h5>
                                <h6>
                                    Ở giai đoạn này nếu bạn có định hướng cho trẻ đi du học hoặc học tập trong môi trường quốc tế  và hoàn thiện các kỹ năng mềm để có thể chuẩn bị tốt...
                                </h6>
                            </div>
                        </div>
                  
                
                    </div>
                
                </Container>
            </Jumbotron>
    
            
       
                                           
        </div>
        
            
        
    );
}

export default TierThree;