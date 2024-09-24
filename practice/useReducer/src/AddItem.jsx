import { useReducer } from "react"

const reducer = (items,action)=>{

    switch(action.type){
        case "ADD_ITEM":
            return [...items,{id:Date.now(),name:action.payLoad}]
        
        case "DELETE_ITEM":
            return items.filter((item)=>(item.id !== action.payLoad))

        case "UPDATE_ITEM":
            return items.map((item)=>(item.id===action.payLoad.id ? {...item,name:action.payLoad.newName}: item))
    }
}

export const AddItem = () =>{
    const initialValue=[];

    const [items,dispatch]=useReducer(reducer, initialValue)

    return(
        <>
            <h2> Adding items by prompt by using useReducer</h2>
            <button onClick={()=>{dispatch({type:"ADD_ITEM",payLoad: prompt("enter the item")})}}> Add Items</button>

            <ul>
                {items.map((item,index)=>(
                    <li key={index}>{item.name}                     
                    
                    <button onClick={()=>{dispatch({type:"UPDATE_ITEM",payLoad:{id:item.id,newName:prompt("Update the Item",item.name)} })}}>Update</button>
                    
                    <button onClick={()=>{dispatch({type:"DELETE_ITEM",payLoad:item.id})}}>Delete</button>
                    </li>
                    
                    ))}
            </ul>

        </>
    )
}