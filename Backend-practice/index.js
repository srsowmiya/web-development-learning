const express=require('express')
const cors=require('cors')

let num=0
const app=express()
app.use(cors({
    original:"*"
}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello home page")
})

app.get('/count',(req,res)=>{
    num+=1
    res.json({count:num})
})

app.listen(3000,()=>{
    console.log("started listening on the port 3000")
})
