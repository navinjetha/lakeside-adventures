import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import './CartScreen.css'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import StripeContainer from '../../components/StripeContainer'

const CartScreen = () => {
    const [payment, setPayment] = useState();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const clearCart = () => {
        debugger;
        return cartItems.forEach(element => {
            removeHandler(element.product)
        });
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.price * item.qty, 0)
            .toFixed(2);
    };

    const onCheckoutCompleted = (payment) => {
        // empty cart, set payment to null, 
        // show payment status message and redirect
        // setPayment(false)
        setPayment(false);  
        clearCart();
    }

    const proccedToCheckout = () => {
        setPayment({
            'amount': getCartSubTotal()
        }) 
    }

    return <div>
        {payment 
            ? <StripeContainer payment={payment} onComplete={onCheckoutCompleted}/> 
            : (<div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your Cart Is Empty <Link to="/">Go Back</Link>
                    </div>
                ) : (
                    cartItems.map(item => (
                        <CartItem 
                            key={item.product}
                            item={item}
                            qtyChangeHandler={qtyChangeHandler}
                            removeHandler={removeHandler}
                        />
                    ))
                )}

            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal({getCartCount()}) items</p>
                    <p>{getCartSubTotal()}</p>
                </div>
                <div>
                    <button onClick={proccedToCheckout}>Proceed To Checkout</button>
                </div>
            </div>
        </div>)
                    }
    </div>
    
    
}

export default CartScreen
