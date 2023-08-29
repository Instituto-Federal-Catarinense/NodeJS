var http = require('http');
var dt = require('./meumodulo');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hoje é dia de inter na libertadores!');
}).listen(8081); 