let http = require('http');
let url = require('url');
let fs = require('fs');

http
	.createServer((req, res) => {
		res.writeHead(200, { 'content-type': 'text/plain' });
		let q = url.parse(req.url, true).query;
		let txt = q.year + ' ' + q.month;
		// res.write(req.url);
		res.end(txt);
	})
	.listen(3000);
