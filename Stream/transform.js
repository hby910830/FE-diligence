const {Transform} = require('stream')

const upperCaseStr = new Transform({
	transform(chunk, encoding, callback){
		this.push(chunk.toString().toUpperCase())
		callback()
	}
})

process.stdin.pipe(upperCaseStr).pipe(process.stdout)