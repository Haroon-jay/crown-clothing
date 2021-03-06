import {createSelector} from "reselect"
const selectCart=(state)=>state.cart
export const selectCartItems=createSelector(
    [selectCart],(cart)=>cart.cartItems
)
export const selectCartState=createSelector(
    [selectCart],cart=>cart.hidden
)
export const selectCartHidden=createSelector(
    [selectCart],
    (cart)=>cart.hidden
)
export const selectCartItemsCount=createSelector(
    [selectCartItems],cartItems=>cartItems.reduce((accumulated,item)=>accumulated+item.quantity,0)
)
export const selectCartTotal=createSelector(
    [selectCartItems],(cartItems)=>cartItems.reduce((accumulatedPrice,item)=>accumulatedPrice+item.quantity*item.price,0)
)