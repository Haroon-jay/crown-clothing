import React from 'react'
import axios from "axios"
import StripeCheckout from "react-stripe-checkout"
const StripeButton = ({price}) => {
    const priceForStripe=price*100
    const publishableKey="pk_test_51JHByYDIp9aUfcQkvcpXtQFT5GRNNB8y5JYKLn6Hu7YWZNZ4d8uZwI2wHfYhLcyWOvMw9qiu3hUFZS798SJaDuSr00GCLu9HRN"
    const handleToken=(token)=>{console.log(token)
    axios({
        url:"payment",
        method:"post",
        data:{
            price:priceForStripe,token
        }
    }).then(d=>{
        console.log(d)
        alert("payment succesful");
    }).catch(e=>{console.error(e)
    alert("unsuccesful payment, Please make sure you use the provided credit card")
    })
    
    }
 
    return (
      
        <StripeCheckout label="Pay now" name="Crown clothing" billingAddress shippingAddress 
        image="https://sendeyo.com/en/f3eb2117da" description={`Your total is ${price}`}
        amount={priceForStripe} panelLabel="pay now" token={handleToken} stripeKey={publishableKey} />
   )
}

export default StripeButton
