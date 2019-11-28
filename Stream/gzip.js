const fs = require('fs')
const zlib = require('zlib')

const file = process.argv[2] //获取用户输入的文件路径参数

fs.createReadStream(file)
	.pipe(zlib.createGzip()) //进行gzip压缩操作
	.pipe(fs.createWriteStream(file + '.gz')) //把读取的文件变成.gz文件