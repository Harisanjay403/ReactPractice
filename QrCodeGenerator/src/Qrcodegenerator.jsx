import React from 'react'
import './Qrcodegenerator.css'

export const Qrcodegenerator = () => {
  return (
    <div className='qr-code-container'>
        
        <h1 className='heading'> QR CODE GENERATOR</h1>
        
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPWQTnePNQOhGoSq8Sv0hdxWo0QOU_Ys-6djgmxz3f7vYE_QqTANwmbRCU7TADxAQ6-dedxQ07miTw15vMFfBqOPxrZTid5BtVW8d55uP4Rl_z4jpHGUD8VjktnfAo5RMdLQ0ai7wJwOI/s200/Shazim+uddin+pp+image+with+stroke.jpg" alt="image" className='img'/>

        <label htmlFor="data-input" className='input-label'>Enter the Date for the QR code</label>
        <input type="text" id='data-input' placeholder='Enter the Data'/>

        <label htmlFor="size-input" className='input-label'>Enter the size(e.g., 150)</label>
        <input type="text" id='size-input' placeholder='Enter the size'/>

        <div className='btn-div'>
        <button className='generate-btn'>Generate QR Code</button>
        <button className='download-btn'>Download QR Code</button>

        </div>
      
        
        <p className='footer'> Designed by <span>Harisanjay</span></p>
    </div>
  )
}
