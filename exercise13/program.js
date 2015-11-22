var http = require('http')
var url = require('url')

server = http.createServer(function(req, res) {
	var queryString = url.parse(req.url, true)
	if (queryString.pathname === '/api/parsetime') {
		res.writeHead(200, {'content-type': 'application/json'})
		var date = new Date(queryString.query.iso)
		var json = JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		})
		res.end(json)
	} else if (url.parse(req.url).pathname === '/api/unixtime') {
		res.writeHead(200, {'content-type': 'application/json'})
		var date = new Date(queryString.query.iso)
		var json = JSON.stringify({unixtime: date.getTime()})
		res.end(json)
	}
})

server.listen(process.argv[2])
