const express = require("express");
const bcrypt = require("bcrypt");


const app = express();

app.get("/", function (req, res) {
    res.send("hello!")
})

app.post("/create", async function (req, res) {
    let salt = await bcrypt.genSalt(10);
    let encryptPassword = await bcrypt.hash("umar", salt);

    res.send(encryptPassword);
})

app.post("/compare", async function(req,res){
    let checkPassword = await bcrypt.compare("umar","$2b$10$dUjQc3ycWUmUl4/6TZ6YOOjvkEkAXjMmcjUDNlUyAu3oL0Gxe0zT2");

    res.send(checkPassword);

})

app.listen(3000)

