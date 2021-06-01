import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './kinder.css';
import imageOne from './image29.jpg';
import BookIcon from './BookIcon.png';
import imageTwo from './image37.jpg';
import imageThree from './image38.jpg';
import imageFour from './image39.jpg';
import imageFive from './image40.jpg';
import imageSix from './image41.jpg';
import imageSeven from './image42.jpg';
import imageEight from './image43.jpg';




function Kinder() {
    return (
        <div>
            <Jumbotron fluid className="kindertron">
                <Container fluid>
                    <div className="title">
                        <h1>ANH VĂN MẪU GIÁO</h1>
                    </div>
                    <div className="book">
                        <img className="book" src={BookIcon} />
                    </div>
                    <div className="school">
                    <p className="kinderText">
                                 
                    <p>*  Chương trình  anh văn mẫu giáo 100% Giáo Viên Bản Ngữ sẽ giúp các Bé được hòa mình vào môi trường Anh ngữ sống động với những sinh hoạt giàu tính tương tác như đóng kịch, múa hát, làm thủ công, xem hoạt hình, tham gia các trò chơi…Những hoạt động này giúp bé phát triển hài hòa về các mặt: tư duy ngôn ngữ, sự nhận thức, lòng tự tin, và kỹ năng xã hội, bé yêu của bạn sẽ tự tin hẳn khi bước vào lớp một và chuẩn bị cho các kỳ thi quốc tế.</p>

                    <p>*  Đội ngũ giáo viên giàu kinh nghiệm,  yêu trẻ, năng lực chuyên môn vững, nhiệt tình sẽ vừa là người thầy giúp bé học thật tốt, vừa là người bạn đồng hành của bé trong các cuộc vui.</p>

                    <p>*  Đội ngũ giáo viên bản ngữ tận tâm đến từ các nước nói tiếng Anh trên thế giới giúp bé hoàn thiện khả năng phát âm và năng lực giao tiếp.</p>

                    <p>* Có Giáo Viên trợ giảng trong suốt khóa học giúp bé tự tin giao tiếp hơn.</p>

                    <p>*  Giáo trình “BEBOP" kết hợp với phương tiện học tập hiện đại đem đến cho bé những bài học tiếng Anh sinh động và hiệu quả cao.</p>

                    <p>*  Các hoạt động ngoại khóa vui nhộn, hào hứng thường xuyên được tổ chức vào những ngày lễ như: Trung thu, Giáng sinh, Halloween, Quốc tế thiếu nhi…đem đến cho các bé nhiều niềm vui và kiến thức tiếng Anh thực tế và bổ ích.</p>

                    <p>* Liên lạc chặt chẽ với phụ huynh</p>

                    <p>Phụ huynh sẽ được tham gia sinh hoạt đầu khóa và xác nhận nội dung học tập hàng ngày thông qua sổ báo bài. Phụ huynh được quyền đánh giá trực tiếp giáo viên để cùng giúp bé tiến bộ hơn.</p>
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

export default Kinder;