/*组合就是一个对象要什么属性就从另外一个对象复制过来，避免了不必要的继承*/

// function EventEmit() {
// 	const cache = []
// 	return{
// 		on() {},
// 		off() {},
// 		emit() {},
// 	}
// }

//或者讲EventEmit改写成类，但是这个类的方法必须写出箭头函数形式，
//因为这样实例化的时候方法就不会被放到原型上，mixin才能正确的通过遍历复制属性
class EventEmit {
	cache = []
	on = ()=> {}
	off = ()=> {}
	emit = ()=> {}

}

class Person {
	name
	sayHi() {}
}

const p1 = new Person()

mixin(p1, new EventEmit())

function mixin(to, from) {
	for (let key in from) {
		to[key] = from[key]
	}
}

console.log(p1);
/*
Person {
	emit: ƒ emit()
	name: undefined
	off: ƒ off()
	on: ƒ on()
	__proto__:
		constructor: class Person
		sayHi: ƒ sayHi()
		__proto__: Object
}
 */
