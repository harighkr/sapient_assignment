import React from 'react';
import { connect } from 'react-redux';

export const Cart = ({ cart }) => {
    return (
        <div className="cart-list">
            {cart.length ? `Total Items in cart : ${cart.length}` : null}
        </div>
    )
}


function mapStateToProps(state) {
    return {
        cart: state.cart.item,
    };
}

export default connect(mapStateToProps)(Cart);



