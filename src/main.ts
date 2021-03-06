///<reference path="../node-definitions/node.d.ts" />
 
import Http = require('http');
 
class MyServer {
	private header:Object = {'Content-Type': 'text/plain'};
 
	constructor() {
		var server:Http.Server = Http.createServer(this.onRequest);
		server.listen(3000);
		console.log("Server starting..");
	}
 
	private onRequest(request:Http.ServerRequest, response:Http.ServerResponse):void {
		response.writeHead(200, this.header);
		response.end("Hello TypeScript & node.js");
	}
}
 
var myServer = new MyServer();
