feature/Sonal-Dilmith/Lab-Practice
console.log("Hello and let's start labsheet 03");

const fs = require('fs');
fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) throw err;
    console.log('File saved!');
});
 main
