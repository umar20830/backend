// Install {nodemon} by using npm it is used to restart server automatically due to changes in file,{nodemon} run command (node app.js) automatically when we do some changes.Install {nodemon} has dev-dependency by using following command:
    // npm install nodemon --save-dev
    // nodemon app.js/filename that you give
    // if it's not working use npx nodemon app.js

// Now create server!


const http = require("http");

let server = http.createServer(function(req,res){
    res.end("<h1>Using Nodemon To Run Server</h1>")
})


server.listen(3000);


