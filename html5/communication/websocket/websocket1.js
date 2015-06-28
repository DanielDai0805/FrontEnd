var http = require('http');
var fs = require('fs');
var io = require('socket.io');

var documentRoot = 'E:/gitRepo/FrontEnd/html5/communication/websocket/www';

var httpServer = http.createServer(function(req,res){

	var url = req.url;
	var file = documentRoot+url;
	console.log(file);

	fs.readFile(file,function(err,data){
		if(err){
			res.writeHead(404,{
				'Content-type':'text/html;charset="utf-8"'
			});
			res.write('<h1>404</h1><p>你要找的页面被LEO吃了</p>');
			res.end();
		}else{
			res.writeHeader(200, {
				'content-type' : 'text/html;charset="utf-8"'
			});
			res.write(data);
			res.end();
		}
	});
}).listen(8888,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8888/');

var socket = io.listen(httpServer);
/*
	socket的事件监听
*/
socket.sockets.on('connection',function(socket){
	//console.log('some body is comming');
	//socket发送器 arg1  事件名称   arg2 数据，客户端只需要监听当前的事件即可
	socket.emit('hello','welcom');

	//服务器端监听客户端发送过来的事件
	/**
	socket.on('hellotoo',function(data){
		console.log(data);
	});*/

	//socket.broadcast.emit 如果c向服务器端发送一个事件，则事件会广播到其他有监听的socket

});
