import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Senior.css';
import imageOne from './image53.jpg';
import BookIcon from './BookIcon.png';
import imageTwo from './image54.jpg';
import imageThree from './image55.jpg';
import imageFour from './image56.jpg';
import imageFive from './image57.jpg';
import imageSix from './image58.jpg';
import imageSeven from './image59.jpg';
import imageEight from './image60.jpg';




function Senior() {
    return (
        <div>
            <Jumbotron fluid className="Seniortron">
                <Container fluid>
                    <div className="title">
                        <h1>ANH VĂN THIẾU NIÊN</h1>
                    </div>
                    <div className="book">
                        <img className="book" src={BookIcon} />
                    </div>
                    <div className="school">
                    <p className="SeniorText">
                                 
                        <p>Ở giai đoạn này nếu bạn có định hướng cho trẻ đi du học hoặc học tập trong môi trường quốc tế  và hoàn thiện các kỹ năng mềm để có thể chuẩn bị tốt nhất cho con đường học vấn cao hơn sắp tới.

                        </p>

                        <p>* Khoá học Anh văn thiếu niên 100% Giáo Viên Bản Ngữ dành sẽ giúp bạn đạt được mục đích này. Chương trình sẽ cung cấp cho học viên những buổi học lý thuyết về kỹ năng Ngoại ngữ cùng với những buổi học dựa trên các hoạt động phong phú để các em có thể phát triển những kỹ năng mềm khác nhau.

                        </p>

                        <p>* Giáo án của khoá học Anh ăn thiếu niên còn tạo điều kiện cho học viên tiếp xúc với các chuẩn giảng dạy Cambridge như KET – PET , chuẩn TOEFL Junior, và chuẩn IELTS.

                        </p>

                        <p>* Các em sẽ được tham gia các chương trình ngoại khóa đầy bổ ích và thú vị như: câu lạc bộ tiếng anh, các buổi dã ngoại  được tổ chức thường xuyên giúp các em phát triển hơn về kỹ năng giao tiếp ngôn ngữ , nâng cao kỹ năng sống.
                        </p>
                    </p> 
                        
                        <div className="about-container">
                        <img className="school-front" src={imageOne} /> 
                        <img className="school-front" src={imageTwo} /> 
                        <img className="school-front" src={imageThree} /> 
                        <img className="school-front" src={imageFour} /> 
                        <img className="school-front" src={imageFive} /> 
                        <img className="school-front" src={imageSix} /> 
                        <img className="school-front" src={imageSeven} /> 
                        <img className="school-front" src={imageEight} /> 
                            </div>
                
                    </div>
                
                </Container>
            </Jumbotron>
    
            
       
                                           
        </div>
        
            
        
    );
}

export default Senior;