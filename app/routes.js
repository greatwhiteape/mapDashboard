module.exports = function(app) {

// server routes ===========================================================
// handle things like api calls
// authentication routes
	app.get('/proxy',function(req,res) {
		var http	= require('http');
		var url		= require('url');

		var qString = req.query.qstring;
		var host	= (typeof req.query.host !== 'undefined')  ? req.query.host : 'www.neracoos.org';
		var port 	= (typeof req.query.port !== 'undefined') ? Number(req.query.port) : 80;
		var method 	= (typeof req.query.method !== 'undefined') ? req.query.method : 'GET';

		var options = {
			host:   	host,		// host to forward to
			port:   	port,		// port to forward to
			path:   	qString,	// path to forward to
			method: 	method,		// request method
			headers:	req.headers	// headers to send
		};

		var creq = http.request(options, function(cres) {
			res.writeHead(cres.statusCode, cres.headers);
			cres.pipe(res); // pipe client to server response
		});
		req.pipe(creq); // pipe server to client request
	});
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
