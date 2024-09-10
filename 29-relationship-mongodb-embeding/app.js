const express = require("express");
const mongooseConnection = require("./config/mongoose")
const userModel = require("./models/user-model")

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.send("Hi Umar")
})

app.post("/create", async function (req, res) {
    const createdUser = await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    res.send(createdUser);
})

app.post("/:username/create/post", async function(req,res){
    let findUser = await userModel.findOne({username : req.params.username})
    findUser.posts.push({content:"Hehehe its my second post!"})
    let newUser = await findUser.save();
    res.send(newUser);

})



app.listen(3000)