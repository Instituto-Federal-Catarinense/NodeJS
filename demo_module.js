var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write("O horário e data são atualmente: " + dt.myDateTime());
  res.end();
}).listen(8080);