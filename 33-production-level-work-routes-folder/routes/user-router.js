const express = require("express");

const router = express.Router();


router.get("/",function(req,res){
    res.send("Hello i am from user-router file")
})

module.exports = router;