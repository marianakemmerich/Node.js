![Front-end vs. Back-end](https://media.geeksforgeeks.org/wp-content/uploads/20230329122654/Front-end-vs-Back-end-copy.webp)

#### FRONT-END VS. BACK-END DEVELOPMENT

In general terms, front-end development is about everything that happens in the web browser, like designing and building the final website that's gonna be visible to the user.

The front-end stack, that makes front-end development easier if usually formed by the following technologies:
- HTML
- CSS
- JavaScript

Many modern front-end developers add more stuff to the stack, like:
- React
- Angular
- Redux
- GraphQL

On the other hand, back-end development is about everything that happens on the web server and is invisible to the final user.

The back-end stack is formed by technologies like:
- Node.js with mongoDB
- PHP with MySQL
- Python with PostgreSQL

#### SERVER

A basic server is a computer that is connected to the internet, which stores a website's files, like HTML, CSS and images, and runs an HTTP server that is capable of understanding URLs, requests and also delivering responses.
This piece of HTTP server software is what actually communicates with the browser using requests and responses, and it's what connects the front-end and the back-end of a website or a web application.

- **static server**: is a simple web server, all it can do is to serve static files to the client via HTTP.
- **dynamic server**: capable of running dynamic web applications that communicate with databases, etc.

#### STATIC VS. DYNAMIC VS. API

A *static website*, or a simple website, is when a developer uploads the final ready to be served files of a website onto the web server.
These files usually contain HTML, CSS, JavaScript, images, etc, and will be sent to the browser by the server when the website is requested. The browser will take these files and render them.

*Dynamic websites* are different from static websites because they're usually built on the server each time a new request comes in. They can change all the time according to the content that's in the database or users actions on the site.
Dynamic websites usually contain a database, an application running like a Node.js app, which fetches data from the database and then, along with a predefined template, builds each page that the user requests dynamically based on data coming from the database.

Each time a browser requests a page, that page will be built as HTML, CSS and JavaScript files that will be later sent to the browser. This process is sometimes called "Server-side Rendering".

> ✏️ Websites and web applications are kind of the same thing. When people refer to web applications they mean a dynamic website with some funcionality, like logging in, creating user profiles, searching stuff and etc.

APIs (Application Programming Interface) have a database and an app that fetches data from the database each time a client makes a request.
An API-powered website is quite similar to a dynamic website, both work dynamically. The big difference between them is that with an API we only send the data to the browser, usually in JSON data format.
