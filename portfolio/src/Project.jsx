import './Project.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import bmiImg from './assets/bmiImg.png'
import calendarImg from './assets/calendarImg.jpg'
import currencyConverterImg from './assets/currencyconverterimg.JPG'
import digitalClockImg from './assets/digitalclockimg.JPG'
import faqImg from './assets/faq.JPG'
import foodCartImg from './assets/foodcart.JPG'
import mcqImg from './assets/mcq.JPG'
import passwordImg from './assets/password.JPG'
import qrCodeImg from './assets/qrcodeGenerator.JPG'
import registrationFormImg from './assets/registration.JPG'
import usercardImg from './assets/usercard.JPG'
import weatherImg from './assets/weather.JPG'

export const Project = () =>{
 const data=[
    {
        aosType:"fade-right",
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/bmi/src",
        websiteLink:"https://bmi-app-harisanjay-rajan.web.app/",
        projectName:"BMI Calculator",
        explaination:"This React code implements a BMI calculator app using the useState hook to manage height, weight, BMI values, statuses, and error messages. Bootstrap styles ensure a responsive layout, dynamically displaying calculated results and error messages." ,
        imgSrc:bmiImg
    },
    {
        aosType:"fade-left",
        imgSrc:calendarImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/Calender/src",
        websiteLink:"https://harisanjayrajancalendar.web.app/",
        projectName:"Calendar",
        explaination:"The Calendar functional component in React displays a calendar interface, tracking the current date with useState. Users can navigate months and years via dropdowns, while Bootstrap manages layout and CSS styles enhance visuals."
    },
    {
        aosType:"fade-right",
        imgSrc:currencyConverterImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/currencyConverter/src",
        websiteLink:"https://currency-converter---hari.web.app/",
        projectName:"Currency Converter",
        explaination:"The CurrencyConverter component in React manages conversion logic by importing necessary modules and hooks. It fetches real-time exchange rates via useEffect, with Bootstrap for layout and Axios for API requests."
    },
    {
        aosType:"fade-left",
        imgSrc:digitalClockImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/digitalClock/src",
        websiteLink:"https://digital-clock-harisanjayrajan.web.app/",
        projectName:"Digital Clock",
        explaination:"The DigitalClock React component displays live time in a 12-hour format and formatted date, updating every second with useState and setInterval. Bootstrap components ensure a responsive layout, enhancing usability."
    },
    {
        aosType:"fade-left",
        imgSrc:faqImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/FAQ/src" ,
        websiteLink:"https://faq-harisanjay-rajan.web.app/",
        projectName:"FAQ",
        explaination:"This React component implements a FAQ section using the useState hook to toggle answer visibility. It employs React-Bootstrap for layout, mapping an array of FAQ data to individual FaqContainer components for organized presentation."
    },
    {
        aosType:"fade-right",
        imgSrc:foodCartImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/foodcart/src" ,
        websiteLink:"https://food-cart-harisanjay-rajan.web.app/",
        projectName:"Food Cart",
        explaination:"This React application utilizes react-router-dom for routing and state management, initializing a shopping cart with useState. It features a Header displaying cart contents and routes for Home and Cart components, allowing dynamic updates."
    },
    {
        aosType:"fade-left",
        imgSrc:passwordImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/passwordGenerator/src" ,
        websiteLink:"https://password-generator-harisanjay.web.app/",
        projectName:"Strong Password Generator",
        explaination:"The PasswordGenerator component enables users to create customizable passwords by selecting options for character types and length. It generates a random password upon clicking Generate Password and supports clipboard copying, styled with Bootstrap."
    },
    {
        aosType:"fade-right",
        imgSrc:qrCodeImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/QrCodeGenerator/src",
        websiteLink:"https://qr-code-generator---harisanjay.web.app/",
        projectName:"QR Code Generator",
        explaination:"This React application generates QR codes using useState to manage the QR code image, loading status, data input, and size. Users input data and can download the generated QR code, with Bootstrap enhancing the layout."
    },
    {
        aosType:"fade-left",
        imgSrc:mcqImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/Quiz/src",
        websiteLink:"https://mcq-harisanjay-rajan.web.app/",
        projectName:"Multiple Choice Question (MCQ)",
        explaination:"The MCQ application is a React-based quiz interface that utilizes useState to manage the score and current question. It presents multiple-choice questions, updates scores, and allows navigation, with Bootstrap styling. Users can restart the quiz as needed."
    },
    {
        aosType:"fade-right",
        imgSrc:registrationFormImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/Registration/src" ,
        websiteLink:"https://registration-form-harisanjay-r.web.app/" ,
        projectName:"Simple Registration Form",
        explaination:"The registration form presents user details in a table, allowing updates via input fields for name and age, radio buttons for gender, a checkbox for marital status, a dropdown menu for country, and a bio textarea, managed by the handleChange function."
    },
    {
        aosType:"fade-left",
        imgSrc:usercardImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/UserCard/src" ,
        websiteLink:"https://user-card-harisanjay-rajan.web.app/",
        projectName:"User Card",
        explaination:"The UserCard component displays user profiles through the User subcomponent, showcasing online status, images, names, cities, designations, and skills. It features “Message” and “Following” buttons, organized in a responsive grid layout using Bootstrap."
    },
    {
        aosType:"fade-right",
        imgSrc:weatherImg,
        gitHublink:"https://github.com/Harisanjay403/ReactPractice/tree/main/weatherApp/src" ,
        websiteLink:"https://weather-app-harisanjay-rajan.web.app/",
        projectName:"Weather App",
        explaination:"The WeatherApp component retrieves city-specific weather data from the OpenWeatherMap API, managing parameters like temperature and humidity. It displays this data in the WeatherDetail subcomponent and utilizes Bootstrap for responsive design."
    },
 ]

    
    return(
        <>
        <Container>
            <Row>
                <Col>

                <div className="project-container">

                    {data.map((item,index)=>(
                        <div className="project" data-aos={item.aosType} key={index}>
                        <div className="img-container">
                        
                            <div className='project-img'>
                                <Image src={item.imgSrc} alt="project image" fluid />
                            
                            </div>

                            <div className="project-button">
                                <a href={item.gitHublink}><button>Github-Code</button></a>
                                <a href={item.websiteLink}><button>Website</button></a>
                            </div>

                        </div>           
                        
                        <div className="project-content">
                            <h1>{item.projectName}</h1>
                            <p>{item.explaination}</p>
                        </div>                  

                    </div>
                    ))}
                </div>
                </Col>
            </Row>
        </Container>
              
            
        </>
    )
}

