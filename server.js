const express=require("express")
const app=express()
const path=require("path")
var environment = process.env.NODE_ENV || 'development';
if(environment=="development"){
    require("dotenv").config()
}

console.log(environment)
const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY)
const cors=require("cors")

app.use(express.json())




app.use(express.urlencoded({extended:true}))
app.use(cors())
// app.use('*', function (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//   })
app.get("/payment",(req,res)=>{
    res.send("helpjjkhkjh")
})

app.post("/payment",async(req,res)=>{
const body={
    source:req.body.token.id,
    amount:req.body.price,
    currency:"usd",
    description: 'My First Test Charge (created for API docs)'
}
console.log(body)
const charge = await stripe.charges.create(body)
console.log(charge)
res.send(charge)
//     (err,stripeRes)=>{
//     if(err){
//         res.status(500).json({
//             error:err
//             ,success:false
//         }
//         )
//     }else{
//         res.status(200).json({
//             success:true,
//             response:stripeRes
//         })    
//     }
// });





stripe.charges.create(body,(err,stripeRes)=>{


})
})
const port=process.env.PORT||3001
app.listen(port,()=>{
    console.log(`listening in port ${port}`)
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static(path.join(__dirname,"client/build")))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname
            ,"client/build","index.html"))
    })
}