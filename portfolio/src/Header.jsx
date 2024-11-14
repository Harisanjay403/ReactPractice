import './Header.css'
import {Link} from 'react-router-dom'
import menuIcon from './assets/menuIconfff.png'
import { useState } from 'react'

export const Header = () =>{
    const [sideMenu,setSideMenu]=useState(false)

    const handleSideMenu=()=>{
        setSideMenu(!sideMenu);
    }
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

                <div className="menu-icon">
                        <img src={menuIcon} onClick={handleSideMenu} alt="menu icon" />
                    </div>
                <div className="side-menu" style={{width: sideMenu?"300px" :"0px"}}>

                    

                    <div className="side-menu-links">
                    
                            <Link onClick={handleSideMenu} to={"/"}>Home</Link>
                        
                            <Link onClick={handleSideMenu} to={"/project"}>Project</Link>
                        
                            <Link onClick={handleSideMenu} to={"/resume"}>Resume</Link>
                        
                            <Link onClick={handleSideMenu} to={"/contact"}>Contact</Link>
                        

                    </div>


                </div>
                
            </div>
        </>
    )
}