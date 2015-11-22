var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults() {
	for (var i = 0; i < results.length; i++) {
		console.log(results[i])
	}
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(res) {
		res.pipe(bl(function(err, data) {
			if (err) {
				return console.err(err)
			} else {
				results[index] = data.toString()
				count++

				if (count == 3) {
					printResults(results)
				}
			}
		}))
	})
}

for (var i = 0; i < 3; i++) {
	httpGet(i)
}
