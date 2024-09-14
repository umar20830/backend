const sum = require("../utils/sum")

module.exports.indexController = function(req,res){
    let a = sum();
    res.send("hi i am index " + a.toString());
}