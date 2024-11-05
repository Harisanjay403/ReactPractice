import './Footer.css'
import { Link } from 'react-router-dom'

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

                    <Link to={'https://www.linkedin.com/in/harisanjay-rajan-hari62'}> <img src='./src/assets/linkedin.png' alt="linkedin-icon" data-aos="flip-left" data-aos-duration="1000" /></Link>

                    <Link to={'https://github.com/Harisanjay403/ReactPractice'}> <img src='./src/assets/github-sign.png' alt="github-icon" data-aos="flip-right" data-aos-duration="1000" /></Link>
                    
                    <Link to={'https://wa.me/9688616162'}> <img src='./src/assets/whatsapp.png' alt="whatsapp-icon" data-aos="flip-left" data-aos-duration="1000" /></Link>
                    
                </div>

                <div className="designedby" >
                    <p>Designed by <span>Harisanjay</span>  </p>
                </div>
                
            </div>
        </>
    )
}
