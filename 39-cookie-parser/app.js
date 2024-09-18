const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser())

app.get("/",function(req,res){
    res.send("Hello");
})

app.get("/setcookie",function(req,res){
    res.cookie("age","20",{
        maxAge : 4000, // Cookie is delete after time you give in millisecond
        secure: true, // Cookie follow https to set on frontend if frontend don't follow https cookie not set in frontend
        httpOnly: true // Your cookie no one read on frontend like by using following command on console {document.cookie} 

    }); // To set cookie we don't need any package
    res.send("Set Cookie")
})

app.get("/readcookie",function(req,res){
    res.send(req.cookies.age); // To read cookie we need a package {cookie-parser} and set it in a {app.use(____())}
})

app.listen(5000);



