import React from 'react'
import "./checkout-item.scss"
import { connect } from 'react-redux'
import {removeItemFromCart,addItem,removeItemFromCheckout} from "../../redux/cart/cartAction"
const CheckoutItem = ({cartItem,dispatch}) => {
const {name,imageUrl,price,quantity}=cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
               <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}     </span>
            
            <span className="quantity">
                <div onClick={()=>dispatch(removeItemFromCheckout(cartItem))} className="arrow">&#10094;</div>
                <span className="value">  {quantity}</span>
                <div onClick={()=>dispatch(addItem(cartItem))} className="arrow">&#10095;</div>   </span>
                <span className="price">  {price}   </span>
           <div onClick={()=>dispatch(removeItemFromCart(cartItem))} className="remove-button">&#10005;
           </div>
        </div>
    )
}

export default connect(null)(CheckoutItem)
