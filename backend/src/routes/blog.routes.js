const express = require("express");
const Blog = require("../models/blog.model.js");
const router = express.Router();
//get all blogs
router.get("/", async(req, res) => {
  try {
    //search functionality
    const {search,category,location} = req.query;
    console.log(search);
    let query = {}
    if(search){
      query={
        ...query,
        $or:[
          {title:{$regex:search,$options:"i"}},
          {content:{$regex:search,$options:"i"}},
        ]
      } 
    }
    if(category){
      query={
        ...query,
        category:category
      }
    }
    if(location){
      query={
        ...query,
        location:location
      }
    }
    //all blog functionality
    const post = await Blog.find(query).sort({createdAt:-1});
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
//get single blog by id
router.get("/:id",async(req,res)=>{
  try {
    // console.log(req.params.id);
    const postId = req.params.id;
    const post = await Blog.findById(postId);
    if(!post){
      return res.status(404).send({message:"Post not found"})
    }
    res.status(200).send({
      message:"Post retrieved Successfully",
      post:post
    })
  } catch (error) {
    console.error("Error fetching in single post",error);
    res.status(500).send({message:"Error fetching single post"})
    
  }
})
module.exports = router;
