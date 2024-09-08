const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username : String,
    age : String,
    isMarried : Boolean,
    isAdmin : Boolean
})

module.exports = mongoose.model("user",userSchema)