const program = require('commander');
const api = require('./index')
// Command implemented using action handler (description is supplied separately to `.command`)
// Returns new command for configuring.
program
	.option('-x, --xxx', 'what is x')
	.option('-y, --yyy', 'what is y')
program
	.command('add')
	.description('add a task')
	.action((...args) => {
		const words = args.slice(0, args.length - 1).join(' ')
		api.add(words)
	});
program
	.command('clear')
	.description('clear all tasks')
	.action(() => {
		api.clear()
	});
program.parse(process.argv)