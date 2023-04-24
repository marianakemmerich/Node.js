const http = require('http'); // gives network capabilities

const server = http.createServer((req, res) => {
  res.end('Hello from the server!);
});
  
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000.')
});
  
// NOTES:
// .createServer() - takes a callback function that will be fired each time a new request hits the server. this callback function gets access to two very important
// and fundamental variables: the request variable and the response variable
  
// port is a sub-address on a certain host
  
// host will be a standard local host
