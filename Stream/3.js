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

* */