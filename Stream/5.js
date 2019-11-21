const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (request, response) => {
	const stream = fs.createReadStream('./bigFile.txt')
	stream.pipe(response)
	stream.pause()  //stream会暂停写入
	setTimeout(() => {
		stream.resume() //stream会恢复写入
	},3000)
})

server.listen(8888)
console.log('localhost:8888')
