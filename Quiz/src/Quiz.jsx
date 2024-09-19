import "./Quiz.css"

export const Quiz = () => {
     
    return (
        <>
            <div className="container">
                
                <div className="score-section">
                    <h2> Your Score is : 3/4</h2>
                    <button> Restart </button>

                </div>

                <div className="question-section">
                    <h2> Question No: 2</h2>
                    <p className="question"> This is the sample question</p>
                    <div className="option-btn">
                        <button>option1</button>
                        <button>option2</button>
                        <button>option3</button>
                        <button>option4</button>
                    </div>
                    <p className="timer"> The time left is <span>5s</span></p>
                </div>
            </div>
        </>
    )

}