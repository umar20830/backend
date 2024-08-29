const express = require("express");
const expressSession = require("express-session");
const flash = require("connect-flash");
// To use {connect-flash} it is important to {require} {express-session} and set it.
// {flash} is used to send data from one route to another routes.


const app = express();

app.use(expressSession({
    secret : "what you want",
    resave : false,
    saveUninitialized : false
}))

app.use(flash()); // apply {connect-flash} middleware

app.get("/",function(req,res){
    req.flash("name","umar"); //set data in this route by using {flash} and access it in another route
    res.redirect("/login"); // {redirect} is used to redirect the user to given page when it come to this route
})

app.get("/login",function(req,res){
    let msg = req.flash("name"); // we access data that we store in flash
    res.send(msg);
})


app.listen(3000);
