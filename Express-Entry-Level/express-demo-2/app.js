const express = require('express');
const logger = require('./logger')
const app = express();
app.use(logger('dev'))

app.use((request, response, next) => {
	if (request.path === '/' && request.method === 'GET') {
		response.send('根目录')
	}
	next()
})

//更简便的写法
app.use('/xxx', (request, response, next) => {
	response.send('xxx页面')
	next()
})

app.get('/aaa', (request, response, next) => {
	response.send('aaa页面')
	next()
})

app.route('/bbb')
	.all((request, response, next) => {})
	.get((request, response, next) => {})
	.post((request, response, next) => {})

// app.use(function (req, res, next) {
// 	res.write('hi')
// 	next()    //必须调用next才会往下执行
// });
//
// app.use(function (req, res, next) {
// 	console.log(2)
// 	res.write('hi')
// 	next()
// });
//

app.use(function (req, res, next) {
	res.end()   //告诉浏览器响应结束了
	next()
});
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});