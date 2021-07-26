import './App.css';
import React,{useState,useEffect} from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shoppage/Shop"
import Header from './components/header/Header';
import SignInUp from './pages/sign-in-sign-up/SignInUp';
import {auth} from "./firebase/firebase"
import { createUserProfileDocument } from './firebase/firebase';
import { connect } from "react-redux"
import { setCurrentUser } from './redux/user/userActions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelector';
import CheckOut from './pages/checkout/CheckOut';
function App(props) {
  
  let unsubscribeFromAuth=null
  useEffect(()=>{
   const deb=async=>{
   unsubscribeFromAuth= auth.onAuthStateChanged( async(userAuth)=>{
   if(userAuth){
     const userRef= await createUserProfileDocument(userAuth)
     userRef.onSnapshot(async (snapShot)=>{
       const user={id:snapShot.id,...snapShot.data()}
       console.log(user)
       props.setCurrentUser(user)
      
     })
   }
      else{
        props.setCurrentUser(userAuth)
      }
    })}
    deb()
  
    return ()=>{
      unsubscribeFromAuth()
    }
  },[])



  return (
    <div>
      <Header />
      <Switch>
   <Route path="/" exact component={HomePage} />
   <Route path="/shop" component={ShopPage} />
   <Route path="/checkout" exact component={CheckOut}/>
   <Route exact path="/signIn" render={()=>props.currentUser? (<Redirect to="/"/>):(<SignInUp/>)

   }/>
   </Switch>
   </div>
  );
}
const mapDispatchToProps=dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
