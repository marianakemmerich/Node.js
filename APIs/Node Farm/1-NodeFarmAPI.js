// sync version can be used for top level code, since it's executed once right at the beginning when the applications are loaded
const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName); // "/.../g" makes sure all the placeholders get replaced
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempCards = fs.readFileSync(`${__dirname}/templates/cards.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); // reads the file synchronously
const dataObject = JSON.parse(data); // this will take the JSON code, which is a string, and automatically turn it into JavaScript

const server = http.createServer((req, res) => {
    const pathName = req.url;
    // for different path names we have different actions:
    // overview page
    if(pathName === '/' || pathName === '/overview'){ 
        res.writeHead(200, { 'Content-type': 'text/html' });

        const cardsHtml = dataObject.map(element => replaceTemplate(tempCards, element)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);

    // product page    
    } else if(pathName === '/product'){ 
        res.end('This is the PRODUCT!');

    // API route    
    } else if(pathName === '/api'){ 
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
