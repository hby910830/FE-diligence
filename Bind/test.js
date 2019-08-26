const bind = require('./index')

Function.prototype.bind2 = bind

const fn1 = function(){
	return this //给fn1什么this就返回什么this
}
let newFn1 = fn1.bind2({name: 'hby'}) //第一个参数会被当作fn1的this

console.assert(newFn1().name === 'hby')
