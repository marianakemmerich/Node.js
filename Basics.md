#### NODE.JS

With Node we can do all kinds of things that we cannot do with JavaScript in the browser, like, for example, reading and writing files from the file system.

In order to do that, we need to use a **node module**.

- Synchronous way of reading a file:

```
const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8'); // import the file to be read and define the character encoding
console.log(textIn);
```

- Synchronous way of writing a file:
```
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');
```

##### BLOCKING AND NON BLOCKING: ASYNCHRONOUS NATURE OF NODE.JS

The synchronous way of reading/writing a file simply means that each statement is processed one after another, line by line. This can become a problem, especially with slow operations, because each line blocks the execution of the rest of the code, that's why synchronous code is also called "blocking coode", because a certain operation can only be executed after the one before was finished.

The solution to this problem in Node is to use asynchronous, non-blocking code.

In an asynchronous code, we upload heavy work to be worked on in the background and, once the work is done, a callback function that was registered before is called to handle the result. During all the time, the rest of the code can still be executing without being blocked by the heavy task, which is running in the background.
```
const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('Reading file...');
```
###### *WHY IS CODE BLOCKING A BAD THING?*
In a Node.js process, which is where the application is running, there's only one single thread.

A thread is just like a set of instructions that is run in the computer's CPU, so, basically, the thread is where the code is actually executed in a machine's processor. Node.js is single threaded so, for each application, there's only one thread.

> Imagine there's a user accessing your application, and there's a huge synchronous file read in your code that will take one second to load. This will mean that, for that one second, all other users will have to wait because the entire execution is blocked for that one second. If the other users want to do some simple tasks, like logging into your application or just requesting some data, they won't be able to do so. They'll have to wait until the file is finished reading, only when that happens they'll be able to perform the simpler tasks, one after another.

##### NON-BLOCKING CODE:
The asynchronous file read function, instead of blocking the single thread, does the heavy work in the background, where it stays until it's finished reading the data from the file. Then, a callback function is registered to be called once the data is available. In this scenario, all the other users can perform their tasks in a single thread, one after another, while the file is still being read in the background.

Once the data is read, the callback function will get called to be executed in the main single thread, in order to process the read data.

##### CALLBACK HELL:
```
const fs = require('fs');

fs.readFile('start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`${data1}.txt`, 'utf-8', (err, data2) => {
        fs.readFile('append.txt', 'utf-8', (err, data3) => {
            fs.writeFile('final.txt', `${data2} ${data3}`, 'utf-8', (err) => {
                if(err) throw err;
                console.log('Your file has been saved!');
            });
        });
    });
});
```
