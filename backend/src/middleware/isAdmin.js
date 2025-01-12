const isAdmin = (req,res,next)=>{
  if(req.role!='admin'){
    return res.status(403).send({success:false,message:"you are not allowed to perform this actions"})
  }
  next();

}
module.exports = isAdmin;