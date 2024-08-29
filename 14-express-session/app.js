// cookies wo data jo browser par save ho.
// session wo data jo server par save ho.

const express = require("express");
const expressSession = require("express-session");

const app = express();

app.use(expressSession({
    secret:"Always make secret code here!",
    resave : false, // Don't save session again if there is no change
    saveUninitialized : false // If the user come your website and don't do any action like login or sign in so don't save their data.
}))


app.get("/",function(req,res){
    res.send("<h1>Hello Home Page</h1>")
})


app.get("/create",function(req,res){
    req.session.name = "umar"; // create session like that.
    res.send("<h1>Hello Create Page</h1>")
})

app.get("/session",function(req,res){
    console.log(req.session.name); // Remember this cookie give you {undefined} after server shut down , server restart.
    // Jab tak ap {/create} wala route nai chalain ga tab tak session ki value nai set hogi
})


app.listen(3000);