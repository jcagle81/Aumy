import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Junior.css';
import imageOne from './image44.jpg';
import BookIcon from './BookIcon.png';
import imageTwo from './image45.jpg';
import imageThree from './image46.jpg';
import imageFour from './image51.jpg';
import imageFive from './image48.jpg';
import imageSix from './image49.jpg';
import imageSeven from './image50.jpg';
import imageEight from './image54.jpg';




function Junior() {
    return (
        <div>
            <Jumbotron fluid className="kindertron">
                <Container fluid>
                    <div className="title">
                        <h1>ANH VĂN THIẾU NHI</h1>
                    </div>
                    <div className="book">
                        <img className="book" src={BookIcon} />
                    </div>
                    <div className="school">
                    <p className="kinderText">
                                 
                        <p>Tại ngoại ngữ ÂU MỸ, chương trình  Anh Văn thiếu nhi 100% Giáo Viên Bản Ngữ được xây dựng chuyên sâu dành cho độ tuổi thiếu niên nhằm cung cấp cho các em khả năng ngôn ngữ,  những kỹ năng cần thiết để thành công trong kỳ thi chứng chỉ quốc tế Cambridge: Staters – Movers – Flyers và TOEFL Primary.
                        </p>

                        <p>* Đội ngũ giáo viên giàu kinh nghiệm giảng dạy, nhiệt tình hướng dẫn học viên.
                        </p>

                        <p>* Giáo viên bản xứ đến từ các nước Anh, Úc, Mỹ, Canada, New Zealand đạt chứng chỉ  TESOL, CELTTA.
                        </p>

                        <p>*Cam kết chất lượng đầu ra:
                        </p>

                        <p>- Đạt 13+ khiên Cambridge</p>

                        <p>- Điểm 8+ các kỳ thi học kỳ tại trường.
                        </p>

                        <p>- Học viên được học lại miễn phí nếu không đạt.
                        </p>

                        <p>* Giáo trình chuẩn, nguồn học liệu phong phú, cùng phương tiện học tập hiện đại sẽ trang bị cho các em đầy đủ 4 kỹ năng: Nghe, Nói, Đọc, Viết. Các em được luyện nghe nói, luyện phát âm trực tiếp với giáo viên bản ngữ, đồng thời nâng cao vốn từ vựng và ngữ pháp thông qua các hoạt động học mang tính tương tác.
                        </p>
                        <p>* Đặc biệt, chương trình còn góp phần nâng cao khả năng tiếng Anh cho học sinh phổ thông và chuyên ngữ, giúp các em đạt kết quả cao trong các kỳ thi tại các trường .

                        </p>
                        <p>* Ngoài ra các hoạt động ngoại khóa thú vị và bổ ích được tổ chức thường xuyên không những đem đến cho các em những giây phút thư giãn vui nhộn, mà còn cung cấp nhiều kiến thức tiếng Anh cần thiết. 

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

export default Junior;