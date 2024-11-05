import "./Contact.css"
import { Link } from "react-router-dom"

export const Contact = () =>{

    return(
        <>
            <div className="contact-container">
                <div className="contacts">
                    <div className="address">                     
                        <div class="loader"></div>
                        <p>Ramanathapuram,<br />Coimbatore-641036 <br />Tamil Nadu <br /> India</p>
                    </div>

                    <div className="phone">                     
                        <img src="./src/assets/mobile.png" alt="mobile-icon" />                        
                        <p>Mobile Number <br />9688616162</p>
                    </div>

                    <div className="email">                     
                        <div class="icon">
                        <div class="tooltip-container">
                            <span class="tooltip">Harisanjay Rajan</span>
                            <span class="text">Email</span>
                        </div>
                        </div>
                        <p>harisanjay403 <br />@gmail.com</p>
                    </div>

                    <div className="socialmedia">                     
                        <div className="linkedin">
                        <Link to={'https://www.linkedin.com/in/harisanjay-rajan-hari62'}> <img src='./src/assets/linkedin.png' alt="" /></Link>
                        </div>
                        <div className="whatsapp">
                        <Link to={'https://wa.me/9688616162'}> <img src='./src/assets/whatsapp.png' alt="" /></Link>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}