import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelector'
const Header = ({currentUser,hidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP </Link>
                <Link to="" className="option">CONTACT</Link>
                {
                    currentUser? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div> : 
                    <Link className="option" to="/signIn">SIGN IN</Link>
                    
                }
                <CartIcon />
            </div>
            {
                hidden?null:
            <CartDropdown />}
        </div>
    )
}
const mapStateToProps=createStructuredSelector({ 
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
}
)


export default connect(mapStateToProps)(Header)
