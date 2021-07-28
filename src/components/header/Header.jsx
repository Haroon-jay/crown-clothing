import React from 'react'
import { HeaderContainer,OptionsDiv,Options,OptionsLink,LogoContainer} from "./Header.styles"
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
        <HeaderContainer>
           <LogoContainer to="/">
                <Logo className="logo" />
                </LogoContainer>
           <Options>
                <OptionsLink  to="/shop">SHOP </OptionsLink>
                <OptionsLink to="/" >CONTACT</OptionsLink>
                {
                    currentUser? <OptionsDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionsDiv> : 
                    <OptionsLink  to="/signIn">SIGN IN</OptionsLink>
                    
                }
                <CartIcon />
                </Options>
            {
                hidden?null:
            <CartDropdown />}
        </HeaderContainer>
    )
}
const mapStateToProps=createStructuredSelector({ 
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
}
)


export default connect(mapStateToProps)(Header)
