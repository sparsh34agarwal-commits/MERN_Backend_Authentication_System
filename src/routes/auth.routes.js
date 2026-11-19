const express = require("express");
const router = express.Router();
const registeredUsers = require("../db/controller/auth.controller");

router.post("/register",registeredUsers.registeredUsers)





module.exports=router;