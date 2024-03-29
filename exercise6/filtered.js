var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			cb(err);
		} else {
			list = list.filter(function(file) {
				return path.extname(file) === '.' + ext;
			});
			cb(null, list);
		}
	});
};
