function bind(asThis,...args) {
	//this就是函数
	const fn = this
	return function () { //生产新的函数
		return fn.call(asThis,...args) //新的函数会调用就的fn函数，并把asThis作为this传回去
	}
}

module.exports = bind

if (!Function.prototype.bind) {
	Function.prototype.bind = bind
}