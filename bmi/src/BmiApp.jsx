import React, { useState } from 'react'
import './BmiApp.css'
import bmiImg from './assets/bmiImg.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';

export const BmiApp = () => {

  const [height,setHeight]=useState("")
  const [weight,setWeight]=useState("")
  const [bmi,setBmi]=useState(null)
  const [bmiStatus,setBmiStatus]=useState("")
  const [errorMsg,setErrorMsg]=useState("")

  const calculateBmi =()=>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    
    if (isValidHeight && isValidWeight){
      const heightInMtr = height/100;
      const bmiValue= weight/(heightInMtr*heightInMtr)
      // console.log(bmi)
      setBmi(bmiValue.toFixed(2))
    
      if (bmiValue<18){
        setBmiStatus("Under Weight")
      }else if(bmiValue>=18.1 && bmiValue<=25){
        setBmiStatus("Normal Weight")
      }else if(bmiValue>=25.1 && bmiValue <= 30){
        setBmiStatus("Over Weight")
      }else if (bmiValue>30){
        setBmiStatus("Obase")
      }

      setErrorMsg("")
    }
    
    else{
      setBmi(null)
      setBmiStatus("")
      setErrorMsg("Please enter the proper value")
    }
  }

  return (
    <>
    
    

    <Container>
      <Row >
       
        <Col xs={12} md={4} >
          <div className="bg-img">
          <Image src={bmiImg} alt="Example" fluid />
          </div>
        </Col>
        
        <Col md={6}>
        <div className="bmi-data">
          <h1>Bmi calculator</h1>
          {errorMsg && <p className='error-msg'>{errorMsg}</p>}
          
          <div className="input-container">
            <label htmlFor="height"> Height(cm)</label>
            <input type="text" value={height} onChange={(e)=>{setHeight(e.target.value)}} placeholder='Enter Your Hight' />
          </div>

          <div className="input-container">
            <label htmlFor="weight"> Weight(kg)</label>
            <input type="text" value={weight} onChange={(e)=>{setWeight(e.target.value)}} placeholder='Enter Your Weight' />
          </div>
          
          <button onClick={calculateBmi}>Calculate </button>

          {bmi!== null && (<div className="result">
                <p>Your BMI is <span>{bmi}</span></p>
                <p>Status: <span>{bmiStatus}</span> </p>
              </div>)}

        </div>
        
        </Col>
       
      </Row>
    </Container>
      
    </>
  )
}
