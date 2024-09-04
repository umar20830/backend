const express = require("express");
const mongooseConnection = require("./config/mongoose")
const userSchema = require("./models/user");

//In {config} folder we write configuration of {database} like mongoDB.
// In {models} folder we write code of all {Schemas} like {userSchema} in which we tell which things user contains.

const app = express();


app.get("/",function(req,res){
    res.send("<h1>Hello G</h1>")
})

app.listen(3000);