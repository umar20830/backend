const express = require("express");

const app = express();

app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.render("index");
})

// if get request type use {req.query} and if post request type use {req.body}


app.get("/check",function(req,res){
    console.log(req.query);  
    res.send("<h1> Working </h1>")
})



app.listen(3000);