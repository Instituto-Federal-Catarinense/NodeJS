

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Crie um manipulador de eventos:
var myEventHandler = function () {
  console.log('Eu escuto um grito!');
}

//Atribuir o manipulador de eventos a um evento:
eventEmitter.on('grito', myEventHandler);

//Dispare o evento 'grito':
eventEmitter.emit('grito');

              

