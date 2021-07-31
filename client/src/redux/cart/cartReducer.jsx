import { removeItemFromCart } from "./cartUtils"
import { addItemToCart } from "./cartUtils"
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

export const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "TOGGLE_CART_HIDDEN":
            return{
                ...state,
                hidden:!state.hidden
            }
            case "ADD_ITEM":
                return{
                    ...state,
                    cartItems:addItemToCart(state.cartItems,action.payload)
                }
        case "REMOVE_ITEM":
            return{
                ...state,cartItems:state.cartItems.filter(item=>item.id!==action
                    .payload.id)
            }
           case "REMOVE_ITEM_CART" :
               console.log(state.cartItems,action.payload)
               return{
                   ...state,cartItems:removeItemFromCart(state.cartItems,action.payload)
               }
             case "CLEAR_CART":
                 console.log("clear cart reducer")
                 return {
                     ...state,cartItems:[]
                 }
            default:
                return state
    }
}