import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCart } from '../actions/cart';
import cartSage  from '../actions/cart-saga';

class ProductConatiner extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    addToCart = (item) => {
        this.props.updateCart(item);
    }

    render() {
        return (
            <div className="product-container">
                {this.props.data.search_response.items.Item.map(item => {
                    return <Product addToCart={this.addToCart} key={item.tcin} item={item} />
                })}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        cart: state.item,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateCart: bindActionCreators(updateCart, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductConatiner);

