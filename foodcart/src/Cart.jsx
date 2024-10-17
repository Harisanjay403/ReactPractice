import { useEffect, useState } from 'react'
import './Cart.css'

export const Cart = ({cart, setCart}) =>{
    
    const [total,setTotal] = useState(0)
   
    
    useEffect(()=>{
        setTotal(cart.reduce((acc,cur)=> acc + parseInt(cur.price),0))
    },[cart])


    
    return(
        <div className="cart-container">
            <h2>Cart Product</h2>
            
            

            {cart.map((item)=>(
                
                <div className="cart-product-container" key={item.id}>
                    <div className="product-img">
                        <img src={item.pic} alt="product image" />
                    </div>

                    <div className="product-detail">
                        <h4>{item.name}</h4>
                        <p>Price: Rs. {item.price}</p>
                    </div>
                   
                </div>

            ))}             

            <div className="product-total-cost">
                <h2>Total : Rs.{total}</h2>
                
            </div>
        
            
        </div>
    )
}