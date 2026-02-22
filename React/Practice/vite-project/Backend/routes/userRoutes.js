const express=require('express')
const userSchema=require('../model/user')

const router=express.Router()

router.post('/signup',async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const newUser= new userSchema({
            name,
            email,
            password
    })
    await newUser.save()
    res.status(201).json({message:"registration successfull"})
    }
    catch(error){
        res.status(400).json({message:"registration failed",error:error.message})
    }
})

module.exports=router