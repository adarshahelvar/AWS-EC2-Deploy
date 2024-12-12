// Import Express module
var http = require('http');

http.createServer(function(req, res){
    res.write("Hello from EC2 server");
    res.end();
}).listen(80);