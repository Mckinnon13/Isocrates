/*
const os = require('os');
console.log(os.platform());
console.log(os.homedir());
*/

//file system
const fs = require('fs');
//read file
// fs.readFile('C:/Users/ArjunCS/Desktop/Training/Notes/Session1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// fs.writeFile('C:/Users/ArjunCS/Desktop/Training/Notes/Session1.txt','Hello I created a new file',()=>{
//     console.log("file written successfully");
// })


//create folder
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',err=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder Created');
//     })
// }
// else{
//     console.log('Folder exists');
// }

//delete folder
// if(fs.existsSync('./assets')){
//     fs.rmdir('./assets',err=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder Removed');
//     })
// }
// else{
//     console.log('Folder does not exist');
// }


//delete File
// if(fs.existsSync('C:/Users/ArjunCS/Desktop/Training/Notes/Session5.txt')){
//     fs.unlink('C:/Users/ArjunCS/Desktop/Training/Notes/Session5.txt',err=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('File deleted');
//     })
// }