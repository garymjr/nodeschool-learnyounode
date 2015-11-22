var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var str = file.toString();

console.log(str.split('\n').length - 1);
