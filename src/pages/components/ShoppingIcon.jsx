import { Link } from 'react-router-dom';
import '../../scss/layout/components/shopping-icon.scss'
const Car = ()=>{
    return(
        <Link to={`shopping-cart`} >
            <div className="shopping-icon">
                <span className="material-symbols-outlined">shopping_cart</span>
            </div>
        </Link >
    );
}
export default Car;