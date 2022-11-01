import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../../scss/layout/components/product.scss';
import 'animate.css';

const Product = ({id,name,description,price,src})=>{
    const cart = useSelector((state) => state.cart)
    const productInCart = cart.find(element=>element.id==id);
    return(
        <>
            <Link to={`/product-detail/${id}`} >
                <div className='product'>
                    <span 
                        className={`bold secondary bg-primary badge 
                                    ${productInCart 
                                        ? ( productInCart.quantity > 0) ? '' : 'v-hidden'
                                        : 'v-hidden'}`  }
                        > 
                        { productInCart
                          ? productInCart.quantity                    
                          : 0
                        } 
                    </span>
                    <img 
                        className=' animate__animated animate__fadeIn'
                        src={`/assets/${src}`} 
                        alt="img proof" 
                    />
                    
                    
                        
                </div>
            </Link>
        </>
            
    );
}

export default Product;