const express = require("express");
const mongooseConnection = require("./config/mongoose")
const userSchema = require("./models/user")

const app =  express();


app.get("/",function(req,res){
    res.send("Hello Mongoose!")
})

// It is used to create document in collection of your database.

app.get("/create", async function(req,res){

    let userOne = await userSchema.create({
        username:"Kinna",
        email:"umark20830@gmail.com",
        password:"Umar"
    })

    res.send(userOne)

})


// It is used to read document of your collection that is present in your database.

app.get("/read", async function(req,res){

    let readOne = await userSchema.findOne({username:"Kinna"});

    res.send(readOne);

})


//It is used to update document in your collection of your database.

app.get("/update", async function(req,res){

    let updateOne = await userSchema.findOneAndUpdate({username:"Umar"},{username:"Umaza"},{new:true})

    res.send(updateOne)

})

// It is used to delete document in your collection of your database.

app.get("/del", async function(req,res){
    
    let deleteOne = await userSchema.deleteOne({username:"Umar"});

    res.send(deleteOne);

})



app.listen(3000);