setTimeout(() => {
	process.send({foo: 'child'})
}, 2000)

process.on('message', m => {
	console.log('子进程得到值：')
	console.log(m)
})