import {takeLatest,put,all,call} from "redux-saga/effects"
import { auth,googleProvider,createUserProfileDocument,getCurrentUser } from "../../firebase/firebase"
import { signInFailure,signInSuccess,signOutSuccess,signOutFailure,signUpFailure,signUpSuccess } from "./userActions"
 
export function* getSnapshotFromUserAuth(userAuth,additinalData){
   try{
const userRef=yield call(createUserProfileDocument,userAuth,additinalData)
const userSnapshot=yield userRef.get()
yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}))   
}catch(e){
    yield put(signInFailure(e))  
}
}


export function* signInWithGoogle(){
try{
console.log("sign in with google")    
const {user}=yield auth.signInWithPopup(googleProvider)
yield getSnapshotFromUserAuth(user)
}catch(e){
yield put(signInFailure(e))
}   
}
export function* signInWithEmailAndPassword({payload}){
    const {email,password}=payload
    try{
      const {user}=yield auth.signInWithEmailAndPassword(email,password)
     yield getSnapshotFromUserAuth(user)

    }
    catch(e){
     yield   put(signInFailure(e))
    }
}


export function* onGoogleSignInStart(){
  yield takeLatest("GOOGLE_SIGN_IN_START",signInWithGoogle)
}

export function* isUserAuthenticated(){
    try{
     const userAuth=yield getCurrentUser()
     console.log("frgerge")
     if(!userAuth)return
     yield getSnapshotFromUserAuth(userAuth)
    }catch(e){
        yield put(signInFailure())
    }
}

export function* onCheckUserSession(){
   yield  console.log("checking saga user session")
    yield takeLatest("CHECK_USER_SESSION",isUserAuthenticated)
}

export function* onEmailSignInStart(){
yield takeLatest("EMAIL_SIGN_IN_START",signInWithEmailAndPassword)
}
export function* signOut(){
    
    try{
     console.log(userSagas)
   yield auth.signOut()
   yield put(signOutSuccess())
    }catch(e){
     yield put(signOutFailure(e))
    }
}
export function* onSignOutStart(){
 
    yield takeLatest("SIGN_OUT_START",signOut)
}

export function* signUpUser({payload}){
    
  try{
    const {email,password,displayName}=payload  
    const {user}=yield auth.createUserWithEmailAndPassword(email,password)
    console.log(user)
    yield createUserProfileDocument(user,{displayName})
    yield put(signUpSuccess({user,additinalData:{displayName}}))
}catch(e){
    console.log(e)
    yield put(signUpFailure(e))
}
}
export function* onSignUpStart(){
    yield takeLatest("SIGN_UP_START",signUpUser)
}
export function* onSignUpSuccess(){
   yield takeLatest("SIGN_UP_SUCCESS",signInAfterSignUp)
}
export function* signInAfterSignUp({payload:{user,additinalData}}){
    console.log("signing in after sign up")
yield getSnapshotFromUserAuth(user,additinalData)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),
        call(onSignOutStart),call(onSignUpStart),call(onSignUpSuccess) 
    ])}  