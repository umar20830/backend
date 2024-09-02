// check route request using {----- POSTMAN ------}

const express = require("express");


const app = express();


// Check this route by using {postman}!

app.get("/postman",function(req,res){
    res.send("Checked By postman!")
})


app.listen(3000);