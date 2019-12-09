const {spawn} = require('child_process')

const output = '../'

const streams = spawn('ls', [output])

streams.stdout.on('data', chunk => {
	console.log(chunk.toString())
})