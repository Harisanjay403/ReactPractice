import { Product } from './Product.jsx'

import data from './data.json'

export const Home = ({cart, setCart}) =>{

    
    
    return(
        
        <div className="home-container">
               < Product data={data} cart={cart} setCart={setCart} />
        </div>
    )
}