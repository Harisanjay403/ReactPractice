import React, { useState } from 'react'
import './Qrcodegenerator.css'
import { Container, Row, Col } from 'react-bootstrap'

export const Qrcodegenerator = () => {

  const [img,setImg]=useState("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=QR%20Code%20Generator%20project%20designed%20by%20Harisanjay%20Rajan")
  
  const[loading,setLoading]=useState(false)
  const [qrData,setQrData]=useState('QR Code Generator project designed by Harisanjay Rajan')
  const [qrSize,setQrSize]=useState(210)

  // setImg("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPWQTnePNQOhGoSq8Sv0hdxWo0QOU_Ys-6djgmxz3f7vYE_QqTANwmbRCU7TADxAQ6-dedxQ07miTw15vMFfBqOPxrZTid5BtVW8d55uP4Rl_z4jpHGUD8VjktnfAo5RMdLQ0ai7wJwOI/s200/Shazim+uddin+pp+image+with+stroke.jpg")

  async function handleGenerate(){
    

    try{
      setLoading(true)
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${qrData}`
      setImg(url)

    }catch(error){
      console.error("The error is " + error)

    }finally{
      setLoading(false)
    }

  }
  const handleEnter=(e)=>{
    if(e.key==="Enter"){
      handleGenerate()
    }
  }
  
  const handleDownload = () =>{
    fetch(img)
    .then((response)=>response.blob())
    .then((blob)=>{
      const link=document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download= "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error)=>{
        console.error("Error downloading QR Code", error);
      }
    );

  }
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className='qr-code-container'>
        
              <h1 className='heading'> QR CODE GENERATOR</h1>
              {loading && <p>Please Wait ...</p>}
              
              {img &&  <img src={img} alt="image" className='img'/> }

              <label htmlFor="data-input" className='input-label'>Enter the Date for the QR code</label>
              <input type="text" id='data-input' value={qrData} onChange={(e)=>{setQrData(e.target.value)}} 
              placeholder='Enter the Data' onKeyDown={(e)=>{handleEnter(e)}}/>

              <label htmlFor="size-input" className='input-label'>Enter the image size(e.g., 210)</label>
              <input 
                type="number" 
                id='size-input' 
                value={qrSize} 
                onChange={(e)=>{setQrSize(e.target.value)}} 
                placeholder='Enter the size'
                onKeyDown={(e)=>{handleEnter(e)}}
                />

              <div className='btn-div'>
                <button className='generate-btn' onClick={handleGenerate}>Generate QR Code</button>
                <button className='download-btn' onClick={handleDownload}>Download QR Code</button>

              </div>
            
              
              <div className='footer'> Designed by <span>Harisanjay</span></div>
          </div>
        
        </Col>
      </Row>
    </Container>
    
  )
}
