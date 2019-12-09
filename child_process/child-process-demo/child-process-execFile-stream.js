const {execFile} = require('child_process')

const output = '../'

const stream = execFile('ls', [output])

stream.stdout.on('data', chunk => {
	console.log(chunk)
})