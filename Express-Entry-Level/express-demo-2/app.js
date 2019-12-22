const express = require('express');
const app = express();

app.use(function (req, res, next) {
	console.log(req.url)
	res.write('hi')
	next()    //必须调用next才会往下执行
});

app.use(function (req, res, next) {
	console.log(2)
	res.write('hi')
	next()
});

app.use(function (req, res, next) {
	res.end()   //告诉浏览器响应结束了
	next()
});
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});