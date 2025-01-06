const express = require('express');
const User = require('../models/user.model.js');
const generateToken = require('../middleware/generateToken.js');
const router = express.Router();

//register user
router.post("/register",async(req,res)=>{
  try {
    const {email,password,username} = req.body;
    const user = new User({email,password,username})
    await user.save();
    res.status(200).send({message:"user registered successfully",user})

    
  } catch (error) {
    console.error("failed to register:",error);
    res.status(500).send({message:"registration failed"})
    
  }
})
//login
router.post("/login",async (req,res)=>{
  try {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(404).send({message:"user not found"});
    }
    const isMatch = await user.comparePassword(password)
    if(!isMatch){
      return res.status(401).send({message:"invalid credentials"})
    }
    //geenrate token
    const token = await generateToken(user._id);
    res.cookie("token",token,{
      httpOnly:true,
      secure:true,
      sameSite:true
    });
    res.status(200).send({message:"login successfully",token,user:{
      id: user._id,
      email:user.email,
      username:user.username,
      role:user.role
    }})
    
  } catch (error) {
    console.error("failed to login:",error);
    res.status(500).send({message:"login failed"})
  }

})
router.post("/logout",async(req,res)=>{
  try {
    res.clearCookie('token');
    res.status(200).send({message:'log-out successfull'})
  } catch (error) {
    console.error("failed to logout:",error);
    res.status(500).send({message:"logout failed"})
  }
})
module.exports = router;
