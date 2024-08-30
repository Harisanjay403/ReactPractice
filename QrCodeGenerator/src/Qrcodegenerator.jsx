import React, { useState } from 'react'
import './Qrcodegenerator.css'

export const Qrcodegenerator = () => {

  const [img,setImg]=useState("")
  
  const[loading,setLoading]=useState(false)
  const [qrData,setQrData]=useState('')
  const [qrSize,setQrSize]=useState(150)

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
    <div className='qr-code-container'>
        
        <h1 className='heading'> QR CODE GENERATOR</h1>
        {loading && <p>Please Wait ...</p>}
        
        {img &&  <img src={img} alt="image" className='img'/> }

        <label htmlFor="data-input" className='input-label'>Enter the Date for the QR code</label>
        <input type="text" id='data-input' value={qrData} onChange={(e)=>{setQrData(e.target.value)}} 
         placeholder='Enter the Data'/>

        <label htmlFor="size-input" className='input-label'>Enter the size(e.g., 150)</label>
        <input type="text" id='size-input' value={qrSize} onChange={(e)=>{
            setQrSize(e.target.value)
          
        }} placeholder='Enter the size'/>

        <div className='btn-div'>
        <button className='generate-btn' onClick={handleGenerate}>Generate QR Code</button>
        <button className='download-btn' onClick={handleDownload}>Download QR Code</button>

        </div>
      
        
        <p className='footer'> Designed by <span>Harisanjay</span></p>
    </div>
  )
}
