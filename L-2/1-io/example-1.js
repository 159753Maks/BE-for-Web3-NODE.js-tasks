const fs = require('fs'); // импорт модуля fs (file system)

console.log('start');

const file = fs.readFileSync('./example-1.js'); // синхронное чтение файла
// readFileSync - синхронный метод, который блокирует выполнение кода до тех пор, пока файл не будет прочитан

// blocks here until file is read read
console.log(file); // Buffer

console.log(file.toString()); // utf-8

console.log('end');

//весь код выполняеться синхронно