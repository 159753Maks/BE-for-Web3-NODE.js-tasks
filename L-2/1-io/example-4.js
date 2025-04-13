const fs = require('fs');

console.log('start');

try {
    const file = fs.readFileSync('./wrong-file.js');
} catch (error) {
    console.log('error', error); // Error: ENOENT: no such file or directory, open './wrong-file.js'
}

console.log('end');
