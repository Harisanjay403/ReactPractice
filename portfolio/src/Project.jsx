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
                            <img src="./src/assets/digitalclockimg.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/digitalClock/src" ><button>Github-Code</button></a>
                            <a href="https://digital-clock-harisanjayrajan.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Digital Clock</h1>
                        <p>This React component, DigitalClock, displays a live time with a 12-hour format and a formatted date. It uses useState to store the current time and updates every second with setInterval. The handle12hrs function converts 24-hour time to 12-hour, and startWithZero adds a leading zero to single-digit numbers. The formatDate function formats the date with options like year, month, day, and weekday. The layout uses Bootstrap components for responsiveness.</p>
                    </div>                  

                </div>

                <div className="project">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/faq.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/FAQ/src" ><button>Github-Code</button></a>
                            <a href="https://faq-harisanjay-rajan.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>FAQ</h1>
                        <p>This React component creates a FAQ section using the useState hook to manage the visibility of answers. When a question is clicked, the corresponding answer toggles between visible and hidden. The component utilizes React-Bootstrap for layout, structuring the content within a Container, Row, and Col. An array of FAQ data is mapped to render individual FaqContainer components for each question-answer pair. This design enhances user interaction and presents information in a clean, organized manner.</p>
                    </div> 
                 

                </div>

                <div className="project">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/foodcart.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/foodcart/src" ><button>Github-Code</button></a>
                            <a href="https://food-cart-harisanjay-rajan.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Foodcart</h1>
                        <p>This React application sets up routing and state management using react-router-dom. The App component initializes a shopping cart state with useState. It renders a Header component that displays the cart's contents. The main content is structured within a container, with two routes: the home page and the cart page. The Home and Cart components receive the cart state and the setCart function as props, allowing them to update the cart dynamically.</p>
                    </div> 

                                      

                </div>

                <div className="project">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/password.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/passwordGenerator/src" ><button>Github-Code</button></a>
                            <a href="https://password-generator-harisanjay.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Strong Password Generator</h1>
                        <p>The PasswordGenerator component allows users to create customizable passwords. Users can select options for uppercase letters, lowercase letters, numbers, and symbols, as well as specify the password length. When the "Generate Password" button is clicked, a random password is created based on these settings. The generated password can be copied to the clipboard with an alert confirmation. The component uses React hooks for state management and updates, along with Bootstrap for styling and layout.</p>
                    </div> 

                                      

                </div>

                <div className="project">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/password.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/passwordGenerator/src" ><button>Github-Code</button></a>
                            <a href="https://password-generator-harisanjay.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Strong Password Generator</h1>
                        <p>The PasswordGenerator component allows users to create customizable passwords. Users can select options for uppercase letters, lowercase letters, numbers, and symbols, as well as specify the password length. When the "Generate Password" button is clicked, a random password is created based on these settings. The generated password can be copied to the clipboard with an alert confirmation. The component uses React hooks for state management and updates, along with Bootstrap for styling and layout.</p>
                    </div> 

                                      

                </div>

                
            </div>
        </>
    )
}
