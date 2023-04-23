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
