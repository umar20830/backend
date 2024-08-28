const http = require("http");

// Now we create some routes in normal words we say urls.


const server = http.createServer(function (req, res) {

    // {req.url} is used to create routes like {url}.
    // console.log(req.url);


    if (req.url === "/admin")/* if route is {/admin} */ {
        res.end("<h1>Hello Umar</h1>") /* Calls this Block */
    } else if (req.url === "/server") /* Same logic describe {above} */ {
        res.end("<h1>Hello Umar's Server</h1>")
    } else {
        res.end("<h1>Hello World</h1>")
    }


})


server.listen(3000);