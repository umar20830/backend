const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username : String,
    age : Number,
    email : String,
    password : String,
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "post"
    }],
    tags : [{
        type : String
    }]
})


module.exports = mongoose.model("user",userSchema);