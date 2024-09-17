const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();


app.get("/",function(req,res){
    res.send("hlo!")
})

app.post("/createtoken",function(req,res){
    const token = jwt.sign({name:"Umar",},"umar");
    res.send(token);
})

app.post("/checktoken",function(req,res){
    const token = jwt.decode(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVW1hciIsImlhdCI6MTcyNjU4OTA5MX0.2oJiH87vnm8-7scYyKdQ8cNHKCBM1vXsKFkyJQpcwPM",
        "umar"
    );
    res.send(token);
})


app.listen(3000);