const express = require("express");

const app = express();

// Without {try and catch}

// app.get("/",function(req,res){
//     res.send(hey)
// })


// With {try and catch}

app.get("/",function(req,res,next){
    try{
        res.send(hey)
    }
    catch(err){
        next(err)
    }
})


// Always write {Error Handler} at the bottom of requests.
// If express got an error in request and response it automatically run {Error Handler}.
// But we always use {try and catch} because we don't depend on the express


app.use((err,req,res,next)=>{
    res.send(err.message)
})

app.listen(3000)