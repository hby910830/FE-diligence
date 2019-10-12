const db = require('./db')
module.exports.add = async title => {
	//读取之前的任务
	const list = await db.read()
	//往里面添加一个title任务
	list.push({title, done: false})
	//存储任务到文件
	await db.write(list)
}