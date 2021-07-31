import React from 'react'
import "./sign-in-up.scss"
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/sign-up/SignUp'
const SignInUp = () => {
    return (
        <div className="sign-in-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInUp
