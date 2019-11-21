const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (request, response) => {
	const stream = fs.createReadStream('./bigFile.txt')
	stream.pipe(response)
})
server.listen(8888)
console.log('localhost:8888')

/*分析
查看node.js内存占用，基本不会超过30Mb
文件stream和response stream通过管道相连
* */