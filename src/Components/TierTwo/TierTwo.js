import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './TierTwo.css';
import schoolfront from './schoolfront.jpg';
import BookIcon from './BookIcon.png';



function TierTwo() {
    return (
        <div>
            <Jumbotron fluid className="tier_two-tron">
                <Container fluid>
                    <div className="title">
                        <h1>GIỚI THIỆU NGOẠI NGỮ ÂU MỸ</h1>
                    </div>
                    <div className="book">
                        <img className="book" src={BookIcon} />
                    </div>
                    <div className="school">
                        <img className="school-front" src={schoolfront} /> 
                        <div className="about-container">
                            <p className="about-text">
                                Các bạn học viên thân mến!
                                -Là nhà tiên phong mang lại nền tảng Anh ngữ giáo dục định hướng với đội ngũ giáo viên hơn 20 năm kinh nghiệm trong lĩnh vực giáo dục và đào tạo Tiếng Anh. Chúng tôi luôn tâm niệm rằng học viên học tiếng Anh không chỉ là học một ngôn ngữ mới mà còn là được truyền động lực học tập phát triền bản thân. Học viên ở trung tâm dược hưởng thụ điều kiện môi trường học tập quốc tế.
                            </p>
                            <button className="about-button">Xem thêm</button>
                        </div>
                
                    </div>
                
                </Container>
            </Jumbotron>
    
            
       
                                           
        </div>
        
            
        
    );
}

export default TierTwo;