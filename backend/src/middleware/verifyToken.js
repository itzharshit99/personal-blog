const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET_KEY
const verifyToken = (req,res,next)=>{
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
      return res.status(401).send({message:"Token not available"})
    }
    const decoded = jwt.verify(token,JWT_SECRET);
    if(!decoded.userId){
      return res.status(401).send({message:"user id not available"})
    }
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (error) {
    console.error("Error verifying token",error);
    res.status(401).send({message:"Invalid token"})
  }

}
module.exports = verifyToken;