import React from 'react'

export const ArraySample = ({items}) => {
   
    
  return (
    <div>
        <h2>This is a List</h2>
        <ul>
        {items.map((item)=>(<li>{item.names}</li>))}
    
        </ul>
        
    </div>
  )
}
