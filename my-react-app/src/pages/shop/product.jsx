import React from 'react';

export const Product = ({ data }) => {
    // Destructure data object to access individual properties
    const { id, productName, price, productImage } = data;

    // Use the variables within the component if needed
    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {productName}</div>
            <div>Price: {price}</div>
            <img src={productImage} alt={productName} />
        </div>
    );
};
