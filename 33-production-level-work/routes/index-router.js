const express = require("express");

const router = express.Router();


router.get("/",function(req,res){
    res.send("Hello I am from index-router file")
})



module.exports = router;