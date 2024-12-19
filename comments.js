// Create web server
// Create a web server which listens on port 3000 and serves the content of comments.html.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});