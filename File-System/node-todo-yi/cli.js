const program = require('commander');
const api = require('./index')
// Command implemented using action handler (description is supplied separately to `.command`)
// Returns new command for configuring.
program
	.command('add')
	.description('add a task')
	.action((...args) => {
		const words = args.slice(0, args.length - 1).join(' ')
		api.add(words).then(() => console.log('添加成功'), () => console.log('添加失败'))
	});
program
	.command('clear')
	.description('clear all tasks')
	.action(() => {
		api.clear().then(() => console.log('清除完毕'), () => console.log('清除失败'))
	});
program.parse(process.argv)
if (process.argv.length === 2) {
	//说明用户直接运行node cli.js
	void api.showAll() //void可以清除没有处理.then()的Promise警告
}
