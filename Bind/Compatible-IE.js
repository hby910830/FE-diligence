// console.log(Function.prototype.bind2)
// Function.prototype.bind2 = function(){}
// console.log(Function.prototype.bind2);
// const fn = function(){}
// console.log(fn.bind2);

function bind(asThis) {
	//this就是函数
	const fn = this
	var args = Array.prototype.slice.call(arguments, 1) //获取除掉asThis外后面的所有参数，相当于...args

	if (typeof fn !== 'function') {
		throw new Error('bind必须调用在函数身上！') //可以是对象,因为type {} === object
	}
	return function () { //生产新的函数
		var args2 = Array.prototype.slice.call(arguments, 0)
		return fn.apply(asThis, args.concat(args2)) //新的函数会调用旧的fn函数，并把asThis作为this传回去
	}
}

module.exports = bind

if (!Function.prototype.bind) {
	Function.prototype.bind = bind
}