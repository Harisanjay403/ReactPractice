import './Footer.css'
import { Link } from 'react-router-dom'
import whatsappIcon from './assets/whatsapp.png'
import linkedinIcon from './assets/linkedin.png'
import githubIcon from './assets/github-sign.png'

export const Footer = () =>{

    return(
        <>
            <div className="footer-container">
                <h1 data-aos="fade-down" data-aos-duration="1000">Harisanjay Rajan</h1>

                <div className="lists">
                    <ul>
                        <li data-aos="flip-up" data-aos-duration="1500">
                            <Link to={"/"} >Home</Link>
                        </li>
                        <li data-aos="flip-down" data-aos-duration="1500">
                            <Link to={"/project"}>Project</Link>
                        </li>
                        <li data-aos="flip-up" data-aos-duration="1500">
                            <Link to={"/resume"}>Resume</Link>
                        </li>
                        <li data-aos="flip-down" data-aos-duration="1500">
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="logos" >

                    <Link to={'https://www.linkedin.com/in/harisanjay-rajan-hari62'}> <img src={linkedinIcon} alt="linkedin-icon" data-aos="flip-left" data-aos-duration="1000" /></Link>

                    <Link to={'https://github.com/Harisanjay403/ReactPractice'}> <img src={githubIcon} alt="github-icon" data-aos="flip-right" data-aos-duration="1000" /></Link>
                    
                    <Link to={'https://wa.me/9688616162'}> <img src={whatsappIcon} alt="whatsapp-icon" data-aos="flip-left" data-aos-duration="1000" /></Link>
                    
                </div>

                <div className="designedby" >
                    <p>Designed by <span>Harisanjay</span>  </p>
                </div>
                
            </div>
        </>
    )
}
