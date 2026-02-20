const express= require('express')
const user=require('./routes/userRoutes')

const app=express()

app.use('/signup',user)
app.use(express.json())

app.listen(5000,()=>{
    console.log("started server on the port 5000")
})