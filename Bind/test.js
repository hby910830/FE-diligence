// const bind = require('./index')
const bind = require('./this-two-params')

Function.prototype.bind2 = bind

const fn1 = function () {
	return this //给fn1什么this就返回什么this
}
let newFn1 = fn1.bind2({name: 'hby'}) //第一个参数会被当作fn1的this
console.assert(newFn1().name === 'hby')


const fn2 = function (p1, p2) {
	return [this, p1, p2]
}
let newFn2 = fn2.bind2({name: 'hby'}, 123, 456)
console.log(newFn2()); //[ { name: 'hby' }, 123, 456 ]
console.assert(newFn2()[0].name === 'hby')
console.assert(newFn2()[1] === 123)
console.assert(newFn2()[2] === 456)


const anotherFn2 = fn2.bind2({name:'hby'},110)
console.log(anotherFn2(120));
console.assert(anotherFn2(120)[0].name === 'hby')
console.assert(anotherFn2(120)[1] === 110)
console.assert(anotherFn2(120)[2] === 120)