var http = require('http')
var fs = require('fs')

server = http.createServer(function(req, res) {
	res.writeHead(200, {'content-type': 'text/plain'})
	fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(process.argv[2])
