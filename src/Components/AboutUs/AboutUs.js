import React from 'react';
import { Jumbotron, Container } from "reactstrap";
import schoolfront from './schoolfront.jpg';
import BookIcon from './BookIcon.png';
import SchoolSide from './SchoolSide.jpg';
import Teachers from './Teachers.jpg';
import './AboutUs.css';


function AboutUs() {
   

    return (
        <div>
            <Jumbotron fluid className="tier_two-tron">
                <Container fluid>
                    <div className="title">
                        <h1>GIỚI THIỆU</h1>
                    </div>
                    <div className="book">
                        <img className="book" src={BookIcon} />
                    </div>
                    <div className="school">
                        <div className="pictureside">
                            <img className="schoolfront" src={schoolfront} /> <br />
                            <img className="SchoolSide" src={SchoolSide} /> <br />
                            <img className="Teachers" src={Teachers} />
                        </div>
                        <div className="about-container">
                            <p className="about-text">
                                <h2>Các bạn học viên thân mến!</h2>
                                <h6>Là nhà tiên phong mang lại nền tảng Anh ngữ giáo dục định hướng với đội ngũ giáo viên hơn 20 năm kinh nghiệm tromng lĩnh vực giáo dục và đào tạo Tiếng Anh. Chúng tôi luôn tâm niệm rằng học viên học tiếng Anh không chỉ là học một ngôn ngữ mới.</h6>
                                <h6>- Trung tâm tự hào vì đã đào tạo được các học viên có thành tích vượt bật trong các kỳ thi quốc tế.</h6>

                                <h6>- Đội ngũ giáo viên trình độ chuyên môn cao với phương pháp giảng dạy trực quan sẽ đem đến cho học viên những bài học sinh động, dễ hiểu dễ nhớ.</h6>

                                <h6>-  Giáo trình cô đọng, thực tế, phục vụ tốt cho các kì thi đánh giá năng lực Anh ngữ quốc tế (TOEIC, TOEFL, IELTS,…) Vì vậy học viên hoàn toàn tự tin để chuyển tiếp vào các khóa học luyện thi lấy những chứng chỉ này.</h6>
                                <h6>-  Học viên được rèn lu yện 4 kỹ năng NGHE – NÓI – ĐỌC – VIẾT thường xuyên , thông qua giáo án điện tử được trình chiếu trên màn ảnh LCD  trong suốt buổi học. </h6>

                                <h6>- Các khóa học đa dạng về cấp độ, học viên sẽ dễ dàng tìm được lớp học phù hợp nhất với trình độ của mình.</h6>

                                <h6>-  Trung tâm có nhiều chế độ học phí ưu đãi đặc biệt, nhằm khuyến khích học viên gắn bó lâu dài và đạt hiệu quả học tập cao nhất.</h6>

                                <h6> - Với điều kiện học tập thuận lợi Trung Tâm Ngoại Ngữ Âu Mỹ cam kết mang đến cho các học viên thành công trong việc học tập Ngoại Ngữ của bản thân.</h6>

                                <h6>Chúc các bạn gặt hái được nhiều thành công trên hành trình tương lai phía trước.</h6>
                            </p>
                            
                        </div>
                
                    </div>
                
                </Container>
            </Jumbotron>
    
            
       
                                           
        </div>
        
            
        
    );
}

export default AboutUs