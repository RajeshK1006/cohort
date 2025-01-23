const http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write("Hello World");
    res.end();
}).listen(3000);

// Goal
// Create and run a simple HTTP server using the built-in http module
// Tasks
// 1. Introduction to HTTP Module
// The http module provides functionalities to create an HTTP server and handle HTTP requests and responses.
// 2. Creating an HTTP Server
// Create a file named server.js and implement the code to create a http server on port 3000. Send 'Hello World!' as response
// Test your server by opening your browser and navigating to http://localhost:3000/. You should see Hello World!.