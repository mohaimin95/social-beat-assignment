import React, { useEffect, useState } from 'react';
import apiService from '../../services/api.service';
import { connect } from 'react-redux';
import { updateCartCount } from '../../state/app.actions';
import { Link } from 'react-router-dom';
const Cart = props => {
    let [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        apiService.getCartData().then(data => {
            setCartItems(data.data.data || []);
        }).catch(err => {
            console.log(err)
        })
    }, [])
    const removeItem = itemId => {
        apiService.removeCartItem(itemId).then(() => {
            setCartItems(cartItems.filter(item => item._id !== itemId));
            props.updateCartCount(props.cartCount - 1);
        }).catch(err => {
            alert("Error in removing item !")
        })
    }
    const proceedToCheckout = () => {
        apiService.proceedToCheckout(cartItems.reduce((acc, cur) => acc + cur.price, 0)).then(() => {
            setCartItems([]);
            props.updateCartCount(0)
            alert(`Items will be delivered to ${props.user.name}`);
        }).catch(err => {
            alert("Error in checking out !")
        })
    }
    return (
        <div className="container">
            <h3 className="text-center">Cart ({props.cartCount})</h3>
            {props.cartCount === 0 ? (
                <h4>Cart is empty! Start adding items <Link to="/">here</Link></h4>
            ) : (
                    <div>
                        <div className="list-group">
                            {
                                cartItems.map(item => (
                                    <div key={item._id} className="list-group-item">
                                        {item.productName}
                                        <span onClick={() => removeItem(item._id)} className="float-right">&times;</span>
                                    </div>

                                ))
                            }
                        </div>
                        <h4 className="text-center">Total Payable : <span className="product-price">{cartItems.reduce((acc, cur) => acc + cur.price, 0)}</span><br /><button onClick={proceedToCheckout} className="btn btn-primary mt-3">Proceed To Checkout</button></h4>
                    </div>
                )}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cartCount: state.cart,
        user:state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateCartCount: (count) => dispatch(updateCartCount(count))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);