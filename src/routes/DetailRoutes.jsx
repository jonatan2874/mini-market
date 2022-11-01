import {  Route, Routes } from "react-router-dom";
import ProductsDetail from "../pages/ProductDetail";
import ShoppingCart from "../pages/ShoppingCart";
import 'animate.css';

export const DetailRoutes = () =>{
    return(
        <>
            <div className="container">
                <Routes>
                    <Route path="product-detail/:id" element={<ProductsDetail/>} />
                    <Route path="shopping-cart" element={<ShoppingCart />} />
                </Routes>
            </div>
            
        </>
    );
}