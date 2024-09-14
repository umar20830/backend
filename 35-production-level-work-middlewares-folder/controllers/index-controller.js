module.exports.indexController = function(req,res){
    res.send("I am came from {middleware} :" +  req.add );
}

