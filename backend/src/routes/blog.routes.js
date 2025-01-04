const express = require("express");
const Blog = require("../models/blog.model.js");
const router = express.Router();
//get all blogs
router.get("/", async(req, res) => {
  try {
    const post = await Blog.find();
    res.status(200).send({
      message:"All post fetched",
      posts:post
    })
    
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).send({ message: "error fetching post" });
  }
});
//create a blog post and saving it in db
router.post("/create-post", async (req,res) => {
  try {
    //all data comming in res --> console.log(req.body);
    //saving data in db
    const newPost = new Blog({...req.body});
    await newPost.save();
    res.status(201).send({
      message:"post created successfully",
      post:newPost
    })

  } 
  catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send({ message: "error creating post" });
  }
});
module.exports = router;
