const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (request, response) => {
	fs.readFile('./bigFile.txt', (error, data) => {
		if(error) throw error
		response.end(data)
		console.log('done')
	})
})
server.listen(8888)
console.log('localhost:8888')