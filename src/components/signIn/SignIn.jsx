import React,{useState} from 'react'
import "./sign-in.scss"
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import { auth,signInWithGoogle } from '../../firebase/firebase'
const SignIn = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=async(e)=>{
    e.preventDefault()

try{
    await auth.signInWithEmailAndPassword(email,password)
    setPassword("")
    setEmail("")
}catch(e){
    console.log(e)
}

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
              <CustomButton type="button"  isGoogleSignIn={true} onClick={signInWithGoogle} > <span style={{fontSize:"0.7rem"}}> Sign In With google</span></CustomButton>
              </div></form>
        </div>
    )
}

export default SignIn
