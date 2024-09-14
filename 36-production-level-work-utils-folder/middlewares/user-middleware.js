module.exports = function(req,res,next){
    console.log("I passsed out user middleware");
    next();
}