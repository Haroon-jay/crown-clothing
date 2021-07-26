export const toggleCartHidden=()=>{
    return{
        type:"TOGGLE_CART_HIDDEN"
    }
}
export const addItem=(item)=>{
return{
    type:"ADD_ITEM",
    payload:item
}
}
export const removeItemFromCart=(item)=>{
    return{
        type:"REMOVE_ITEM",
        payload:item
    }
}
export const removeItemFromCheckout=item=>{
    console.log("remove item checkout")
    return{
        type:"REMOVE_ITEM_CART",
        payload:item
    }
}