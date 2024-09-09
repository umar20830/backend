const express = require("express");
const mongooseConnection = require("./config/mongoose")
const {userModel,validateSchema} = require("./models/user-model")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",function(req,res){
    res.send("Hello");
})

app.post("/create", async function(req,res){
    const {username,age,email,password} = req.body

    validateSchema({username,age,email,password})

    // Above line check validations of all fields

})

app.listen(3000);