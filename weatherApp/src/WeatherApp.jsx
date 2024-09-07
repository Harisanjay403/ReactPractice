import { useEffect, useState } from 'react'
import './WeatherApp.css'

import clearSun from './assets/clearSun.png'
import cloud from './assets/cloud.jpg'
import drizzle from './assets/drizzle.jpg'
import rain from './assets/rain.jpg'
import snow from './assets/snow.jpg'

const WeatherDetail=({weatherimg,temp,city,country,lat,lon,humidity,wind,weatherCondition})=>{
    return(
        <>
            <div className='weatherimg'><img src={weatherimg} alt="" /></div>
            <div className='weather-condition'>Weather Condition : {weatherCondition}</div>
            <div className="temp">{temp}&#176;C</div>
            <div className="city">{city}</div>
            <div className="country">{country}</div>
            <div className='coordinates'>
                <div>Latitude <span>{lat}</span></div>
                <div>Longtitude <span>{lon}</span></div>
            </div>
            <div className='data'>
                <div className='element'>
                    <img src="https://cdn-icons-png.flaticon.com/512/4148/4148460.png" alt="humidity-img" />
                    <div className='humidity-percentage'>{humidity} %</div>
                    <div className='text'>Humidity</div>
                </div>

                <div className='element'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxlSUlEj87SPLoZSzO16qH2WlQAQxUJ-yKg&s" alt="wind-img" />
                    <div className='wind-percentage'>{wind} km/h</div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>
        </>
    )

}

export const WeatherApp = () => {
    const [cityName,setCityName]=useState("Coimbatore")
    const [weatherimg,setWeatherimg]=useState(clearSun);
    const [temp,setTemp]=useState(0);
    const [city, setCity]=useState("")
    const [country,setCountry]=useState("IN")
    const [lat,setLat]=useState(22.775)
    const [lon,setLon]=useState(34.864)
    const [humidity,setHumidity]=useState(0)
    const [wind,setWind]=useState("")
    const [weatherCondition,setWeatherConditon] = useState("")
    const [loading,setLoading]=useState(false)
    const [cityNotFound,setCityNotFound]=useState(false)

    const weatherIconMap={
        "01d":clearSun,
        "01n":clearSun,
        "02d":cloud,
        "02n":cloud,
        "03d":drizzle,
        "03n":drizzle,
        "04d":drizzle,
        "04n":drizzle,
        "09d":rain,
        "09n":rain,
        "10d":rain,
        "10n":rain,
        "13d":snow,
        "13n":snow,
    }

    const search = async()=>{
        setLoading(true)
        
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7aa3031291ef2e98891e4647c3190ea5&units=Metric`;

        try{
            let res = await fetch(url);
            let urlDetail = await res.json();
            console.log(urlDetail)
            if(urlDetail.cod === "404"){
                console.error("city not found ")
                setCityNotFound(true)
                setLoading(false)
                return;
            }
            setTemp(Math.floor(urlDetail.main.temp))
            setCity(urlDetail.name)
            setCountry(urlDetail.sys.country)
            setLat(urlDetail.coord.lat)
            setLon(urlDetail.coord.lon)
            setHumidity(urlDetail.main.humidity)
            setWind(urlDetail.wind.speed)
            setWeatherConditon(urlDetail.weather[0].description)

            const iconCode=urlDetail.weather[0].icon;
            setWeatherimg(weatherIconMap[iconCode] || clearSun)
            console.log('The code is ',iconCode)
            setCityNotFound(false)


        }catch(error){

        }finally{
            setLoading(false)
            
        }
        let res = await fetch(url)
        let urlDetail =res.json()
    }

    const handleCityName =(e)=>{
        setCityName(e.target.value)
    }

    const handleSearch=(e)=>{
        if(e.key === "Enter"){
            search()
        }
    }
    useEffect(function(){
        search()
    },[])
  return (
    <div className='container'>
        <div className='city-input'>
            <input type="text" placeholder='Search the city' onChange={handleCityName} value={cityName} onKeyDown={handleSearch}/><span><img src="https://static.vecteezy.com/system/resources/thumbnails/014/440/989/small/search-black-shadow-icon-socialicon-set-png.png" alt="search-icon" onClick={()=>{search()}} /></span>
        </div>

        
        {loading && <div className="loading"> Loading...</div>}
        {cityNotFound && <div className="city-not-found"> City Not Found</div>}

        {!cityNotFound && < WeatherDetail weatherimg={weatherimg} temp={temp} city={city} country={country} lat={lat} lon={lon} humidity={humidity} wind={wind} weatherCondition={weatherCondition}/>}
        
        <p className='copyright'>Designed by <span>Harisanjay</span></p>
        
    </div>
  )
}
