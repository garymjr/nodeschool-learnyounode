var filtered = require('./filtered');

filtered(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		callback(err);
	} else {
		data.forEach(function(file) {
			console.log(file);
		});
	}
});
