var http = require('http');//node里面一个模块

http.get('http://kaoshi.edu.sina.com.cn/college/scorelist?page=1', function(res) {
	// console.log("statusCode: ", res.statusCode);
	// console.log("headers: ", res.headers);

	res.on('data', function(d) {
		process.stdout.write(d);
	});

}).on('error', function(e) {
	console.error(e);
});