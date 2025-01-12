const express = require("express");
const Blog = require("../models/blog.model.js");
const Comment = require("../models/comment.model.js");
const verifyToken = require("../middleware/verifyToken.js");
const isAdmin = require("../middleware/isAdmin.js");
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
    const post = await Blog.find(query).populate('author','email').sort({createdAt:-1});
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
router.post("/create-post",verifyToken, isAdmin, async (req,res) => {
  try {
    //all data comming in res --> console.log(req.body);
    //saving data in db
    const newPost = new Blog({...req.body,author:req.userId});
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
router.get("/:id" ,async(req,res)=>{
  try {
    // console.log(req.params.id);
    const postId = req.params.id;
    console.log(postId);
    const post = await Blog.findById(postId);
    
    
    if(!post){
      return res.status(404).send({message:"Post not found"})
    }
    const comment = await Comment.find({postId}).populate('user',"username email")
    res.status(200).send({
      message:"Post retrieved Successfully",
      post:post
    })
  } catch (error) {
    console.error("Error fetching in single post",error);
    res.status(500).send({message:"Error fetching single post"})
    
  }
})

//update a blog
router.patch("/update-post/:id",verifyToken,async(req,res)=>{
  try {
    const postId = req.params.id;
    const updatedPost = await Blog.findByIdAndUpdate(postId,{
      ...req.body
    },{new:true})
    if(!updatedPost){
      return res.status(404).send({message:"post not found"})
    }
    res.status(200).send({
      message:"Post updated successfully",
      post:updatedPost
    })
  } catch (error) {
    console.error("Error updating post",error);
    res.status(500).send({message:"Error updating post"})
    
  }
})
router.delete("/:id",verifyToken,async(req,res)=>{
  try {
    const postId = req.params.id;
    const post = await Blog.findByIdAndDelete(postId)
    if(!post){
      return res.status(404).send({message:"post not found"});
    }
    //delete comments
    await Comment.deleteMany({postId})
    return res.status(200).send({
      message:"Post deleted successfully",
      post:post
    })
    
  } catch (error) {
    console.error("Error deleting post",error);
    res.status(500).send({message:"Error deleting post"})
  }
})

//get related blogs
router.get("/related/:id",verifyToken,async(req,res)=>{
  try {
    const {id} = req.params;
    if(!id){
      return res.status(400).send({message:"post id is required"})
    }
    const blog = await Blog.findById(id);
    if(!blog){
      return res.status(404).send({message:"post not found"})
    }
    const titleRegex = new RegExp(blog.title.split(" ").join('|'),'i');
    const relatedQuery={
      _id:{$ne:id},//exclude current blog
      title:{$regex:titleRegex}
    }
    const relatedPost = await Blog.find(relatedQuery);
    res.status(200).send({message:"related post found",post:relatedPost})


    
  } catch (error) {
    console.error("Error fetching in related post",error);
    res.status(500).send({message:"Error fetching related post"})
  }
})
module.exports = router;
