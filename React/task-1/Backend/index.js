const express=require('express')
const cors=require('cors')

const app=express()
app.use(cors({
    origin:"*"
}))
let arr=[]
app.use(express.json())

app.post('/add',(req,res)=>{
    let msg=req.body.notes
    console.log(msg)
    arr.push(msg)
    console.log(arr)
    res.send("success")
})

app.get('/find',(req,res)=>{
    let ind=Number(req.query.index)
    console.log(arr[ind])
    res.send(arr[ind])
})

app.listen(3000,()=>{
    console.log("the port started listening on 3000")
})