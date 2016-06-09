var http = require('http');
var WebSocketServer = require('websocket').server;
var serveStatic = require('serve-static');

var serve = serveStatic('public', {index: 'index.html'});

var server = http.createServer(function(req, res){
  serve(req, res, () => res.end());
});
server.listen(3000);

var wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('request', function(request){
  console.log((new Date()) + ": Recieved request");
  
  var connection = request.accept('hi-protocol', request.origin);
  connection.on('message', function(message){
    connection.send(message.utf8Data+'!!!!'); 
  });
});

