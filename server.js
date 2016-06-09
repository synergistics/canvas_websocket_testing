var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('public', {index: 'index.html'});

var server = http.createServer(function(req, res){
  serve(req, res, () => res.end());
});

server.listen(3000);
