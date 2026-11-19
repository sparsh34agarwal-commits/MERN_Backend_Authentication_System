const userModel = require("../../models/user.model");
const jwt = require("jsonwebtoken");


const registeredUsers = async (req,res)=>{
    const {username, email, pass}=req.body;

    const isUsernameAlreadyTaken = await userModel.findOne({username});
    const isEmailAlreadyUsed = await userModel.findOne({email});


    if(isUsernameAlreadyTaken){
        return res.status(409).json({
            message:"Username Taken"
        })
    }
    if(isEmailAlreadyUsed){
        return res.status(409).json({
            message:"Email Already In Use"
        })
    }


    const user = await userModel.create({
        username, email, pass
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token);

    res.status(201).json({
        Message:"User Resistered Successfully",
        user,
    })
}

module.exports={registeredUsers};