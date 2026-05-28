const express=require('express')
const  cors=require('cors')

const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.post('/login',(req,res)=>{
    const user=req.body
    res.send(user)
})


app.listen(3000,()=>{
    console.log("port started listening on 3000")
})