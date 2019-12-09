const {exec} = require('child_process')

const streams = exec('ls ../')

streams.stdout.on('data', chunk => {
	console.log(chunk)  // README.md child-process-demo
})