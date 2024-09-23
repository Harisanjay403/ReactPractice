import './TodoApp.css'
import { useReducer } from 'react'

function reducer (todos,action){

    switch(action.type){
        case "add_task":
            return[...todos,{id:todos.length+1,name:action.payLoad}]
        
        case "delete_task":
            return todos.filter((todo)=>(todo.id !== action.payLoad))
    }

}



export const TodoApp = ()=>{
    const initialValue=[]

    const [todos,dispatch]=useReducer(reducer,initialValue)

    // const handleChange=(e)=>{

    //     console.log(data)
    // }
    const handleData= (e,data)=>{
        if ( e.key === "Enter" ){
            dispatch({type:"add_task", payLoad: e.target.value})
            document.getElementById("input").select()

        }
       
        if (data==="add"){
            dispatch({type:"add_task", payLoad: e.target.value})
        }

    }
    
    const handleButton = () =>{
        const data=document.getElementById("input").value
        document.getElementById("input").select()
        dispatch({type:"add_task", payLoad:data})
    }

    const handleDelete= (id)=>{
        dispatch( {type:"delete_task", payLoad:id})
        document.getElementById("input").select()
    }
        


    return(
        <>
             <h1>To do App using useReducer</h1>
            
            <div className="input-data">
                <label htmlFor="input"></label>
                <input type="text"  id="input" onKeyDown={(e)=>{handleData(e)}}  placeholder='Enter the task' />
            </div>
            
            <button onClick={()=>handleButton()}  >Add</button>

            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>{todo.name} <button onClick={()=>{handleDelete(todo.id)}}>Delete</button></li>
                ))}
            </ul>
            
        </>
    )
}