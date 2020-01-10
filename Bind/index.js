// console.log(Function.prototype.bind2)
// Function.prototype.bind2 = function(){}
// console.log(Function.prototype.bind2);
// const fn = function(){}
// console.log(fn.bind2);

function bind(asThis) {
	//this就是函数
	const fn = this
	return function () { //生产新的函数
		return fn.call(asThis) //新的函数会调用旧的fn函数，并把asThis作为this传回去
	}
}

module.exports = bind

if (!Function.prototype.bind) {
	Function.prototype.bind = bind
}