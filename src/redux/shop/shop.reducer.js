
const INITIAL_STATE={
collections:null
}
 export const shopReducer=(state=INITIAL_STATE,action)=>{
   
    switch(action.type){
        case "UPDATE_COLLECTION":
            console.log(action.payload,"fggregrgergergegeger")
            return{
                ...state,collections:action.payload
            }
            
        default:
            return state
    }
    
}