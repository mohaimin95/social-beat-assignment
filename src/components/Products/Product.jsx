import React from 'react';
import "./Product.css"
import { connect } from 'react-redux';
import { updateCartCount } from '../../state/app.actions';
import axios from 'axios';
import environment from '../../environment';

const Product = (props) => {
    let {
        _id: productId,
        productName = "",
        imgUrl = "",
        description = "",
        price = null
    } = props.product || {};
    const addToCart = productId => {
        axios.post(`${environment.BASE_URL}/product/cart`, { productId }, {
            headers: {
                authorization:localStorage.getItem('token')
            }
        }).then(data => {
            props.updateCart(data.data.cartCount)
        }).catch(err => {
            console.log("error in adding to cart ! try again");

        })
    }
    return (
        <div className="card col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="card-body product">
                <div className="product-img">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="product-content">
                    <p className="product-name">{productName}</p>
                    <p className="product-description">{description}</p>
                    <p className="product-price">{price}</p>
                    <button onClick={()=>addToCart(productId)} className="btn-sm btn-primary mr-2">Add to cart</button>
                </div>

            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        updateCart: (count) => dispatch(updateCartCount(count))
    }
}
export default connect(null, mapDispatchToProps)(Product);