import "./Contact.css"
import { Link } from "react-router-dom"
import mobilepng from './assets/mobile.png'
import whatsapplogo from './assets/whatsapp.png'
import linkedinlogo from './assets/linkedin.png'

export const Contact = () =>{

    return(
        <>
            <div className="contact-container">
                <div className="contacts" >
                    <div className="address box" data-aos="flip-left" data-aos-duration="1500">                     
                        <div class="loader"></div>
                        <p>Ramanathapuram,<br />Coimbatore-641036 <br />Tamil Nadu <br /> India</p>
                    </div>

                    <div className="phone box" data-aos="flip-down" data-aos-duration="1500">                     
                        <img src={mobilepng} alt="mobile-icon" />                        
                        <p>Mobile Number <br />9688616162</p>
                    </div>

                    <div className="email box" data-aos="flip-up" data-aos-duration="1500">                     
                        <div class="icon">
                        <div class="tooltip-container">
                            <span class="tooltip">Harisanjay Rajan</span>
                            <span class="text">Email</span>
                        </div>
                        </div>
                        <p>harisanjay403 <br />@gmail.com</p>
                    </div>

                    <div className="socialmedia box" data-aos="flip-right" data-aos-duration="1500">                     
                        <div className="linkedin">
                        <Link to={'https://www.linkedin.com/in/harisanjay-rajan-hari62'}> <img src={linkedinlogo} alt="" /></Link>
                        </div>
                        <div className="whatsapp">
                        <Link to={'https://wa.me/9688616162'}> <img src={whatsapplogo} alt="" /></Link>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}