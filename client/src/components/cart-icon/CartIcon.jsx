import React,{useState} from 'react'
import "./cartIcon.scss"
import { ReactComponent as ShopIcon } from '../../assets/shoppingBag.svg'
import {connect} from "react-redux"
import { toggleCartHidden } from '../../redux/cart/cartAction'
import {selectCartItemsCount } from "../../redux/cart/cartSelectors"
import { createStructuredSelector } from 'reselect'
const CartIcon = ({toggleCart,itemCount}) => {
    const [cartState,setCartState]=useState(false)
    return (
        <div className="cart-icon" onClick={()=>{
            
            !cartState && toggleCart()
            setCartState(!cartState)
        
        }} >
            <ShopIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
return {toggleCart:()=>dispatch(toggleCartHidden())
}}
const mapStateToProps=createStructuredSelector({
    itemCount: selectCartItemsCount})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
