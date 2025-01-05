const express = require("express");
const Comment = require("../models/comment.model.js");
const router = express.Router();

//create comment
router.post("/post-comment", async (req, res) => {
  try {
    console.log(req.body);
    const newComment = new Comment(req.body);
    await newComment.save();
    res
      .status(200)
      .send({ message: "comment added successfully", comment: newComment });
  } catch (error) {
    console.error("ann error occured while posting comment",error);
    res.status(500).send({message:"An error occured while adding comment"})
  }
});

//get all commensts
router.get("/total-comments",async(req,res)=>{
  try {
    const totalComments = await Comment.countDocuments({})
    res.status(200).send({message:"Total Comments:",totalComments})
    
  } catch (error) {
    console.error("ann error occured while getting comment",error);
    res.status(500).send({message:"An error occured while getting comment"})
    
  }
})

module.exports = router;
