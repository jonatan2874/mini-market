import { useSelector, useDispatch } from 'react-redux'
import { Link,useParams } from 'react-router-dom';
import Product from './components/Product';
import { products } from "../data/products.js";
import store,{ increment, decrement } from '../store'

import '../scss/layout/product-detail.scss';

const ProductsDetail = ()=>{
    const {id} = useParams();
    const product = products.find(element=>element.id==id);

    if(!product){
        return(<span className='bold'>producto no existe</span>);
    }

    const dispatch = useDispatch()

    // actions
    const add = ()=>{
        dispatch(increment(product))
    }
    const remove = ()=>{
        dispatch(decrement(product))
    }



    return(
        <div className="product-detail animate__animated animate__slideInRight ">
            <Link to={`/`} >            
                <span className="material-symbols-outlined bold">arrow_back_ios</span>
            </Link>

            <span className="bold primary">Product </span>            
            
            <Product {...product} />
            <ul>
                <li className='d-flex f-d-colum'>
                    <span className="bold">{product.name}</span>
                    <span className="bold primary">$ {product.price}</span>
                </li>
                <li>
                    <span onClick={remove} className="material-symbols-outlined bold remove">remove</span>
                    <span onClick={add} className="material-symbols-outlined bold add">add</span>
                </li>
            </ul>
            <span className="description">{product.description}</span>
            
        </div>
    )
}

export default ProductsDetail;