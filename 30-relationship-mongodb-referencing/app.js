const express = require("express");
const mongooseConnection = require("./config/mongoose")
const userModel = require("./models/user-model")
const postModel = require("./models/post-model")


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.send("Hello!")
})

app.post("/create", async function (req, res) {
    let createdUser = await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    res.send(createdUser)
})

app.post("/:username/create/post", async function(req,res){
    let user = await userModel.findOne({username : req.params.username})

    let createdPost = await postModel.create({
        userId : user._id,
        content : "Hi it's my first post!"
    })

    user.posts.push(createdPost._id);
    await user.save();

    res.send({user , createdPost})

})

app.listen(3000)