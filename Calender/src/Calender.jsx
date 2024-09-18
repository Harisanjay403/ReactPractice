import { useState } from 'react'
import './Calender.css'

export const Calender = () => {

    const [currentDate,setCurrentDate] = useState(new Date())

    const months=['January', "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]

    return(
        <>
            <div className="calender">
                <div className="header">
                    <button>&lt;</button>

                    <select className='months' value={months[currentDate.getMonth()]} >
                        {months.map((month,intex)=>(<option value={month} key={intex} >{month}</option>))}
                    </select>

                    <select className='years' value={currentDate.getFullYear()}>
                        {Array.from({length:10}, (_,i)=> currentDate.getFullYear()-5+i).map((year)=>(<option value={year} key={year} >{year}</option>))}
                    </select>

                    <button>&gt;</button>
                </div>
            </div>
        </>
    )
}