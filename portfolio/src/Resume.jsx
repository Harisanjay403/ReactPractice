import "./Resume.css"
import download_icon from './assets/download_icon.png'
import pdf from './assets/HarisanjayRajanResume.pdf'
import HarisanjayRajanResume from './assets/HarisanjayRajanResume.jpg'
import { Container, Row, Col, Image} from 'react-bootstrap'
export const Resume = () =>{
     
    return (
        <>
        <Container>
            <Row>
                <Col xs={12} className="p-0">
                    <div className="resume-container">
                        <img src={HarisanjayRajanResume} alt="Resume" />
                        <a href={pdf} download><Image src={download_icon}/></a>
                    </div>
                </Col>
            </Row>
        </Container>
            
        </>
    )
}