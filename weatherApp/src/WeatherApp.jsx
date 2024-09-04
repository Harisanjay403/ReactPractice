import { useState } from 'react'
import './WeatherApp.css'

import clearSun from './assets/clearSun.png'

const WeatherDetail=({weatherimg,temp,city,country,lat,lon})=>{
    return(
        <>
            <div className='weatherimg'><img src={weatherimg} alt="" /></div>
            <div className="temp">{temp}&#176;C</div>
            <div>{city}</div>
            <div>{country}</div>
            <div>{lat}</div>
            <div>{lon}</div>
        </>
    )

}

export const WeatherApp = () => {
    const [weatherimg,setWeatherimg]=useState(clearSun);
    const [temp,setTemp]=useState(0);
    const [city, setCity]=useState("Chennai")
    const [country,setCountry]=useState("IN")
    const [lat,setLat]=useState(22.775)
    const [lon,setLon]=useState(34.864)
  return (
    <div className='container'>
        <div className='city-input'>
            <input type="text" placeholder='Search the city' /><span><img src="https://static.vecteezy.com/system/resources/thumbnails/014/440/989/small/search-black-shadow-icon-socialicon-set-png.png" alt="search-icon" /></span>
        </div>

        < WeatherDetail weatherimg={weatherimg} temp={temp} city={city} country={country} lat={lat} lon={lon}/>
        
    </div>
  )
}
