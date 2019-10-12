const homedir = require('os').homedir(); //系统home目录
const home = process.env.HOME || homedir;	//环境变量home目录
const fs = require('fs')
const path = require('path')
const dbPath = path.join(home, '.node-todo')

module.exports.add = (title) => {
	fs.readFile(dbPath,{flag: 'a+'}, (error1, data) => {
		if(error1){
			console.log(error1);
		}else{
			let list
			try{
				list = JSON.parse(data.toString())
			}catch (e) {
				list = []
			}
			const task = {
				title,
				done: false
			}
			list.push(task)
			console.log(list);
			const string = JSON.stringify(list)
			fs.writeFile(dbPath, string, error2 => console.log(error2))
		}
	})
}