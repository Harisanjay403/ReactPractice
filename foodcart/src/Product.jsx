import './Product.css'

export const Product = ({data, cart, setCart}) =>{

    const handleAddCart = (item) =>{
        setCart([...cart,item])
    }
    
    const handleRemoveCart = (item) =>{
        setCart(cart.filter((product)=>(product.id!==item.id)))
    }
    
    return(
        <div className="product-container">
            {data.map((item)=>(<div className='home-product' key={item.id}>
                <div className="home-product-img">
                    <img src={item.pic}></img>
                </div>

                <div className="home-product-detail">
                <h4>{item.name}</h4>
                <p>Price: Rs.{item.price}</p>

                {cart.includes(item) ? (<button className="btn-remove" onClick={()=>handleRemoveCart(item)}>Remove from Cart</button>):(<button onClick={()=>handleAddCart(item)}>Add to Cart</button>)}
                </div>
            </div>))}
        </div>
    )
}