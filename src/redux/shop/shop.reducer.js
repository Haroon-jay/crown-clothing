import data from "./shop.data"
const INITIAL_STATE={
collections:data
}
 export const shopReducer=(state=INITIAL_STATE,action)=>{
   
    switch(action.type){
        // case "UPDATE_COLLECTIONS":
        //     return{
        //         ...state,collections:action.payload
        //     }
        default:
            return state
    }
}