var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('inter vai ganha hj!');
  console.log('servidor rodando em http://localhost:8080/')
}).listen(8080); 
//paulo//