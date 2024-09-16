
import { useState } from 'react'
import './PasswordGenerator.css'
export const PasswordGenerator = ()=>{
    const [upperCase,setUpperCase]=useState(true)
    const [lowerCase,setLowerCase]=useState(true)
    const [symbol,setSymbol]=useState(true)
    const [number,setNumber]=useState(true)
    const [length,setLength]=useState()

    const handleLength = (e) =>{
        setLength(parseInt(e.target.value))
    }

    let charset = ""

    if(upperCase){
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(lowerCase){
        charset += "abcdefghijklmnopqrstuvwxyz"
    }
    if(symbol){
        charset += "!@#$%^&*"
    }
    if(number){
        charset += "012345679"
    }
    console.log(charset)

    return(
        <>
        <div className="container">
            <h1 className='heading'>Strong Password Generator</h1>
            
                <div className="input-data">
                    <label htmlFor="input-length">Password Length</label>
                    <input type="number" id="input-length" value={length} onChange={handleLength} />
                </div>

                <div className="include-group">
                    <input 
                        type="checkbox" 
                        id="uppercase" 
                        checked={upperCase} 
                        onChange={(e)=>setUpperCase(e.target.checked)}/>
                    <label htmlFor="uppercase"> Include Upper Case</label>
                </div>

                <div className="include-group">
                        <input type="checkbox" id="lowercase" checked={lowerCase}  onChange={(e)=>setLowerCase(e.target.checked)}/>
                    <label htmlFor="lowercase"> Include Lower Case</label>
                </div>

                <div className="include-group">
                    <input type="checkbox" id="number" checked={number}  onChange={(e)=>setNumber(e.target.checked)}/>
                    <label htmlFor="number"> Include number </label>
                </div>

                <div className="include-group">
                    <input type="checkbox" id="symbol" checked={symbol}  onChange={(e)=>setSymbol(e.target.checked)} />
                    <label htmlFor="symbol"> Include symbol </label>
                </div>

                <button className='generate-button'>Generate Password</button>

                <div className="generated-password">
                    <input type="text" readOnly />
                    <button>Copy</button>
                </div>

            
        </div>
        </>
    )
}