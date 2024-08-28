const express = require("express");
const app = express();



app.get("/",function(req,res){
    res.send("<h1>Hello main Page</h1>")
})

app.get("/about",function(req,res){
    res.send("<h1>Hello About Page</h1>")
})

// Above {routes} are access by their {routes name} like "/" and "/contact".
// But if someone send wrong route how I manage it.
// We manage it by using {wildcard} which is {*} we write it at the route place if we get wrong url that's not match with our main routes. So, it match with this route {*}.
// Always Remember! this route {*} is write at the end of the code if you write it first it match all routes and your main routes not work.

// Now write this route

app.get("*",function(req,res){
    res.send(`<h1>Something went wrong!</h1>`)
})

// You also add it at the top of code and check it's output.

app.listen(3000);
