const {execFile} = require('child_process')

const output = '../'

execFile('ls', [output], (err, stdout) => {
	console.log(err)
	console.log(stdout)
})