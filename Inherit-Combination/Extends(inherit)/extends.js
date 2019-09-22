//继承消除重复，细节：constructor要调用super(),以保证EventEmit实例被初始化
class EventEmit{
	constructor(){}
	cache = []
	on(){}
	off(){}
	emit(){}
}

class Person extends EventEmit{
	name
	sayHi(){}
	constructor(){super()}
}

class 报社 extends EventEmit{
	print(){}
	constructor(){super()}
}

const p1 = new Person()
const baoshe = new 报社()

console.log(p1);
/*
Person {cache: Array(0), name: undefined}
cache: []
name: undefined
__proto__: EventEmit
	constructor: class Person
	sayHi: ƒ sayHi()
	__proto__:
		constructor: class EventEmit
		emit: ƒ emit()
		off: ƒ off()
		on: ƒ on()
 */
console.log(baoshe);
/*
报社 {cache: Array(0)}
cache: []
__proto__: EventEmit
	constructor: class 报社
	print: ƒ print()
	__proto__:
		constructor: class EventEmit
		emit: ƒ emit()
		off: ƒ off()
		on: ƒ on()
 */