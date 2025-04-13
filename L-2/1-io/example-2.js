const fs = require('fs');

console.log('start');

const file = fs.readFile('./example-2.js', (error, file) => { // callback function
    console.log("error", error); // null (no error)
    console.log("file info");
});

console.log(file); // undefined 

console.log('end');
