import React, { useState } from 'react'
import './DigitalClock.css'
import { Container, Row, Col} from 'react-bootstrap'

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

    const formatDate = (date)=>{
        const option={
                    
                   year:"numeric",month:"long",
                   day:"numeric",
                   weekday:"long",
                }
        return date.toLocaleDateString(undefined,option)

    }
    

  return (
    <Container>
        <Row>
            <Col xs={12}>
            <div className='data-container'>
            <h1>Digital Clock</h1>
            <div className="time">
                {startWithZero(handle12hrs(currentTime.getHours()))}
                :{startWithZero(currentTime.getMinutes())}
                :{startWithZero(currentTime.getSeconds())}
            <span>{currentTime.getHours() <12 ? " AM" : " PM" }</span> 
            </div>
            <div className="date">{formatDate(currentTime)}</div>        
        </div>
            
            </Col>
        </Row>
        

    </Container>
    
  )
}
