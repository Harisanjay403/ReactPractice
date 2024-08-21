import React from 'react'


export const Student = (props) => {
  return (
    <div className="student">
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{props.name}</td>
                </tr>

                <tr>
                    <th>Age</th>
                    <td>{props.age}</td>
                </tr>

                <tr>
                    <th>Is Married</th>
                    <td>{props.isMarried ? "Yes" : "No"}</td>
                </tr>
            </tbody>
        </table>
    
    </div>

  )
}
Student.defaultProps={
    name: "No Name",
    age: 0,
    isMarried:false
}