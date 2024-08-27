const http = require("http");

// {http} it is module because it is a built in nodejs and the program that we install by using npm is call {packages}


// 1. Create a server by using http

// http.createServer(function(req,res){
    
// })


// 2. Also store it in a variable

// let sever = http.createServer(function(req,res){

// })


// 3. Send your response to the server you want

// let server = http.createServer(function(req,res){
//     res.end("<h1>Hello World</h1>");
// })


// 4. By using variable {listen} it at port 3000

let server = http.createServer(function(req,res){
    res.end("<h1> My First Server! </h1>");
})


server.listen(3000);

