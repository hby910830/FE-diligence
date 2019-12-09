const child_process = require('child_process')
const n = child_process.fork('./child.js')

n.on('message', m => {
	console.log('父进程得到值：')
	console.log(m)
})
n.send({hello: 'world'})