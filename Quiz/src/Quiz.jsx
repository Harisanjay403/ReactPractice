import { useState } from "react"
import "./Quiz.css"

export const Quiz = () => {

    const [showScore,setShowScore]=useState(false);
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [timer,setTimer]=useState(10);
    const [correctAnswer,setCorrectAnswer]=useState(false)
    

    const handleQuestion = (option) =>{

        if(option===questionDate[currentQuestion].correctOption){
            setScore((value)=> value+1)
        }

        setCorrectAnswer(false);
        setCorrectAnswer(true)
       
        

    }

    

    const handleNext = ()=>{
        if (currentQuestion<questionDate.length-1){
            setCurrentQuestion((value)=> value+1)
            
        }else{
            setShowScore(true)
            
        }


    }

    const handlePrevious = () =>{
        if (currentQuestion>0){
            setCurrentQuestion((value)=> value-1)
        }
        
    }

    const handleRestart = () =>{
        setShowScore(false)
        setScore(0)
        setCurrentQuestion(0)
        setTimer(10)
        
    }


    const questionDate=[
        {
            "id":1,
            "question": "Out of the following which is an insulating material ?",
            "options":["Copper", "Gold","Silver","Paper"],
            "correctOption": "Paper"
        },
        {
            "id":2,
            "question": "The filament of an electric bulb is made of ?",
            "options":["Carbon",'aluminium','tungston','nickal'],
            "correctOption": "tungston"
        },
        {
            "id":3,
            "question": "An instrument which detects electric current is known as ?",
            "options":["Voltmeter","Rheostat",        "Wattmeter","Galvanometer"],
            "correctOption": "Galvanometer"
        },
    ]
     
    return (
        <>
            <div className="container">
                {showScore ? (
                    <div className="score-section">
                    <h2> Your Score is : {score}/{questionDate.length}</h2>
                    <button onClick={handleRestart}> Restart </button>

                </div>
                ) : (
                    <div className="question-section">
                    <h2> Question No: {currentQuestion + 1}</h2>
                    
                    <p className="question">{questionDate[currentQuestion].question}</p>
                    <div className="option-btn">
                        {questionDate[currentQuestion].options.map((option,index)=>(
                            <button className={correctAnswer?"correct":""} onClick={()=>{handleQuestion(option)}} key={index}>{option}</button>
                        ))}
                    </div>
                    <div className="btn">
                        <button className={currentQuestion == 0?"pre":"previous"} onClick={handlePrevious}>Previous</button>
                        <button className="next" onClick={handleNext}>Next</button>
                    </div>
                </div>

                )}
                

                
            </div>
        </>
    )

}