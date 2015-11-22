var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(res) {
	res.pipe(bl(function(err, data) {
		if (err) {
			return console.error(err)
		} else {
			data = data.toString()
			console.log(data.split('').length)
			console.log(data)
		}
	}))
})
