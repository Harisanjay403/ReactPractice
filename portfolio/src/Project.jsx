import './Project.css'

export const Project = () =>{
    
    return(
        <>
            <div className="project-container">
                <div className="project">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/bmiImg.png" alt="BMI Image" />
                        </div>

                        <div className="project-button">
                            <button>Github-Code</button>
                            <button>Website</button>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>BMI Calculator</h1>
                        <p>This React code creates a BMI (Body Mass Index) calculator app. It uses the useState hook to manage height, weight, BMI value, status, and error messages. When users input their height and weight, the calculateBmi function validates the inputs, calculates the BMI, and sets the corresponding status (e.g., "Under Weight", "Normal Weight", etc.). If the inputs are invalid, an error message is shown. The app uses Bootstrap for styling, displaying a responsive layout with an image, input fields, and the calculated results. The BMI status and error messages are dynamically updated based on the user's inputs</p>
                    </div>                  

                </div>

                <div className="project">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/bmiImg.png" alt="BMI Image" />
                        </div>

                        <div className="project-button">
                            <button>Github-Code</button>
                            <button>Website</button>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>BMI Calculator</h1>
                        <p>This React code creates a BMI (Body Mass Index) calculator app. It uses the useState hook to manage height, weight, BMI value, status, and error messages. When users input their height and weight, the calculateBmi function validates the inputs, calculates the BMI, and sets the corresponding status (e.g., "Under Weight", "Normal Weight", etc.). If the inputs are invalid, an error message is shown. The app uses Bootstrap for styling, displaying a responsive layout with an image, input fields, and the calculated results. The BMI status and error messages are dynamically updated based on the user's inputs</p>
                    </div>                  

                </div>

                
            </div>
        </>
    )
}