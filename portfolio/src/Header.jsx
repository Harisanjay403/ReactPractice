import './Header.css'
import {Link} from 'react-router-dom'

export const Header = () =>{

    return(
        <>
            <div className="header-container">
                <div className="logo">
                    <Link to={"/"}>HSR</Link>
                </div>
                
                <div className="links"></div>
            </div>
        </>
    )
}