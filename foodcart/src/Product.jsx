import './Product.css'
import { Container, Row, Col, Image } from 'react-bootstrap'

export const Product = ({data, cart, setCart}) =>{

    const handleAddCart = (item) =>{
        setCart([...cart,item])
    }
    
    const handleRemoveCart = (item) =>{
        setCart(cart.filter((product)=>(product.id!==item.id)))
    }
    
    return(
        <div className="product-container">
            <Container>
                <Row>
                    
                        {data.map((item)=>(<Col className='p-1' xs={4}  sm={4} md={3} key={item.id}>
                        <div className='home-product' key={item.id}>
                            <div className="home-product-img">
                                <Image src={item.pic} fluid/>
                            </div>

                            <div className="home-product-detail">
                                <h4>{item.name}</h4>
                                <p>Price: Rs.{item.price}</p>

                                {cart.includes(item) ? (<button className="btn-remove" onClick={()=>handleRemoveCart(item)}>Remove from Cart</button>):(<button onClick={()=>handleAddCart(item)}>Add to Cart</button>)}
                            </div>
                        </div></Col>))}
                    
                </Row>
            </Container>
            
        </div>
    )
}