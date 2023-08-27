var http = require('http');

//criar um objeto de servidor:
http.createServer(function (req, res) {
  res.write('Hello World!'); //escreva uma resposta ao cliente
  res.end(); //terminar a resposta
}).listen(8081); //o objeto servidor escuta na porta 8080 