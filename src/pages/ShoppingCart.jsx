import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../scss/layout/shopping-cart.scss';

import 'animate.css';

const ShoppingCart = ()=>{
    const cart = useSelector((state) => state.cart)
    let total = 0;

    console.log(cart)
    return (
        <div className="shopping-cart animate__animated animate__slideInRight">
            <Link to={`/`} >            
                <span className="material-symbols-outlined bold">arrow_back_ios</span>
            </Link>
            <span className="bold primary">Shopping cart</span>
            <ul className='cart-product'>
                {cart.map(element=>{
                    if(element.quantity<=0) return;
                    total += (element.quantity*element.price)
                    return (
                        <li key={element.id}>
                            <span class="bold secondary bg-primary badge">{element.quantity}</span>
                            <img 
                                className=' animate__animated animate__fadeIn'
                                src={`/assets/${element.src}`} 
                                alt="img proof" 
                            />
                        </li>
                    )
                })}
            </ul>
            <ul className='totals'>
                <li>
                    <span className='muted bold'>Total</span>
                    <span className='primary bold'>$ {total}</span>
                </li>
            </ul>
        </div>
    );
}

export default ShoppingCart;