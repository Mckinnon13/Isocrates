const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
    res.write('<p>HI THIS IS A SERVER RESPONSE.</p>');
    res.end();
});

server.listen(3000, 'localhost',()=>{
    console.log('Listening to localhost');
});

