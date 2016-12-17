var http = require('http');
// http is built in with node, and require the HTTP module

// Port we are listening on:
var PORT = 7500;
// Port can be anything, double check what application you will be running it with
// Like mySQL uses 3306, or any other conflicting ports

function handleRequest(request, response) {
    // will return / as the base path for the request URL
    response.end("You're failing the class! You baddie! " + request.url + "/n Lose some weight too!");
}
// Using NODE http package to create server
// Then pass it the handleRequest function to provide functionality it needs to process.
// you can ALSO pass in an anonymous function, HOWEVER, recursion will not be available.
var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("server is listening on http://localhost:%s", PORT);
});