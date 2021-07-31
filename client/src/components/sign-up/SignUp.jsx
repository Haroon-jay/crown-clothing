import React,{useState} from 'react'
import "./sign-up.scss"
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import {auth,createUserProfileDocument } from "../../firebase/firebase"
import { signUpStart } from '../../redux/user/userActions'
import { connect } from 'react-redux'
const SignUp = ({signUpStart}) => {
    const [displayName,setDname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
  
    const handleSubmit=async(e)=>{
   e.preventDefault()
    
 if(password!==confirmPassword){
     alert("passwords do not match")
     return;
 }
 signUpStart({displayName,email,password})

// }
    }

    return (
        <div className="sign-up">
            <h2 className="title">{"I do not Have an account".toUpperCase()}</h2>
            <span>Sign Up with your email and password</span>
            <form className="sign-up-form" >
            <FormInput type="text" name="displayName"  
            handleChange={e=>setDname(e.target.value)} value={displayName} label="Display Name" required
            />
            <FormInput type="email" name="email" value={email} 
            handleChange={e=>setEmail(e.target.value)} label="Email" required
            />
            <FormInput type="password" name="password" value={password} 
            handleChange={e=>setPassword(e.target.value)} label="Password" required
            />
            <FormInput type="password" name="confirmPassword" value={confirmPassword} 
            handleChange={e=>setConfirmPassword(e.target.value)} label="Confirm Password" required
            />
         <CustomButton onClick={handleSubmit} type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>({
signUpStart:(userDetails)=>dispatch(signUpStart(userDetails))
})

export default connect(null,mapDispatchToProps)(SignUp)
