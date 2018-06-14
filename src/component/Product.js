import React from 'react';
import Image from './Image';

export const Product = ({ item, addToCart }) => {
    return (
        <div className="product-view">
            <Image images={item.images} className='product-img'/>
            <button onClick={addToCart.bind(null, item)} className="add_to_cart">Add To cart</button>
            <div className="product-price">{item.list_price.formatted_price}</div>
            <h3 className="product-title">{item.title}</h3>
        </div>
    )
}

export default Product;



