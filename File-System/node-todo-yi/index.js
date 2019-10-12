const program = require('commander');
// Command implemented using action handler (description is supplied separately to `.command`)
// Returns new command for configuring.
program
	.option('-x, --xxx', 'what is x')
	.option('-y, --yyy', 'what is y')
program
	.command('add <taskName>')
	.description('add a task')
	.action((task) => {
		console.log(task);
	});

program.parse(process.argv)