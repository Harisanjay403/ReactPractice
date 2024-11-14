import "./Resume.css"
import bmi from './assets/bg_img.jpg'
import pdf from './assets/HarisanjayRajanResume.pdf'
import HarisanjayRajanResume from './assets/HarisanjayRajanResume.jpg'
export const Resume = () =>{
     
    return (
        <>
            <div className="resume-container">
                <img src={HarisanjayRajanResume} alt="Resume" />
                <a href={pdf} download>Download Resume</a>
            </div>
        </>
    )
}