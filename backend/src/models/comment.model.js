const mongoose = require("mongoose");
const { comment } = require("postcss");
const CommentSchema = new mongoose.Schema({
  comment: {
    type: String
  },
  user: {
    type: mongoose.Schema.type.ObjectId,
    ref:"User",
    required:true
  },
  postId:{
    type:mongoose.Schema.type.ObjectId,
    ref:"Blog",
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});

const Comment = mongoose.model("Comment",CommentSchema);
module.exports = Comment;