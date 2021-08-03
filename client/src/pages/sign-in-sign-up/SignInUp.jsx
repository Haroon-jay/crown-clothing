import React from 'react'
import "./sign-in-up.scss"
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/sign-up/SignUp'
const SignInUp = () => {
    return (
        <div className="sign-in-sign-up">
            <div className="sign-in-component">
            <SignIn />
            </div>
            <SignUp className="sign-up-componet"/>
        </div>
    )
}

export default SignInUp
