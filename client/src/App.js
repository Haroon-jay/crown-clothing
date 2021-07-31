import React,{useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/Shop';
import SignInAndSignUpPage from './pages/sign-in-sign-up/SignInUp';
import CheckoutPage from './pages/checkout/CheckOut';
import Header from './components/header/Header';
import { checkUserSession } from './redux/user/userActions';
import { selectCartState } from './redux/cart/cartSelectors';
import { selectCurrentUser } from './redux/user/userSelector';
import { toggleCartHidden } from './redux/cart/cartAction';
const App=(props)=> {
  const unsubscribeFromAuth = null;
  const{toggleCart}=props
  const {cartState,currentUser}=props
  useEffect(()=>{
    const { checkUserSession } = props;
    checkUserSession()
  },[checkUserSession])
  // componentDidMount() {
   
  //   console.log("component did mount runs")
  //   checkUserSession()
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   }

    //   setCurrentUser(userAuth);
    //});
  //}

  //  componentWillUnmount() {
  //    console.log("component will unmount runs")
  //  //  this.unsubscribeFromAuth()
  //  }
   
    return (
      <div onClick={()=>{
        !cartState  && toggleCart()
      }} className="container">
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartState:selectCartState
});

const mapDispatchToProps = dispatch => ({
   
  toggleCart:()=>dispatch(toggleCartHidden()),
  checkUserSession:()=>dispatch(checkUserSession())
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
