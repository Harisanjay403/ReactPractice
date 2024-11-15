import "./Resume.css"
import bmi from './assets/bg_img.jpg'
import pdf from './assets/HarisanjayRajanResume.pdf'
import HarisanjayRajanResume from './assets/HarisanjayRajanResume.jpg'
import { Container, Row, Col, Image} from 'react-bootstrap'
export const Resume = () =>{
     
    return (
        <>
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="resume-container">
                        <img src={HarisanjayRajanResume} alt="Resume" />
                        <a href={pdf} download>Download Resume</a>
                    </div>
                </Col>
            </Row>
        </Container>
            
        </>
    )
}