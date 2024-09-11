import './CurrencyConverter.css'
import { useEffect, useState } from 'react'
import  axios  from 'axios';

export const CurrencyConverter = () => {

  const[amount,setAmount]=useState(1)
  const[fromCurrency,setFromCurrency]=useState("USD")
  const[toCurrency,setToCurrency]=useState("INR")
  const[convertedCurrency,setConvertedCurrency]=useState(null)
  const[exchangeCurrencyRate,setExchangeCurrencyRate]=useState(0)

  const handleAmount=(e)=>{
    const value = parseFloat(e.target.value)
    setAmount(value)
  }

  const handleFromCurrency = (e) =>{
    setFromCurrency(e.target.value)
  }

  const handleToCurrency = (e) =>{
    setToCurrency(e.target.value)
  }

  useEffect(()=>{
    const getExchangeRate = async()=>{
      try{
        let url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        const res = await axios.get(url)
        console.log(res)


      }catch(error){
        console.error("error occuing in currency converter due to ", error)
      }
  }
  getExchangeRate()
  },[])

  return (
    <div>
        <div className="container">
            <div className="img"></div>

            <div className="data">
                <h1>CURRENCY CONVERTER</h1>

                <div className="input-container">
                  <label htmlFor="amt">Amount</label>
                  <input type="number" value={amount} onChange={handleAmount}  id="amt" />
                </div>

                <div className="input-container">
                  <label htmlFor="from-currency" value={fromCurrency} onChange={handleFromCurrency}>From Currency</label>
                  <select id="from-currency">
                    <option value="USD">USD - United States Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound Sterling</option>
                    <option value="JPY">JPY - Japanese Yen  </option>
                    <option value="AUD">AUD - Australian Dollar</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="BRL">BRL - Brazilian Real</option>
                    <option value="ZAR">ZAR - South African Rand</option>
                  </select>
                </div>

                <div className="input-container">
                  <label htmlFor="to-currency">To Currency</label>
                  <select id="to-currency" value={toCurrency} onChange={handleToCurrency}>
                    <option value="USD">USD - United States Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound Sterling</option>
                    <option value="JPY">JPY - Japanese Yen  </option>
                    <option value="AUD">AUD - Australian Dollar</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="BRL">BRL - Brazilian Real</option>
                    <option value="ZAR">ZAR - South African Rand</option>
                  </select>
                </div>

                <div className="result">
                  <p>{amount} {fromCurrency} is equal to {convertedCurrency} {toCurrency}</p>
                </div>

            </div>


        </div>
    </div>
  )
}
