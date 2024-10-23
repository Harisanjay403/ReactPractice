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
                            <a href=""><button>Github-Code</button></a>
                            <a href=""><button>Website</button></a>
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
                            <img src="./src/assets/calendarImg.jpg" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/Calender/src"><button>Github-Code</button></a>
                            <a href="https://harisanjayrajancalendar.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Calendar</h1>
                        <p>This React code defines a functional component Calender that displays a calendar interface. It uses useState to track the current date, rendering the days of the current month. Users can change the month and year using dropdowns or navigation buttons. The datesOfMonth function calculates and returns an array representing the days of the selected month. The calendar highlights the current date, and CSS styles control the visual layout. It also uses Bootstrap for layout management.</p>
                    </div>                  

                </div>

                <div className="project">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/currencyconverterimg.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/currencyConverter/src" ><button>Github-Code</button></a>
                            <a href="https://currency-converter---hari.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Currency Converter</h1>
                        <p>This code defines a CurrencyConverter component using React. It imports necessary modules and state hooks to manage conversion logic. The user inputs an amount, selects a currency to convert from and to. The useEffect hook fetches real-time exchange rates from an API (exchangerate-api.com) whenever the amount or currency selection changes. The converted value is calculated and displayed. Bootstrap is used for layout, and the axios library is utilized for making the API requests.</p>
                    </div>                  

                </div>

                <div className="project">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/currencyconverterimg.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/currencyConverter/src" ><button>Github-Code</button></a>
                            <a href="https://currency-converter---hari.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Currency Converter</h1>
                        <p>This code defines a CurrencyConverter component using React. It imports necessary modules and state hooks to manage conversion logic. The user inputs an amount, selects a currency to convert from and to. The useEffect hook fetches real-time exchange rates from an API (exchangerate-api.com) whenever the amount or currency selection changes. The converted value is calculated and displayed. Bootstrap is used for layout, and the axios library is utilized for making the API requests.</p>
                    </div>                  

                </div>

                
            </div>
        </>
    )
}