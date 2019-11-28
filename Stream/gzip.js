const fs = require('fs')
const zlib = require('zlib')

const file = process.argv[2] //获取用户输入的文件路径参数

const {Transform} = require('stream')

const reportProgress = new Transform({
	transform(chunk, encoding, callback){
		process.stdout.write('.')
		callback(null,chunk)
	}
})

fs.createReadStream(file)
	.pipe(zlib.createGzip()) //进行gzip压缩操作
	// .on('data', () => process.stdout.write('.'))  //一个....符号的进度条
	.pipe(reportProgress)
	.pipe(fs.createWriteStream(file + '.gz')) //把读取的文件变成.gz文件
	.on('finish', () => console.log('Done'))  //  结束之后打印 Done