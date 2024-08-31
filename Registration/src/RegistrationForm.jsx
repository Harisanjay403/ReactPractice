import "./RegistrationForm.css"


export const RegistrationForm = () => {
  return (
    <div className="registration-form-container">
        <h1>Registration Form</h1>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>Raj Kumar</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>23</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>Male</td>
                </tr>
                <tr>
                    <th>Marital Status</th>
                    <td>unmarried</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>India</td>
                </tr>
                <tr>
                    <th>Bio</th>
                    <td>Write something about you</td>
                </tr>
                
            </tbody>
        </table>

        <form>
            <input type="text" placeholder="Enter your name" />
            
            <input type="text" placeholder="Enter your Age"/>
            
            <div className="gender">
                <label htmlFor="male"> <input type="radio" id="male" name="gender"/>Male</label>
                <label htmlFor="female"><input type="radio" name="gender" id="female" />Female</label>
            </div>
            <label htmlFor="isMarried"><input type="checkbox" id="isMarried" /> Is Married</label>

            <div className="country">
                <label htmlFor="country-select">Select Country:</label>
                <select><option>India</option>
                <option>USA</option>
                <option>China</option></select>
                
                
            </div>

            <textarea placeholder="White something about yourself" rows="5" cols="20"></textarea>

        </form>
        
    </div>
  )
}
