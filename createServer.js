var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('requset was made' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey Guys');
})

server.listen(3000, 'localhost');
console.log('your server is up');