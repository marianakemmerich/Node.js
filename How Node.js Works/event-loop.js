// code blocking and event loop in action:

const fs = require('fs');
const crypto = require('crypto'); // encrypt a password

const start = Date.now(); // current date in miliseconds

process.env.UV_THREADPOOL_SIZE = 4; // changes the size of the thread pool

setTimeout(() => console.log('Timer 1 finished'), 0); // expires after 0 seconds
setImmediate(() => console.log('Immediate 1 finished')); // gets executed once per tick

fs.readFile('test-file.txt', () => {
  console.log('I/O finished'); // this callback is related to an I/O task

  console.log('//////////////////////////');

  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finished'), 3000); // will run for 3 seconds
  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('Process.nextTick')); // will be the first to be executed

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512'); // this will encrypt the password, block the code execution and move to the next line
  console.log(Date.now() - start, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encrypted');
});

console.log('Hello from the top-level code');
