import React from 'react'
import "./checkout.scss"
import {connect} from "react-redux"
import { createStructuredSelector } from 'reselect'
import { selectCartItems,selectCartTotal } from '../../redux/cart/cartSelectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/StripeButton'
const CheckOut = ({cartItems,totalPrice}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span >Product</span>
                </div>
                <div className="header-block">
                    <span >Description</span>
                </div>
                <div className="header-block">
                    <span >Quantity</span>
                </div>
                <div className="header-block">
                    <span >Price</span>
                </div>
                <div className="header-block">
                    <span >Remove</span>
                </div>
            </div>
{
    cartItems.map(item=><CheckoutItem key={item.id} cartItem={item} /> )
}
<div className="total"> 
<span>Total:</span>
<span>
${totalPrice}</span></div>
<div className="test-warning">
    Please use the following test card for payments*
    <br/>
    4242 4242 4242 4242 - Exp:01/25 CVC-123
</div>
<StripeButton price={totalPrice}/>
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
cartItems:selectCartItems,
totalPrice:selectCartTotal
})
export default connect(mapStateToProps)(CheckOut)
