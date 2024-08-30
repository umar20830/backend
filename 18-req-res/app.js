const express = require("express");

// req : frontend sa kuch backend par ana 
// res : backend sa kuch frontend par jana

// frontend (req) ----> backend (res) -----> frontend 

// req.params
// req.body
// req.url
// req.cookies
// req.method
// req.query
// req.ip
//req.headers

const app = express();


app.get("/",function(req,res){
    res.send("<h1>Hey</h1>")
})

app.listen(3000);