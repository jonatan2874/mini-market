import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../../scss/layout/components/shopping-icon.scss'
const Car = ()=>{
    const cart = useSelector((state) => state.cart)
    let cart_price = 0
    cart.map(element => cart_price+=(element.quantity*element.price))
    return(
        <Link to={`shopping-cart`} >
            <div className="shopping-icon">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span>$ {cart_price}</span>
            </div>
        </Link >
    );
}
export default Car;