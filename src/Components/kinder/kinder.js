import React from 'react';
import { Jumbotron, Container } from "reactstrap";
import image29 from './image29.jpg';
import BookIcon from './BookIcon.png';
import './kinder.css';
import image37 from './image37.jpg';

import image39 from './image39.jpg';
import image40 from './image40.jpg';
import image41 from './image41.jpg';
import image42 from './image42.jpg';
import image43 from './image43.jpg';

function Kinder() {
    return (
        <div>
            <Jumbotron fluid className="tier_two-tron">
                <Container fluid>
                    <div className="title">
                        <h1>ANH VĂN MẪU GIÁO</h1>
                    </div>
                    <div className="book">
                        <img className="book" src={BookIcon} />
                    </div>
                    <div className="school">
                        <div className="kinderpictures">
                           <img className="kinder1" src={image29} />
                           <img className="kinder2" src={image37} />
                           <img className="kinder3" src={image37} />
                           <img className="kinder4" src={image39} />
                           <img className="kinder6" src={image40} />
                           <img className="kinder7" src={image41} />
                           <img className="kinder5" src={image42} />
                           <img className="kinder8" src={image43} />
                        </div>
                        <div className="Kindertextcontainer">
                            <p className="about-text">
                                <h6>*  Chương trình  anh văn mẫu giáo 100% Giáo Viên Bản Ngữ sẽ giúp các Bé được hòa mình vào môi trường Anh ngữ sống động với những sinh hoạt giàu tính tương tác như đóng kịch, múa hát, làm thủ công, xem hoạt hình, tham gia các trò chơi…Những hoạt động này giúp bé phát triển hài hòa về các mặt: tư duy ngôn ngữ, sự nhận thức, lòng tự tin, và kỹ năng xã hội, bé yêu của bạn sẽ tự tin hẳn khi bước vào lớp một và chuẩn bị cho các kỳ thi quốc tế.</h6>

                                <h6>*  Đội ngũ giáo viên giàu kinh nghiệm,  yêu trẻ, năng lực chuyên môn vững, nhiệt tình sẽ vừa là người thầy giúp bé học thật tốt, vừa là người bạn đồng hành của bé trong các cuộc vui.</h6>

                                <h6>*  Đội ngũ giáo viên bản ngữ tận tâm đến từ các nước nói tiếng Anh trên thế giới giúp bé hoàn thiện khả năng phát âm và năng lực giao tiếp.</h6>

                                <h6>* Có Giáo Viên trợ giảng trong suốt khóa học giúp bé tự tin giao tiếp hơn.</h6>

                                <h6>*  Giáo trình “BEBOP" kết hợp với phương tiện học tập hiện đại đem đến cho bé những bài học tiếng Anh sinh động và hiệu quả cao.</h6>

                                <h6>*  Các hoạt động ngoại khóa vui nhộn, hào hứng thường xuyên được tổ chức vào những ngày lễ như: Trung thu, Giáng sinh, Halloween, Quốc tế thiếu nhi…đem đến cho các bé nhiều niềm vui và kiến thức tiếng Anh thực tế và bổ ích.</h6>

                                <h6>* Liên lạc chặt chẽ với phụ huynh</h6>

                                <h6>Phụ huynh sẽ được tham gia sinh hoạt đầu khóa và xác nhận nội dung học tập hàng ngày thông qua sổ báo bài. Phụ huynh được quyền đánh giá trực tiếp giáo viên để cùng giúp bé tiến bộ hơn.</h6>
                            </p>   
                        </div>
                    </div>
                </Container>
            </Jumbotron>
    
            
       
                                           
        </div>
        
            
        
    );
}

export default Kinder