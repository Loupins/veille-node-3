const http = require("http"); 
http.createServer((request, response) =>
{ 
	console.log('branchement sur le port 3000')
	response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
	
	response.end(); 
}).listen(3000);