const {exec} = require('child_process')

exec('ls ../', (error, stdout, stderr) => {
	//等到子进程运行结束之后，主进程再用回调函数读取子进程的运行结果。即输出error, stdout, stderr
	console.log('err')
	console.log(error)      // null
	console.log('stdout')
	console.log(stdout)     // README.md child-process-demo
	console.log('stderr')
	console.log(stderr)   //
})