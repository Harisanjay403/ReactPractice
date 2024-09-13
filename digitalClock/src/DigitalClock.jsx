import React, { useState } from 'react'
import './DigitalClock.css'

export const DigitalClock = () => {

    const [currentTime,setCurrentTime]=useState( new Date())

    const handle12hrs=(time)=>{
        return(
        time === 0 ? time = 12 :time >12 ? time-12 :time
        )
    }

    const startWithZero = (time)=>{
        return(
            time<10? `0${time}`:time
        )
    }
    setInterval(()=>{
        const timer=setCurrentTime(new Date())
    return ()=> clearInterval(timer)
    },1000)

  return (
    <div className='container'>
        <h1>Digital Clock</h1>
        <div className="time">
            {startWithZero(handle12hrs(currentTime.getHours()))}
            :{startWithZero(currentTime.getMinutes())}
            :{startWithZero(currentTime.getSeconds())}
        </div>
        <div className="date">Friday,13 September, 2024</div>

        
    </div>
  )
}
