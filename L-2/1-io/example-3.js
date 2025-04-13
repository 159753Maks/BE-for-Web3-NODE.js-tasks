const fs = require('fs');

console.log('start');

let data;

/*fs.readFile('./example-3.js', (error, file) => { // callback function
    if (error) throw error;
    data = file;
});*/

fs.readFile('./example-3.js', (error, file) => {
    if (error) {
        throw error; // throw new Error('Error'); // throw error
    }
    data = file;
}); // callback function   

console.log('file -->', data);

console.log('end');

// callback(null, 'file');
// callback(undefined, 'file'); no op
// callback(void 0, 'file'); no op
// callback('Error'); // file → undefined
