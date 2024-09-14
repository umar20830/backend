const sum = require("../utils/sum")

module.exports.userController = function(req,res){
    let a = sum();
    res.send("Hi i am from userController! " + a.toString());
} 