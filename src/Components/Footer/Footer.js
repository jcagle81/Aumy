import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Footer.css';
import ffpic from './ffpic.jpg';
import ContactForm from "../ContactUs/ContactUs";
import { Col, Row } from 'react-bootstrap';





function Footer() {
    return (
        <div>
            <Jumbotron fluid className="footer-tron">
                <Container className="footer-tron" fluid>
                    
                            <div className="info">
                                <div>
                                    <h1>THÔNG TIN LIÊN HỆ</h1>
                                    <h3>TRUNG TÂM NGOẠI NGỮ ÂU MỸ</h3>
                                    <h4>ĐC: 5/21 Đường 868, khu Phố 1, Phường 4, TX
                                    <br></br>Cai Lậy, Tiền Giang </h4>
                                    <h4>Email: ngoainguaumycailay@gmail.com</h4>
                                    <h4>SĐT: 02733826763 <br></br>  0982826763</h4>
                                    <h4>Website: trungtamngoainguaumy.edu.vn</h4>
                                    <h4>Tag: vttechsolution.com.vn</h4>
                                </div>
                            </div>       
                        
                            <div>
                                <div className="col">    
                                    <h1 className="info">ĐĂNG KÝ NHẬN TIN</h1>
                                    <h4 className="info">Gửi email của bạn cho chúng tôi để nhận những thông tin mới nhất</h4>
                                    <ContactForm />
                                </div>    
                            </div>
                           
                            <div>
                                <div className="col">
                                    <h1 className="info">FACEBOOK FAN PAGE</h1>
                                    <img className="ffpic info" src={ffpic} />
                                </div>
                            </div>
                          
                </Container>
            </Jumbotron>
    
            
       
                                           
        </div>
        
            
        
    );
}

export default Footer;