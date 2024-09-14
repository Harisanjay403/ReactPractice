
import './PasswordGenerator.css'
export const PasswordGenerator = ()=>{

    return(
        <>
        <div className="container">
            <h1 className='heading'>Strong Password Generator</h1>
            
                <div className="input-data">
                    <label htmlFor="input-length">Password Length</label>
                    <input type="number" id="input-length" />
                </div>

                <div className="include-group">
                    <input type="checkbox" id="uppercase" />
                    <label htmlFor="uppercase"> Include Upper Case</label>
                </div>

                <div className="include-group">
                    <input type="checkbox" id="lowercase" />
                    <label htmlFor="lowercase"> Include Lower Case</label>
                </div>

                <div className="include-group">
                    <input type="checkbox" id="number" />
                    <label htmlFor="number"> Include number </label>
                </div>

                <div className="include-group">
                    <input type="checkbox" id="symbol" />
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