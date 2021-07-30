
const INITIAL_STATE={
    currentUser:null,
    error:null
}
export  const userReducer= (state=INITIAL_STATE,action)=>{
switch(action.type){
 
    case "SIGN_IN_SUCCESS":   
       return{
           ...state,
           currentUser:action.payload,
           error:null
       }
     case "SIGN_OUT_SUCCESS": 
        return{
            ...state,currentUser:null,error:null
        }
    case "SIGN_IN_FAILURE" :
    case "SIGN_OUT_FAILURE" :   
        return {
            ...state,error:action.payload
        }      
    case "GOOGLE_SIGN_IN_START":
        return{

        }
       

   default:return state
}
}