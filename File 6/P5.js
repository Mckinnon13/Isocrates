//streams
const fs = require('fs');
const readStream = fs.createReadStream('C:/Users/ArjunCS/Desktop/Training/Notes/demo.txt',{encoding:'utf-8'});
const writeStream = fs.createWriteStream('C:/Users/ArjunCS/Desktop/Training/Notes/demo1.txt');

readStream.on('data',chunk=>{
    writeStream.write(chunk);
});

