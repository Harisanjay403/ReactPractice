import './CurrencyConverter.css'

export const CurrencyConverter = () => {
  return (
    <div>
        <div className="container">
            <div className="img"></div>

            <div className="data">
                <h1>CURRENCY CONVERTER</h1>

                <div className="input-container">
                  <label htmlFor="amt">Amount</label>
                  <input type="number"  id="amt" />
                </div>

                <div className="input-container">
                  <label htmlFor="from-currency">From Currency</label>
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
                  <select id="to-currency">
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
                  <p>1 INR is equal to 88.34 USD</p>
                </div>

            </div>


        </div>
    </div>
  )
}
