var http = require('http');
var url=require('url');
var loggedUsers={"a":"A", "b":"B"};
http.createServer(function (req, res) {
	var url_parts=url.parse(req.url, true);
	var queryOb=url_parts.query;
	console.log(queryOb);
	JSON.stringify(req.data);
	var body;
	req.on('data', function(chunk) {
        console.log("Received body data:");       
        body += chunk;
      });
	req.on('end', function () {
        try {
    		var data = JSON.parse(body);
        	colnosole.log(data);

    	} 
    	catch (er) {
      		// uh oh!  bad json!
      		res.statusCode = 400;
      		return res.end('error: ' + er.message);
    	}
    });	
  	var u=queryOb['username'];
  	var p=queryOb['password'];
  	if(u && p) {
  		if(loggedUsers[u]==p){
			res.end("ok");
  		}
  		else{
  			res.end("chok");
  		}
  	}
  	else{
  		res.end("chok1");
  	}
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
console.log(__filename);
// http.createServer('/notification', function(req, res) {
// 	JSON.stringify(req.data);
// 	var body;
// 	req.on('data', function(chunk) {
//         console.log("Received body data:");       
//         body += chunk;
//       });
// 	req.on('end', function () {
//         try {
//     		var data = JSON.parse(body);
//         	colnosole.log(data);

//     	} 
//     	catch (er) {
//       		// uh oh!  bad json!
//       		res.statusCode = 400;
//       		return res.end('error: ' + er.message);
//     	}
//     });	
// }).listen(8080, '127.0.0.1');
//  console.log('Server running at http://127.0.0.1:8080/');