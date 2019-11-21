const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (request, response) => {
	const stream = fs.createReadStream('./bigFile.txt')
	stream.pipe(response) //pipe 管道
})
server.listen(8888)
console.log('localhost:8888')

/*分析
查看node.js内存占用，基本不会超过30Mb
文件stream和response stream通过管道相连
* */

/*管道
* 定义：两个流可以用一个管道相连，stream1的末尾连接上stream2的开端，只要stream1有数据，就会流到stream2
* 常用代码：stream1.pipe(stream2)
* 链式操作：a.pipe(b).pipe(c) === a.pipe(b);b.pipe(c)
* */