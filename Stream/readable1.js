const {Readable} = require('stream')

const inStream = new Readable()

inStream.push('ABCDEFG')
inStream.push('HIJKLMN')

inStream.push(null)  //No more data

// inStream.pipe(process.stdout)  //先把所以数据都push进去了，然后再pipe
inStream.on('data', chunk => { //这里是分两次写数据
	process.stdout.write(chunk)
	console.log('写数据了')
})
