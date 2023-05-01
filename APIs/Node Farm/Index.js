const fs = require('fs');
const http = require('http'); // gives network capabilities
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');

// sync version can be used for top level code, since it's executed once right at the beginning when the applications are loaded

const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempCards = fs.readFileSync(`${__dirname}/templates/cards.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); // reads the file synchronously
const dataObject = JSON.parse(data); // this will take the JSON code, which is a string, and automatically turn it into JavaScript

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    // for different path names we have different actions:
    // overview page
    if(pathname === '/' || pathname === '/overview'){ 
        res.writeHead(200, { 'Content-type': 'text/html' });

        const cardsHtml = dataObject.map(element => replaceTemplate(tempCards, element)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);

    // product page    
    } else if(pathname === '/product'){ 
        res.writeHead(200, { 'Content-type': 'text/html' });
        const product = dataObject[query.id]; // retrieving an element based on a query string
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

    // API route    
    } else if(pathname === '/api'){ 
            res.writeHead(200, { 'Content-type': 'application/json' }); // specify to the browser that you're sending back JSON
            res.end(data); // sends the data as the response

        // not found    
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
