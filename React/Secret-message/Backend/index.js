const express=require('express')
const cors=require('cors')
const app=express()

app.use(cors())

app.get('/code',(req,res)=>{
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers   = '0123456789'
  const symbols   = '!@#$%^&*()_+-=[]{}|;:,.<>?'

  const allchar=lowercase+uppercase+numbers+symbols
  let  result=""
  for(let i=0;i<8;i++)
  {
    let ind=Math.floor(Math.random()*allchar.length)
    result+=allchar[ind]
  }

  console.log(result)
  res.json({ result });
})


app.listen(5000,()=>{
    console.log("server started listening on the port 5000")
})
