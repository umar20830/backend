const fs = require("fs");


// <----------------- Using Callback functions -------------->

// To write file

fs.writeFile("uk.py","print('Hello World!')",function(err){
    // if(err) console.log(err.message);
    // else console.log("Writing file is Done");
})

// To read file

// if dont use <utf8> in this function we get buffer value.Also try it without <utf8> for your understanding.

fs.readFile("uk.py",'utf8',function(err,data){
    // if(err) console.log(err.message);
    // else console.log(data);
})

// To rename file

fs.rename("uk.py","kinna.py",function(err){
    // if(err) console.log(err.message);
    // else console.log("File renaming is done!");  
})


// To copy file

fs.copyFile("kinna.py","../kinna.py",function(err){
    // if(err) console.log(err.message);
    // else console.log("Copy file is done!");
})


// To append file

fs.appendFile("kinna.py","\na = 2+2",function(err){
    // if(err) console.log(err.message);
    // else console.log("Appending file is done!");
})


// To remove file

fs.rm("kinna.py",function(err){
    // if(err) console.log(err.message);
    // else console.log("File remove is done!");
})


// To know the path of a file

fs.realpath("kinna.py",function(err,data){
    // if(err) console.log(err.message);
    // else console.log(data);
})


// To make directory

fs.mkdir("uk",function(err){
    // if(err) console.log(err.message);
    // else console.log("Directory creation is done!");
})


// To remove directory

fs.rmdir("uk",{recursive:true},function(err){
    // if(err) console.log(err.message);
    // else console.log("Directory deleted is done!");
})


