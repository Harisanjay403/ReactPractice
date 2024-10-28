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
                    
                </div>
                
            </div>
        </>
    )
}
