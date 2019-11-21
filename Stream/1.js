const fs = require('fs')
const stream = fs.createWriteStream('./bigFile.txt')

for (let i = 0; i < 1000000; i++) {
	stream.write(`这是第${i}行内容，我们需要很多很多内容，需要不停地写文件啊啊啊啊啊\n`)
}

stream.end() //别忘了关掉stream
console.log('done')

/*分析
打开流，多次往里面塞内容，关闭流
看起来就是可以多次写嘛，没什么大不了地
最终我们得到一个100兆左右的文件
* */