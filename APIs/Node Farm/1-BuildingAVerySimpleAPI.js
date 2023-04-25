// an API is a service from which we can request data
// in this case, the data that the user wants to request is data about the products that are offered

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); // reads the file synchronously
const dataObject = JSON.parse(data); // this will take the JSON code, which is a string, and automatically turn it into JavaScript

const server = http.createServer((req, res) => {
    const pathName = req.url;
    // for different path names we have different actions:
    if(pathName === '/' || pathName === '/overview'){
        res.end('This is the OVERVIEW!');
    } else if(pathName === '/product'){
        res.end('This is the PRODUCT!');
    } else if(pathName === '/api'){ // API route
            res.writeHead(200, { 'Content-type': 'application/json'}); // specify to the browser that you're sending back JSON
            res.end(data); // sends the data as the response
        } else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000!');
});
