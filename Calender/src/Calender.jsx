import { useState } from 'react'
import './Calender.css'

export const Calender = () => {

    const [currentDate,setCurrentDate] = useState(new Date())

    const months=['January', "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]

    const weekDays=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const firstDate=new Date(currentDate.getFullYear(),currentDate.getMonth(),1)
    const lastDate=new Date(currentDate.getFullYear(),currentDate.getMonth()+1,0)

    const datesOfMonth = ()=>{
        const dateArray=[];

        for(let i=0; i<firstDate.getDay();i++){
            dateArray.push(null)
        }

        for( let i=1; i<=lastDate.getDate();i++){
            dateArray.push(new Date(currentDate.getFullYear(),currentDate.getMonth(),i))
        }

        return dateArray
    }
    
    const handleMonth = (e)=>{
        const newMonth = parseInt(e.target.value,10)
        setCurrentDate(new Date(currentDate.getFullYear(),newMonth,1))
    }

    const handleYear = (e) =>{
        const newYear = parseInt(e.target.value,10)
        setCurrentDate(new Date(newYear,currentDate.getMonth(),1))
    }

    const handleNextMonth = () =>{
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 1))
    }

    const handlePreviousMonth = () =>{
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 1))
    }

    const isSameDate = (date1,date2)=>{
        return(date1.getFullYear()===date2.getFullYear() && date1.getMonth()===date2.getMonth() && date1.getDate()===date2.getDate())
    }

    return(
        <>
            <div className="calender">
                <div className="header">
                    <button onClick={handlePreviousMonth}>&lt;</button>

                    <select className='months' onChange={handleMonth} value={currentDate.getMonth()} >
                        {months.map((month,intex)=>(<option value={intex} key={intex} >{month}</option>))}
                    </select>

                    <select className='years' onChange={handleYear} value={currentDate.getFullYear()}>
                        {Array.from({length:10}, (_,i)=> currentDate.getFullYear()-5+i).map((year)=>(<option value={year} key={year} >{year}</option>))}
                    </select>

                    <button onClick={handleNextMonth}>&gt;</button>
                </div>

                <div className="week-days">
                    {weekDays.map((day,index)=>(
                        <div key={index}>{day}</div>
                    ))}
                </div>

                <div className="dates">
                    {datesOfMonth().map((date,index)=>(<div key={index} className={date? (isSameDate(date, new Date())? "date current":"date"): "empty"}>{date?date.getDate():""}</div>))}
                </div>

            </div>
        </>
    )
}