const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1 : read the file into a variable and, once that's done, send it to the client
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err); // in case the file doesn't exist
  //   res.end(data);
  // });

  // Solution 2: streams
  // instead of reading the data into a variable and storing the variable into memory, we'll create a readable stream
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", chunk => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", err => { // error event
  //   console.log(err);
  //   res.statusCode = 500; // internal server error
  //   res.end("File not found!");
  // });

  // Solution 3: use the pipe operator to pipe the output of a readable stream right into the input of a writable stream
  // this fixes the problem of backpressure because it'll automatically handle the speed of the data coming in and the data going out
 const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
   //readableSource.pipe(writeableDest);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
