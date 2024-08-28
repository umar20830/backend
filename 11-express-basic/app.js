const express = require("express");
// We get all express functions into express and than store it into a {app}.
const app = express();


// We create a route by using express first parameter is an route and other is hander:
// app.get(route , handler);

app.get("/",function(req,res){
    res.send("<h1>Hello Express</h1>");
})

// Similar we create more {routes}

app.get("/contact",function(req,res){
    res.send("<h1>Hello Contact Page</h1>");
})

app.get("/about",function(req,res){
    res.send("<h1>Hello About Page</h1>");
})

app.listen(3000);