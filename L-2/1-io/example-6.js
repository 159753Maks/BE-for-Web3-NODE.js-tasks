const fs = require('fs');

let data = null;

fs.readFile('./data/file.txt', (err, file) => {
    if (err) throw err;
    data = file;
});

fs.writeFile('./data/file.back', data);

// запустим чтение файла
//запись переменной data в файл file.back
// завершим чтение файла