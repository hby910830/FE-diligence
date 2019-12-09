const {exec} = require('child_process')

exec('ls ../', (error, stdout, stderr) => {
	console.log(error)      // null
	console.log(stdout)     // README.md child-process-demo
	console.log(stderr)   //
})