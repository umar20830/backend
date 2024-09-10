const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    content : String,
    data : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model("post",postSchema);