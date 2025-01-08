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
//get all user
router.get("/users",async(req,res)=>{
  try {
    const users = await User.find({},'id email role');
    res.status(200).send({message:"Users found successfully",users});
    
  } catch (error) {
    console.error("failed to fetch all users:",error);
    res.status(500).send({message:"failed to fetch all users"})
  }
})
//delete user
router.delete("/users/:id",async(req,res)=>{
  try {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    if(!user){
      return res.status(404).send({message:"user not found"});
    }
    res.status(200).send({message:"user succefully deleted"});
  } catch (error) {
    console.error("failed to delete users:",error);
    res.status(500).send({message:"failed to delete users"})
  }
})
//update user role
router.put("/users/:id",async(req,res)=>{
  try {
    const {id} = req.params;
    const {role} = req.body;
    const user = await User.findByIdAndUpdate(id,{role},{new:true});
    if(!user){
      return res.status(404).send({message:"user not found"});
    }
    res.status(200).send({message:"user role updated successfully",user});
    
  } catch (error) {
    console.error("failed to update user role:",error);
    res.status(500).send({message:"failed to update user role"})
  }
})



module.exports = router;
