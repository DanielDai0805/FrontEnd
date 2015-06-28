var http = require('http');
var fs = require('fs');

var documentRoot = 'E:/gitRepo/FrontEnd/html5/communication/websocket/www';

http.createServer(function(req,res){

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