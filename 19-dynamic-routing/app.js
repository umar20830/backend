const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hey</h1>")
})

// you create {dynamic} routing by using {:} before your route which you make dynamic And also access this dynamic route name by using {req.params.routeName}

app.get("/profile/:username",function(req,res){
    res.send(`<h1>Hello ${req.params.username}</h1>`);
})

app.listen(3000)