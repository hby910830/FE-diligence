const inquirer = require('inquirer');
const db = require('./db')
module.exports.add = async title => {
	const list = await db.read()
	list.push({title, done: false})
	await db.write(list)
}
module.exports.clear = async () => {
	await db.write([])
}

function markAsDone(list, current) {
	list[current].done = true
	db.write(list)
}

function markAsUnDone(list, current) {
	list[current].done = false
	db.write(list)
}

function updateTitle(list, current) {
	inquirer.prompt({
		type: 'input',
		name: 'title',
		message: '新的标题',
		default: current.title
	}).then(answer => {
		list[current].title = answer.title
		db.write(list)
	})
}

function remove(list, current) {
	list.splice(current, 1)
	db.write(list)
}

function askForAction(list, current) {
	const actions = {markAsDone, markAsUnDone, updateTitle, remove}
	inquirer.prompt({
		type: 'list',
		name: 'action',
		message: '请选择操作',
		choices: [
			{name: '退出', value: 'quit'},
			{name: '已完成', value: 'markAsDone'},
			{name: '未完成', value: 'markAsUnDone'},
			{name: '改标题', value: 'updateTitle'},
			{name: '删除', value: 'remove'},
		]
	}).then(answer2 => {
		const action = actions[answer2.action]
		action && action(list, current)
	})
}

function askForCreateTask(list) {
	inquirer.prompt({
		type: 'input',
		name: 'title',
		message: '输入任务标题'
	}).then(answer => {
		list.push({
			title: answer.title,
			done: false
		})
		db.write(list)
	})
}

function printTasks(list) {
	inquirer
		.prompt({
			type: 'list',
			name: 'index',
			message: '请选择你想要操作的任务',
			choices: [
				{name: '退出', value: '-1'},
				...list.map((task, index) => {
					return {
						name: `${task.done ? '[√]' : '[?]'} ${index + 1} - ${task.title}`, value: index.toString()
					}
				}),
				{name: '+ 创建任务', value: '-2'}
			]
		})
		.then(answer => {
			const current = parseInt(answer.index)
			const index = current + 1
			if (index > 0) {
				askForAction(list, current)
			} else if (index === -1) {
				askForCreateTask(list)
			}
		});
}

module.exports.showAll = async () => {
	const list = await db.read()
	printTasks(list)
}
