// console.log(Function.prototype.bind2)
// Function.prototype.bind2 = function(){}
// console.log(Function.prototype.bind2);
// const fn = function(){}
// console.log(fn.bind2);

function bind(asThis) {
	//this就是函数
	const fn = this
	return function () {
		return fn.call(asThis)
	}
}

module.exports = bind

if (!Function.prototype.bind) {
	Function.prototype.bind = bind
}