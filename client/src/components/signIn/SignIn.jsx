import React,{useState} from 'react'
import "./sign-in.scss"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import {googleSignInStart,emailSignInStart} from "../../redux/user/userActions"
import { connect } from 'react-redux'
const SignIn = (props) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {googleSignInStart,emailSignInStart}=props
    console.log(props,googleSignInStart)
    const handleSubmit=async(e)=>{
    e.preventDefault()

    emailSignInStart(email,password)
    }
    return (
        <div className="sign-in">
            <h2>I already Have an Account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
              <FormInput label="Email" type="email" name="email" required value={email} 
              handleChange={e=>setEmail(e.target.value)} />
               <FormInput label="Password" type="password" name="password" required value={password} 
             handleChange={e=>setPassword(e.target.value)} />
             <div className="buttons">
              <CustomButton type="submit"> <span style={{fontSize:"0.7rem"}}> Sign In </span></CustomButton>
              <CustomButton type="button"  isGoogleSignIn={true} onClick={googleSignInStart} > <span style={{fontSize:"0.7rem"}}> Sign In With google</span></CustomButton>
              </div></form>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return {
        googleSignInStart:()=>dispatch(googleSignInStart()),
        emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
    }
}
export default connect(null,mapDispatchToProps)(SignIn)
