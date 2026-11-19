const mongoose=require("mongoose");
require("dotenv").config();

const connectdb= async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to DB");
        
    }
    catch(err){
        console.log("error");
    }
}

module.exports=connectdb;