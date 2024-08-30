const express = require("express");


const app = express();

app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("index") // see index file in views folder
})

app.listen(3000)