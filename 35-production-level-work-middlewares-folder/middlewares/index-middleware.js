module.exports = function(req,res,next){
    console.log("hi");
    req.add = "12";
    next();
}