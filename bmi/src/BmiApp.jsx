import React, { useState } from 'react'
import './BmiApp.css'

export const BmiApp = () => {

  const [height,setHeight]=useState("")
  const [weight,setWeight]=useState("")
  const [bmi,setBmi]=useState("")
  const [bmiStatus,setBmiStatus]=useState("")

  const calculateBmi =()=>{
    const heightInMtr = height/100;
    const bmiValue= weight/(heightInMtr*heightInMtr)
    console.log(bmiValue)
    setBmi(bmiValue.toFixed(2))
  }

  return (
    <div>
      <div className="bmi-calculator">
        
        <div className="bg-img"></div>
        
        <div className="bmi-data">
          <h1>Bmi calculator</h1>
          
          <div className="input-container">
            <label htmlFor="height"> Height(cm)</label>
            <input type="text" value={height} onChange={(e)=>{setHeight(e.target.value)}} placeholder='Enter Your Hight' />
          </div>

          <div className="input-container">
            <label htmlFor="weight"> Weight(kg)</label>
            <input type="text" value={weight} onChange={(e)=>{setWeight(e.target.value)}} placeholder='Enter Your Weight' />
          </div>
          
          <button onClick={calculateBmi}>Calculate BMI</button>

          <div className="result">
            <p>Your BMI is <span>{bmi}</span></p>
            <p>Status: <span>Over Weight</span> </p>
          </div>

        </div>
      </div>
    </div>
  )
}
