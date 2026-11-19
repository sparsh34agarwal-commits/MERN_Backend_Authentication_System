const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    pass:String
})

const userModel= mongoose.model("user", userSchema);

module.exports=userModel;