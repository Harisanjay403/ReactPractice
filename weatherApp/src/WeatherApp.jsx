import { useState } from 'react'
import './WeatherApp.css'

import clearSun from './assets/clearSun.png'

const WeatherDetail=({weatherimg})=>{
    return(
        <>
            <div className='weatherimg'><img src={weatherimg} alt="" /></div>
        </>
    )

}

export const WeatherApp = () => {
    const [weatherimg,setWeatherimg]=useState(clearSun)
  return (
    <div className='container'>
        <div className='city-input'>
            <input type="text" placeholder='Search the city' /><span><img src="https://static.vecteezy.com/system/resources/thumbnails/014/440/989/small/search-black-shadow-icon-socialicon-set-png.png" alt="search-icon" /></span>
        </div>

        < WeatherDetail weatherimg={weatherimg} />
        
    </div>
  )
}
