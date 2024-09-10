const mongoose = require("mongoose");


// Embeding one {model} to another {model}


const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    posts : [      // It is another model that is embeding in a user
        {
            content : String,
            date : {
                type : Date,
                default : Date.now()
            }
        }
    ]
})


module.exports = mongoose.model("user",userSchema)
