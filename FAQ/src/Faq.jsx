import { useState } from 'react'
import './Faq.css'

const FaqContainer =({answer, question})=>{
    const [show,setShow]=useState(false)

    const handleShow = () =>{
        setShow(!show)
    }
    return(
        <>
        <div className="faq-container">
            <div className="faq-question" onClick={handleShow}>
                {question}
            </div>
            
            <div className="faq-answer-container">
            <div className={`faq-answer  ${show ? "active" : ""}`}>
                {answer}
            </div>
            </div>
            
            
            
        </div>
            
            
        </>
    ) 
}

export const Faq = () =>{

    const data =[
        {id:1, question:"What is React?",answer:"React is front-end JavaScript library for building user interfaces or UI components"},
        {id:2, question:"What are the benifits of React?", answer:"Some of the benifits of React are : it is fast,scalable, midular, eacy to debug, and supports server-side rendering."},
        {id:3, question:"What are the main concepts of React", answer:"Some of the main concepts of Reacts are: components,props, states , hooks, life cycle method,and JSX"}
    ]
    

    return(
        <> 
            <h2> FAQ</h2>
            {data.map((item)=>(< FaqContainer key={item.id} answer={item.answer} question={item.question} /> ))}

           {/* < FaqContainer data={data} />
           < FaqContainer data={data} />
           < FaqContainer data={data} /> */}
        </>
    )
} 