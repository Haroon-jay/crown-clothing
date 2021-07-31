
export const googleSignInStart=()=>{
    return {
        type:"GOOGLE_SIGN_IN_START"
    }
}
export const signInSuccess=user=>{
    console.log(user)
    return {
        type:"SIGN_IN_SUCCESS",
        payload:user
    }
}
export const signInFailure=e=>({
    type:"SIGN_IN_FAILURE",
    payload:e.message
})
export const emailSignInStart=(emailAndPassword)=>{
    return {
        type:"EMAIL_SIGN_IN_START",
        payload:emailAndPassword
    }
}
export const checkUserSession=()=>{
    console.log("checking user session")
    return {
        type:"CHECK_USER_SESSION"
    }
}
export const signOutStart=()=>{
    console.log("signout start")
    return {
        type:"SIGN_OUT_START"
    }
}
export const signOutSuccess=()=>{
    console.log("signout success")
    return {
        type:"SIGN_OUT_SUCCESS"
    }
}
export const signOutFailure=(error)=>{
    return {
        type:"SIGN_OUT_FAILURE",
        payload:error.message
    }
}
export const signUpStart=(userDetails)=>({
    type:"SIGN_UP_START",
    payload:userDetails
})
export const signUpSuccess=({user,additinalData})=>{
    console.log("signup success")
    return{
        type:"SIGN_UP_SUCCESS",
        payload:{user,additinalData}
    }
}
export const signUpFailure=(e)=>{
    return{
        type:"SIGN_UP_FAILURE",
        payload:e.message
    }
}