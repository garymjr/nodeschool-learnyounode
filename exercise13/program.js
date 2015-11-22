var http = require('http')
var url = require('url')
var result

server = http.createServer(function(req, res) {
	var queryString = url.parse(req.url, true)
	if (queryString.pathname === '/api/parsetime') {
		var date = new Date(queryString.query.iso)
		result = JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		})
	} else if (url.parse(req.url).pathname === '/api/unixtime') {
		var date = new Date(queryString.query.iso)
		result = JSON.stringify({unixtime: date.getTime()})
	}
	if (result) {
		res.writeHead(200, {'content-type': 'application/json'})
		res.end(result)
	}
})

server.listen(process.argv[2])
