import './Project.css'
import bmi from './assets/bmiImg.png'

export const Project = () =>{
    
    return(
        <>
            <div className="project-container">
                <div className="project" data-aos="fade-right">
                    <div className="img-container">
                        <div className="bmi-project-img">
                            
                        </div>

                        <div className="project-button">
                            <a href=""><button>Github-Code</button></a>
                            <a href=""><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>BMI Calculator</h1>
                        <p>This React code implements a BMI calculator app using the useState hook to manage height, weight, BMI values, statuses, and error messages. Bootstrap styles ensure a responsive layout, dynamically displaying calculated results and error messages.</p>
                    </div>                  

                </div>

                <div className="project" data-aos="fade-left">
                    <div className="img-container">
                        <div className="calendar-project-img">
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/Calender/src"><button>Github-Code</button></a>
                            <a href="https://harisanjayrajancalendar.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Calendar</h1>
                        <p>The Calendar functional component in React displays a calendar interface, tracking the current date with useState. Users can navigate months and years via dropdowns, while Bootstrap manages layout and CSS styles enhance visuals.</p>
                    </div>                  

                </div>

                <div className="project" data-aos="fade-right">
                    <div className="img-container">
                        <div className="currency-project-img">
                            
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/currencyConverter/src" ><button>Github-Code</button></a>
                            <a href="https://currency-converter---hari.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Currency Converter</h1>
                        <p>
                        The CurrencyConverter component in React manages conversion logic by importing necessary modules and hooks. It fetches real-time exchange rates via useEffect, with Bootstrap for layout and Axios for API requests.</p>
                    </div>                  

                </div>

                <div className="project" data-aos="fade-left">
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
                        <p>The DigitalClock React component displays live time in a 12-hour format and formatted date, updating every second with useState and setInterval. Bootstrap components ensure a responsive layout, enhancing usability.</p>
                    </div>                  

                </div>

                <div className="project" data-aos="fade-right">
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
                        <p>This React component implements a FAQ section using the useState hook to toggle answer visibility. It employs React-Bootstrap for layout, mapping an array of FAQ data to individual FaqContainer components for organized presentation.</p>
                    </div> 
                 

                </div>

                <div className="project" data-aos="fade-left">
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
                        <p>This React application utilizes react-router-dom for routing and state management, initializing a shopping cart with useState. It features a Header displaying cart contents and routes for Home and Cart components, allowing dynamic updates.</p>
                    </div> 

                                      

                </div>

                <div className="project" data-aos="fade-right">
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
                        <p>The PasswordGenerator component enables users to create customizable passwords by selecting options for character types and length. It generates a random password upon clicking "Generate Password" and supports clipboard copying, styled with Bootstrap.</p>
                    </div> 

                                      

                </div>

               <div className="project" data-aos="fade-left">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/qrcodeGenerator.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/QrCodeGenerator/src" ><button>Github-Code</button></a>
                            <a href="https://qr-code-generator---harisanjay.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>QR Code Generator</h1>
                        <p>This React application generates QR codes using useState to manage the QR code image, loading status, data input, and size. Users input data and can download the generated QR code, with Bootstrap enhancing the layout.</p>
                    </div> 

                                      

                </div>

                <div className="project" data-aos="fade-right">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/mcq.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/Quiz/src" ><button>Github-Code</button></a>
                            <a href="https://mcq-harisanjay-rajan.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Multiple Choice Question</h1>
                        <p>
                        The MCQ application is a React-based quiz interface that utilizes useState to manage the score and current question. It presents multiple-choice questions, updates scores, and allows navigation, with Bootstrap styling. Users can restart the quiz as needed.</p>
                    </div>                                    

                </div>
                <div className="project" data-aos="fade-left">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/registration.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/Registration/src" ><button>Github-Code</button></a>
                            <a href="https://registration-form-harisanjay-r.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Simple Registration Form</h1>
                        <p>The registration form presents user details in a table, allowing updates via input fields for name and age, radio buttons for gender, a checkbox for marital status, a dropdown menu for country, and a bio textarea, managed by the handleChange function</p>
                    </div>                                    

                </div>
                <div className="project" data-aos="fade-right">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/usercard.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/UserCard/src" ><button>Github-Code</button></a>
                            <a href="https://user-card-harisanjay-rajan.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>User Card</h1>
                        <p>The UserCard component displays user profiles through the User subcomponent, showcasing online status, images, names, cities, designations, and skills. It features “Message” and “Following” buttons, organized in a responsive grid layout using Bootstrap.</p>
                    </div>                                    

                </div>

                <div className="project" data-aos="fade-left">
                    <div className="img-container">
                        <div className="project-img">
                            <img src="./src/assets/weather.JPG" alt="Image" />
                        </div>

                        <div className="project-button">
                            <a href="https://github.com/Harisanjay403/ReactPractice/tree/main/weatherApp/src" ><button>Github-Code</button></a>
                            <a href="https://weather-app-harisanjay-rajan.web.app/"><button>Website</button></a>
                        </div>

                    </div>           
                    
                    <div className="project-content">
                        <h1>Weather App</h1>
                        <p>The WeatherApp component retrieves city-specific weather data from the OpenWeatherMap API, managing parameters like temperature and humidity. It displays this data in the WeatherDetail subcomponent and utilizes Bootstrap for responsive design.</p>
                    </div>                                    

                </div>

                
            </div>
        </>
    )
}

                
