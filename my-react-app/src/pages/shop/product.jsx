import React from 'react';

export const Product = ({ data }) => {
    
    // Destructure data object to access individual properties 
    // eslint-disable-next-line 
    const { id, productName, price, productImage } = data;

    // Use the variables within the component if needed
    return (
        <div className='product'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>Price: ${price}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                Add to Cart {cartItemCount > 0 && <> ({cartItemCount}) </>}
            </button>
        </div>
    );
};
