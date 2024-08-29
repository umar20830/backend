const express = require("express");
const app = express();

// Middlewares
// Jab ap browser sa koi request backend par bhejain or ap ya dakhna chahta hain ka is request ma kya hai ya is ma kuch add krna chahta hain to ap middlewares ka use karain ga taaka ap us request ma kuch change ya add kar sakain {route} par jaana sa phla.

// Middleware ko top par likhna hai or hamesha {app.use()} ka andar likhna hai.

// wo function jo 3 cheezain provide kary request,response,next wo middleware hota hai.

// Example

app.use(function(req,res,next){
    console.log("I am {Middleware}");
    next(); 
    // always use this {next()} because if you don't use it this {middleware} cannot send your request to their route.It stop your request their and your page is on reloading.{Also test middleware without giving next()}
})


app.get("/",function(req,res){
    res.send("<h1>Hello Home Page</h1>")
})


app.get("/contact",function(req,res){
    res.send("<h1>Hello Contact Page</h1>")
})

app.listen(3000);



