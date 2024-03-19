import React from  "react";
import { PRODUCTS } from '/workspaces/Mern-E-commerce_app/my-react-app/src/product.js';
import { Product } from './product';

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>TechTrek Shop</h1>
            </div>
            <div className="products">
                {" "}
                {PRODUCTS.map((product) => ( 
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
};