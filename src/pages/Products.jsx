import Product from "./components/Product.jsx";
import '../scss/layout/products.scss';
import { products } from "../data/products.js";

const Products = ()=>{
    
    return(
        <div className="products">
            <ul>
                {products.map(element=>{
                    return (
                        <li key={element.id}>
                            <Product {...element} />
                        </li>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default Products;