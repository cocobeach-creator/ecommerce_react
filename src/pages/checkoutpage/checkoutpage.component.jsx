import React from "react";
import "./checkoutpage.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {connect} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        
            {
            cartItems.length ? (    
            cartItems.map(cartItem =>(
                <CheckoutItem key={cartItem.id} item={cartItem}/>))) : (
                <span className="empty-message">Your cart is empty</span>
                )
            }
        
        <div className="total"> TOTAL: ${cartTotal}</div>
        <div className="test-warning">*Please use the following test credit card for payments* <br/>
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123</div>
        <StripeCheckoutButton price={cartTotal}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);