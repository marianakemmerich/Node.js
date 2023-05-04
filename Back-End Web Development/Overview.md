![WEB](https://n.sinaimg.cn/tech/20160926/caoO-fxwevmc5512306.jpg)
## HOW THE WEB WORKS

- **Request-Response Model** or **Client-Server Architecture** is a synchronous pattern in which the client waits for the response from the server before continuing with other tasks.
This ensures that the client receives the requested information or the result of the task it requested.

- When we open a website, the browser makes a request to a DNS (Domain Name Server), which are special servers where internet domain names are located and translated into Internet Protocol (IP) addresses, much like a phonebook. This happens through a Internet Service Provider (ISP).

- Once we have the real web address, a TCP socket connection is established between the browser and the server. This connection is kept for the entire time it takes to transfer all the files of the website.

#### **TCP/IP:**
TCP stands for Transmission Control Protocol. It's job is to break out the requestsand responses into thousands of small chunks called "packets" before they are set. Once they get to their destination, it'll reassemble all the packets into the original request or response, so that the message arrives at the destination as quick as possible.

IP stands for Internet Protocol. It's job is to send and route all of these packets through the internet. It ensures all of them arrive at the destination that they should go using IP addresses on each packet.

Together, TCP and IP are communication protocols that define exactly how data travels across the web. They're basically internet's fundamental control system, since they set the rules about how data moves on the internet.

A communication protocol is a system of rules that allows two or more parties to communicate. In the case of http, it's a protocol that allows clients and web servers to communicate by sending requests and reposnse messagesfor client to server and back.

##### HTTP REQUEST MESSAGE:
```
GET /maps HTTP/1.1

Host: www.google.com
User-Agent: Mozilla/5.0
Accept-Language: en-User

<BODY>
```
- the beggining of the message is the most important part called *start line*, which contains the HTTP method used in the request, the request target and the HTTP version:
```
GET /maps HTTP/1.1
```

- the next part of the request are the request headers, which is information sent about the request itself:
```
Host: www.google.com
User-Agent: Mozilla/5.0
Accept-Language: en-User
```

- finally, in case we send data to the server, there will also be a request body, containing data, for example, coming from an HTML form:
```
<BODY>
```

##### HTTP RESPONSE MESSAGE:
```
HTTP/1.1 200 OK

Date: Fri, 18 Jan 2021
Content-Type: text/html
Transfer-Encoding: chunked

<BODY>
```

- the start line contains the HTTP version, status code and status message to let the client know whether the request has been successful or not:
```
HTTP/1.1 200 OK
```

- the response headers are just information about the response itself:
```
Date: Fri, 18 Jan 2021
Content-Type: text/html
Transfer-Encoding: chunked
```

- the last part of the response is actually present in most responses:
```
<BODY>
```

##### HTTP METHODS:
There are many available, but the most important one are:
- GET: requests data
- POST: sends data
- PUT/PATCH: modifies data

The main difference between HTTP and HTTPS is is that HTTPS is encrypted using TLS or SSL, which are protocols. Besides these additional encryption, the logic between HTTP requests and responses still aplies to HTTPS.
