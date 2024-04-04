const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req);
    //Routing
    let path = 'C:/Users/ArjunCS/Desktop/Training/assests/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/aboutus':
            res.statusCode = 301;
            res.setHeader('location','/about');
            res.end();
            break;
        default:
            path += '404.html';
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('Listening to localhost');
});

