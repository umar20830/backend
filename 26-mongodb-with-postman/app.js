const express = require("express");
const mongooseConnection = require("./config/mongoose")
const userModel = require("./models/userModel")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.send("<h1>Hello World</h1>")
})

app.post("/create",async function(req,res){
    const {username,email,password} = req.body;

    let createUser = await userModel.create({
        username,
        email,
        password
    })

    res.send(createUser)

})

app.get("/read/:username", async function(req,res){
    const readUser = await userModel.findOne({username:req.params.username})
    res.send(readUser)
})

app.get("/update/:username", async function(req,res){

    let {username,email,password} = req.body;

    const updatedUser = await userModel.findOneAndUpdate({username:req.params.username},{username,email},{new:true});

    res.send(updatedUser);

})

app.get("/delete/:username", async function(req,res){
    const deletedUser = await userModel.findOneAndDelete({username:req.params.username});

    res.send(deletedUser);
})

app.listen(3000);