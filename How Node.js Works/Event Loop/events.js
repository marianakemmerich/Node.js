const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super(); // gets access to all the methods from the superclass
  }
}

const myEmitter = new Sales();

// observes the emitter and waits the event:
myEmitter.on('newSale', () => { // the callback function will get executed as soon as the event is emitted
  console.log('There was a new sale!');
});

myEmitter.on('newSale', () => {
  console.log('Costumer name: Mariana');
});

myEmitter.on('newSale', stock => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit('newSale', 9); // this object emits events

// creating a web server:

const server = http.createServer();

server.on('request', (req, res) => { // listen to the events emitted
  console.log('Request received!');
  console.log(req.url);
  res.end('Request received');
});

server.on('request', (req, res) => {
  console.log('Another request.');
});

server.on('close', () => { // event fired when the server closes down
  console.log('Server closed!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for requests...');
});
