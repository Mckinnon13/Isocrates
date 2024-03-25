let express = require('express');
let mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://arjuncs171:Ya9AovsdeSk8XLyA@cluster0.9irddyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((x)=>{
    console.log('Connected to DB');
})
.catch((err)=>{
    console.log('Error connecting to database');
});

const app = express();
const server = app.listen(4000,()=>{
    console.log('Connnected to port 4000');
});