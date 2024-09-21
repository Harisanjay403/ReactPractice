import { useReducer } from 'react'
import './App.css'





function App() {

  function reducer(state,action){
  
    if(action.type===add_task){
      const todoArray= (e)=>{
        const inputValue=e.target.value;
        listArray[{...value,inputValue}]
        console.log(listArray)
    
        return listArray;
      }
    }
  }

  const initialValue="";

  const [state,dispatch]=useReducer(reducer,initialValue)
  
  
  
  const listArray=[];
  const todoArray= (e)=>{
    const inputValue=e.target.value;
    listArray[{...value,inputValue}]
    console.log(listArray)

    return listArray;
  }
 

  return (
    <>
      <h1>To do App using useReducer</h1>
      <div className="input-data">
          <label htmlFor="input"></label>
          <input type="text"  id="input" onChange={(e)=>todoArray} placeholder='Enter the task' />
      </div>
      <button onClick={()=>{dispatch("add_task")}}>Add</button>
     
    </>
  )
}

export default App
