import React from 'react'

export const ArraySample = ({items, handleClick}) => {
   
    
  return (
    <div>
        <h2>This is a List</h2>
        <ul>
        {items.map((item)=>(<li key={item.id}>{item.names}</li>))}
    
        </ul>
        <h2>sending fuction as props</h2>
        <button onClick={handleClick}>Click</button>
        
    </div>
  )
}
