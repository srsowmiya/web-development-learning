const express=require('express')
const cors=require('cors')
const app=express()

app.use(cors())

app.post('/notes',(req,res)=>{
  const notes=req.body.message
  const querry=`
  INSERT INTO notes_app(?,?,?,?) values()`  }
  
})


app.listen(5000,()=>{
    console.log("server started listening on the port 5000")
})
