const express = require("express");
const morgan = require("morgan");

// {morgan} is liya use krta hain taaka hum browser sa aana wali req ki details/info maloom kr sakain, this request is display on your console.


const app = express();

app.use(morgan("dev")); // {option} like dev,tiny,combined,short,common

app.get("/",function(req,res){
    res.send("<h1>Hello Home Page</h1>")
})

app.get("/read",function(req,res){
    res.send("<h1>Hello New Page</h1>")
})

app.listen(3000)