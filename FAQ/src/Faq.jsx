import { useState } from 'react'
import './Faq.css'

const FaqContainer =()=>{
    const [show,setShow]=useState(false)

    const handleShow = () =>{
        setShow(!show)
    }
    return(
        <>
        <div className="faq-container">
            <div className="faq-question" onClick={handleShow}>
                sample question ?
            </div>
            <div className={`faq-answer  ${show ? "active" : ""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt numquam ut quasi, ea voluptas saepe consectetur iure? Itaque debitis hic unde maxime nam!
            </div>
            {/* // <div>{` ${show? "faq-answer active" : "faq-answer "} `}</div> */}
            
        </div>
            
            
        </>
    ) 
}

export const Faq = () =>{

    

    return(
        <> 
            <h2> FAQ</h2>

           < FaqContainer />
           < FaqContainer />
           < FaqContainer />
        </>
    )
} 