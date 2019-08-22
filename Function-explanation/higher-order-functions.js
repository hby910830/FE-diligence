/*高阶函数:
*把函数作为参数或者返回值的函数
*/
// JS内置的高阶函数：
// 	1.Function.prototype.bind
// 	2.Function.prototype.apply
// 	3.Function.prototype.call
// 	4.Function.prototype.sort
// 	5.Function.prototype.map
// 	6.Function.prototype.filter
// 	7.Function.prototype.reduce

//Function.prototype.bind
const bind = Function.prototype.bind
//bind.call()是什么意思

const f1 = function () {
	console.log('this');
	console.log(this)
	console.log('arguments')
	console.log(arguments)
}
const newF1 = f1.bind({name: 'hby'}, 1, 2, 3, 4)
newF1()
// this
// {name: "hby"}
// arguments
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

/*推理*/
// obj.method(a,b,c)
// obj.method.call(obj,a,b,c)

// 设 obj = f1
// 设 method = bind

// 代入
// f1.bind(a,b,c)
// f1.bind.call(f1,a,b,c)

// 代入参数
// f1.bind({name: 'hby'},1,2,3)
// f1.bind.call(f1,{name: 'hby'},1,2,3)

// f1.bind = Function.prototype.bind
// var bind  = Function.prototype.bind
// 所以f1.bind = bind
// bind.call(f1,{name: 'hby'},1,2,3)

/*
*bind.call接受一个函数f1,this,其他参数，返回一个新的函数，
*新的函数会调用f1,并传入this和其他参数
*/

//Function.prototype.apply
const apply = Function.prototype.apply
// apply.call()是什么意思

const f2 = function () {
	console.log('this');
	console.log(this)
	console.log('arguments')
	console.log(arguments)
}
const newF2 = f2.apply({name: 'hby'}, 1, 2, 3, 4)
newF2()
// this
// {name: "hby"}
// arguments
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

/*推理*/
// obj.method(a,b,c)
// obj.method.call(obj,a,b,c)

// 设 obj = f2
// 设 method = apply

// 代入
// f2.apply(a,b,c)
// f2.apply.call(f2,a,b,c)

// 代入参数
// f2.apply({name: 'hby'},[1,2,3])
// f2.apply.call(f2,{name: 'hby'},[1,2,3])

// f2.apply = Function.prototype.apply
// var apply  = Function.prototype.apply
// 所以f2.apply = apply
// apply.call(f2,{name: 'hby'},[1,2,3])

