
// This method only export one thing and also used export only one time.

let a = 12;

// module.exports = a;


//---------------------------------------------------------------


// If you want to export multiples things use following method.


let b = 12;
let c = 14;

// module.exports = {b:b,c:c};

// Destructuring if a:a both are same use following method 

// module.export = {b,c}



// -------------------------------------------------------------------------------


// If you want to use module.exports multiple times use following method.


let d = "umar";
let e = "kinna";

module.exports.d = d;
module.exports.e = e;
