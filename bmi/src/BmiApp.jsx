import React from 'react'
import './BmiApp.css'

export const BmiApp = () => {
  return (
    <div>
      <div className="bmi-calculator">
        
        <div className="bg-img"></div>
        
        <div className="bmi-data">
          <h1>Bmi calculator</h1>
          
          <div className="input-container">
            <label htmlFor="height"> Height(cm)</label>
            <input type="text" placeholder='Enter Your Hight' />
          </div>

          <div className="input-container">
            <label htmlFor="weight"> Weight(kg)</label>
            <input type="text" placeholder='Enter Your Weight' />
          </div>
          
          <button>Calculate BMI</button>

          <div className="result">
            <p>Your BMI is <span>30</span></p>
            <p>Status: <span>Over Weight</span> </p>
          </div>

        </div>
      </div>
    </div>
  )
}
