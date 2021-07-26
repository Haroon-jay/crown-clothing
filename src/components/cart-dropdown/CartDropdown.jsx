import React from 'react'
import "./cart-dropdown.scss"
import { connect } from 'react-redux'
import CustomButton from "../custom-button/CustomButton"
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { useHistory } from 'react-router'
import { createStructuredSelector } from 'reselect'
import {toggleCartHidden} from "../../redux/cart/cartAction"
const CartDropdown = ({items,dispatch}) => {
    const history=useHistory()
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
{
    items.length?(
    items.map(item=>(
        
  <CartItem key={item.id} item={item}/>
    )))
:(<span className="empty-message">Your cart is empty</span>)}
            </div>
            <CustomButton onClick={()=>{history.push("/checkout");
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    items:selectCartItems
})
export default connect(mapStateToProps)(CartDropdown)
