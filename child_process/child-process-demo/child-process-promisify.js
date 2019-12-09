const {exec} = require('child_process')
const util = require('util')
const exec2 = util.promisify(exec)

exec2('ls ../').then( data => {
	console.log(data.stdout)  // README.md  child-process-demo
})