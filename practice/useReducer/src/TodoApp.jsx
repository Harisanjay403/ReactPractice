import './TodoApp.css'
import { useReducer } from 'react'

function reducer (todos,action){

    switch(action.type){
        case "add_task":
            return[...todos,{id:todos.length+1,name:action.payLoad}]
    }

}



export const TodoApp = ()=>{
    const initialValue=[]

    const [todos,dispatch]=useReducer(reducer,initialValue)

    const handleChange=(e)=>{

        dispatch({type:"add_task",payLoad:e.target.value})
    }
    
    return(
        <>
             <h1>To do App using useReducer</h1>
            
            <div className="input-data">
                <label htmlFor="input"></label>
                <input type="text"  id="input"  placeholder='Enter the task' />
            </div>
            
            <button onClick={(e)=>handleChange(e)} >Add</button>

            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>
        </>
    )
}