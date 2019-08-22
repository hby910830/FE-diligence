//这是用对象的形式
// const add = ({a,b}) => a +b
// add({a:1,b:2}) //3


//柯里化，add接受一个参数，返回一个函数（闭包的形式）
const add1 = a => b => a + b
add1(1)(2) //3

//面试题
//如何把三参数函数add(1,2,3)变成curriedAdd(1)(2)(3)形式？
const curriedAdd =
	a =>
		b =>
			c =>
				a + b + c
curriedAdd(1)(2)(3) //6



