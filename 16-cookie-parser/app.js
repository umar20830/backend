const express = require("express");
const cookieParser = require('cookie-parser')
// Require a {cookie-parser}

const  app = express();

// Set {cookieParser} in app

app.use(cookieParser()); // Now we are able to read cookie data

app.get("/",function(req,res){
    res.send("<h1>Hello World</h1>");
})

// Agr ap chahta hain ka jab koi user kisi {route} par request bheja or uska browser par koi {cookie} set kr dei jai {cookie mean some {data} } to iska liya hum {res.cookie("key","value")} syntax use krta hain

app.get("/login",function(req,res){
    res.cookie("login","umar");
    res.send("You are Login");
})

// Read cookie data that you store in above route.But you are not able to read cookie data like that so if you read it use a middleware which name has {cookie-parser}

app.get("/read",function(req,res){
    console.log(req.cookies.login);
    res.send("Read Your Cookie!")
})

app.listen(3000);