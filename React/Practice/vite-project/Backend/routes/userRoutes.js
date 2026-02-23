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

router.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body

        const user= await userSchema.findOne({email})

        if(!user)
            res.status(404).send({message:'user not found!'})
        if(user.password!==password)
            res.status(401).json({message:'invalid password'})
        
        res.send({message:'login successfull'})
    }
    catch(e){
        res.send({message:e.message})
    }
})

module.exports=router