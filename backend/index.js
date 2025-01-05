const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
//routes
const blogRoutes = require("./src/routes/blog.routes.js")
const commentRoutes = require("./src/routes/comment.routes.js")
const userRoutes = require("./src/routes/user.route.js");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
//parse options -- middlewares
app.use(express.json());
app.use(cors());

//calling routes
app.use("/api/auth",userRoutes)
app.use("/api/blogs",blogRoutes);
app.use("/api/comments",commentRoutes);

//mongodb connection
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  app.get("/", (req, res) => {
    res.send("hello world");
  });
}
main()
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.log(err));

//routes

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
