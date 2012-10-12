var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.use(express.static(__dirname));

server.listen(3000);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    
    setInterval(function() {
        socket.emit('update', { time: new Date().toLocaleTimeString() });	
    }, 1000);
    
    socket.on('echo', function (data) {
        socket.emit('msg', { message: data });
    });
});