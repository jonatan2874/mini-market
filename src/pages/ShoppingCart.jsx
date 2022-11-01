import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../scss/layout/shopping-cart.scss';
const ShoppingCart = ()=>{
    const cart = useSelector((state) => state.cart)
    console.log(cart)
    return (
        <div className="shopping-cart animate__animated animate__slideInRight">
            <Link to={`/`} >            
                <span className="material-symbols-outlined bold">arrow_back_ios</span>
            </Link>
            <span className="bold primary">Shopping cart</span>
            {cart && (<span className='muted'>no hay productos seleccionados</span>) }
        </div>
    );
}

export default ShoppingCart;