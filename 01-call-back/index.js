

// function server(cbfn){
//     console.log("Connecting to the server...................");
//     setTimeout(() => {
//         cbfn();
//     }, 2000);
// }

// function connected(cbfn){
//     console.log("Connected to the server!");
//     setTimeout(() => {
//         cbfn();
//     }, 3000);
// }

// function fetch(cbfn){
//     console.log("Fetching courses................");
//     setTimeout(() => {
//         cbfn();
//     }, 3000);
// }

// function courses(){
//     let data = ["course1","course2","course3","course4"]
//     console.log("Courses are here --------- ",data);
    
// }

// server(function(){
//     connected(function(){
//         fetch(function(){
//             courses();
//         });
//     })
// });



function server(cbfn){
    console.log("Connecting to server .............");
    setTimeout(() => {
        cbfn();
    }, 2000);

}

function connected(cbfn){
    console.log("Connected to the server!");
    setTimeout(() => {
        cbfn();
    }, 3000);
}

function fetch(cbfn){
    console.log("Fetching courses ............");
    setTimeout(() => {
        cbfn();
    }, 5000);
}

function courses(){
    let arr = ["course1","course2","course3","course4","course5"];
    console.log(arr);
}

server(function(){
    connected(function(){
        fetch(function(){
            courses();
        });
    });
})