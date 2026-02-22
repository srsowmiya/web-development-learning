const express= require('express')
const user=require('./routes/userRoutes')
const cors=require('cors')
const mongoose=require('mongoose')

const app=express()
app.use(cors())
app.use(express.json())

app.use('/signup',user)



mongoose.connect("mongodb://localhost:27017/Authentication-task")

app.listen(5000,()=>{
    console.log("started server on the port 5000")
})