var http = require('http');
// http is built in with node, and require the HTTP module

// Port we are listening on:
var badPORT = 7500;
var goodPORT = 7000;
// Port can be anything, double check what application you will be running it with
// Like mySQL uses 3306, or any other conflicting ports


    function handleRequestOne(request, response) {
        response.end("You're doing great in class!  " + request.url + " Keep it Up!");
    }



    function handleRequestTwo(request, response) {
        response.end("You're failing the class! You baddie! " + request.url + "/n Lose some weight too!");
    }

// Using NODE http package to create server
// Then pass it the handleRequest function to provide functionality it needs to process.
// you can ALSO pass in an anonymous function, HOWEVER, recursion will not be available.
var serverOne = http.createServer(handleRequestOne);

var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(goodPORT, function() {
    console.log("server is listening on http://localhost:%s", goodPORT);
});
serverTwo.listen(badPORT, function() {
    console.log("server is listening on http://localhost:%s", badPORT);
});