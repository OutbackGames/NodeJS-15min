/*
	Variables Examples - JS/Node.js
*/

var numberFmt = 100;
console.log(numberFmt);
console.log(typeof numberFmt); //Type of format

var stringFmt = 'OneHundred \n';
console.log(stringFmt);
console.log (typeof stringFmt);

var sampleObj = new Object(); //empty
console.log(typeof sampleObj, '|| Sample Object 1');

//a troll account
var sampleObj2 = {
	username: 'HelloKittyLord1337',
	pwd: 'ThIsIsAsUpEr!SecurePASwoRD?##',
	sex: 'Male',
	gender:'Unknown',
	website:'GamerLordz.co',
	flags:'troll'
};
console.log(typeof sampleObj2, '|| Sample Object 2');
console.log('username: ',sampleObj2.username, ' password: ', sampleObj2.pwd);
console.log('sex: ',sampleObj2.sex, ' gender: ', sampleObj2.gender);
console.log('website: ',sampleObj2.website);
console.log('flags: ',sampleObj2.flags);

var myData = []; 


/*
	Example WebServer
*/

var http = require("http");

function ReqProcess(request, resolution){
	
	var contentBody = 'Service Contacted\n';
	var contentLength = contentBody.length;
	
	resolution.writeHead(200, {
			
			'Content-Length': contentLength,
			'Content-Type': 'text/plain'
	});
	resolution.end(contentBody);
	
}
var serv = http.createServer(ReqProcess);
serv.listen(8080);





