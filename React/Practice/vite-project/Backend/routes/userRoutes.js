const express=require('express')
const userSchema=require('../modal/user')

const router=express.Router()

router.post('/signup',(req,res)=>{
    res.send({msg:"reached the post home request"})
})

module.exports=router