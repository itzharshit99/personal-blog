const express = require('express');
const User = require('../models/user.model.js');
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
module.exports = router;
