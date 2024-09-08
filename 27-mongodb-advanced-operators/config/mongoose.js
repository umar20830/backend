const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/operator");

const db = mongoose.connection

db.on("error",function(err){
    console.log(err);
})


db.on("open",function(){
    console.log("Connection Successful Connected!");
})

module.exports = db;