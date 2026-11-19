const express = require("express");
const router = express.Router();
const registeredUsers = require("../db/controller/auth.controller");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");


router.post("/test", async(req,res)=>{
console.log(req.body);
const token = req.cookies.token;

if(!token){
    return res.status(401).json({message:"unauthorized"});
}

try{
    
const decoded = jwt.verify(token,process.env.JWT_SECRET);
console.log(decoded);

const user = await userModel.findOne({
    _id:decoded.id
})

console.log(user);

}
catch(err){
return res.status(401).json({
    message:"invalid token"
})
}

res.send("post successfull");

})



module.exports=router;