var http = require('http')
var bl = require('bl')

var url1, url2, url3

http.get(process.argv[2], function(res) {
	res.pipe(bl(function(err, data) {
		if (err) {
			return console.err(err)
		} else {
			console.log(data.toString())
			http.get(process.argv[3], function(res) {
				res.pipe(bl(function(err, data) {
					if (err) {
						return console.err(err)
					} else {
						console.log(data.toString())
						http.get(process.argv[4], function(res) {
							res.pipe(bl(function(err, data) {
								if (err) {
									return console.err(err)
								} else {
									console.log(data.toString())
								}
							}))
						})

					}
				}))
			})

		}
	}))
})
