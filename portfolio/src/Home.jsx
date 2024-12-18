import './Home.css'
import hariImag from './assets/hari-img.jpeg'
import { Container, Row, Col, Image} from "react-bootstrap"
export const Home = () =>{

    return(
        <>
        <Container>
            <Row>
            <Col xs={12} md={4}>
                    <div className='home-container'>
                        
                            <div className="home-img-container" data-aos= "fade-right" >
                                <Image src={hariImag} alt="profile photo" fluid />
                            </div>
                        {/* </Col>
                        
                        <Col xs={12} md={6}> */}
                            <div className="about-me" data-aos="fade-left">
                                <p>Hi, I'm Harisanjay Rajan, a passionate front-end web developer with expertise in HTML, CSS, JavaScript, and React. I love creating intuitive and dynamic user interfaces that bring ideas to life on the web. Whether it's building responsive designs or developing interactive features, I'm always excited to work on innovative projects and push the boundaries of what's possible in web development.</p>

                                <p>I enjoy problem-solving and continuously learning new technologies to enhance my skill set. When I'm not coding, you can find me exploring the latest trends in web design or experimenting with new tools and frameworks.</p>

                                <p>Let's connect and create something amazing!</p>
                            </div>
                        
                        
                
                    </div>
                    </Col>
            </Row>
        </Container>
        
        </>
    )
}

