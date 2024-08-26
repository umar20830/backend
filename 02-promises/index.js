

function server(){
    console.log("Connecting to server .................");

    return new Promise(function(res,rej){
        setTimeout(() => {
            res("Connected to the server!")
        }, 3000);
    })
}


server()
.then(function(res){
    console.log(res);

    return new Promise(function(res,rej){
        setTimeout(() => {
            res("Fetching Courses...........");
        }, 2000);
    })
})
.then(function(res){
    console.log(res);

    return new Promise(function(res,rej){
        setTimeout(() => {
            res(["course1","course2","course3","course4"])
        }, 3000);
    })
})
.then(function(res){
    console.log(res);
})






