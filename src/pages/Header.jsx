import { Link } from 'react-router-dom';
import '../scss/layout/header.scss';
import ShoppingCart from './components/ShoppingIcon';

const Header = ()=>{
    return (
        <div className="header">
            <span>MINI MARKET</span>
            <ul>
                <li>
                    <Link to={`/`} >
                        Store
                    </Link >
                
                </li>
                <li><ShoppingCart/></li>
            </ul>

        </div>
    );
}
export default Header; 