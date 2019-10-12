const homedir = require('os').homedir(); //系统home目录
const home = process.env.HOME;	//环境变量home目录
module.exports.add = () => {
	console.log(home);
	console.log(homedir)
}