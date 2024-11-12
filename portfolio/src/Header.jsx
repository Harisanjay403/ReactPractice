import './Header.css'
import {Link} from 'react-router-dom'

export const Header = () =>{

    return(
        <>
            <div className="header-container">
                <div className="logo">
                    
                    <Link to={"/"}><h1>Harisanjay Rajan</h1></Link>
                </div>
                
                <div className="links">
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
            </div>
        </>
    )
}