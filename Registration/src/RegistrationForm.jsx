import { useState } from "react"
import "./RegistrationForm.css"


export const RegistrationForm = () => {

    const[user, setUser]=useState({
        name:"Karan Kumar",
        age:25,
        gender:"male",
        marital:false,
        country:"India",
        bio:"Write something about yourself"

    })

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.type === "checkbox"?e.target.checked : e.target.value;
        setUser({...user,[name]:value})
    }

  return (
    <div className="registration-form-container">
        <h1>Registration Form</h1>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <th>Marital Status</th>
                    <td>{user.marital?"married":"Unmarried"}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>{user.country}</td>
                </tr>
                <tr>
                    <th>Bio</th>
                    <td>{user.bio}</td>
                </tr>
                
            </tbody>
        </table>

        <form>
            <input type="text" value={user.name} placeholder="Enter your name" name="name" onChange={handleChange}/>
            
            <input type="text" value={user.age} placeholder="Enter your Age" name="age"onChange={handleChange}/>
            
            <div className="gender">
                <label htmlFor="male"> <input type="radio" id="male" name="gender" value="Male" onChange={handleChange}/>Male</label>
                <label htmlFor="female"><input type="radio" name="gender" id="female" value="Female" onChange={handleChange} />Female</label>
            </div>
            <label htmlFor="isMarried"><input type="checkbox" id="isMarried" name="marital" onChange={handleChange}/> Is Married</label>

            <div className="country">
                <label htmlFor="country-select">Select Country:</label>
                <select value={user.country} name="country" onChange={handleChange}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="China">China</option></select>
                
                
            </div>

            <textarea name="bio" placeholder="White something about yourself" rows="5" cols="20" onChange={handleChange}></textarea>

        </form>
        
    </div>
  )
}
