const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req,res ,next) => {
  try{
    let token = req.headers.authorization;

    if(token && token.startsWith("Bearer ")){
      token = token.split(" ")[1];
      const decoded = jwt.verify(token , process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      // removing password to avoid leaking of it.
      if (!user) return res.status(401).json({ message: "User not found" });
      req.user = user;
      next();
    }else{
      res.status(401).json({message : "Not authorized , no token"});
    }
  } catch(error){
    res.status(401).json({message:"Token failed" , error : error.message});
  }
};

const adminOnly = (req,res,next) =>{
  if(req.user && req.user.role === "admin"){
    next();
  } else{
    res.status(403).json({message:"Access denied , admin only"});
  }
};

module.exports = {protect , adminOnly};