const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
//parse options -- middlewares
app.use(express.json());
app.use(cors());


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
