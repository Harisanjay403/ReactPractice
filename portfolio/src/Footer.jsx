import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () =>{

    return(
        <>
            <div className="footer-container">
                <h1>Harisanjy Rajan</h1>

                <div className="lists">
                    <ul>
                    <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/project"}>Project</Link>
                        </li>
                        <li>
                            <Link to={"/resume"}>Resume</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="logos">

                    <Link to={'https://www.linkedin.com/in/harisanjay-rajan-hari62'}> <img src='./src/assets/linkedin.png' alt="" /></Link>

                    <Link to={'https://github.com/Harisanjay403/ReactPractice'}> <img src='./src/assets/github-sign.png' alt="" /></Link>
                    
                    <Link to={'https://wa.me/9688616162'}> <img src='./src/assets/whatsapp.png' alt="" /></Link>
                    
                </div>

                <div className="designedby">
                    <p>Designed by Harisanjay</p>
                </div>
                
            </div>
        </>
    )
}
