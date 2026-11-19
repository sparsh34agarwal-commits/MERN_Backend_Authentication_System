const app = require("./src/app");
const connectdb=require("./src/db/db");
require("dotenv").config();

app.listen(3000, ()=>{
    console.log("server started on port 3000");
    
})

connectdb();