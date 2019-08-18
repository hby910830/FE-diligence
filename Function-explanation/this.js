const f1 = new Function('x', 'y', 'return x + y')
function f2(x, y) {return x + y}
const f3 = function (x, y) {return x + y}
const f4 = (x, y) => {return x + y}
f1(1,2)
f2(1,2)
f3(1,2)
f4(1,2)


const fn = function(arg1,arg2){console.log(this,arg1,arg2)}
const obj = {method: fn}
const array = [function(text){console.log(this,text)},1,2]

//显式this
fn.call({name: 1}, 1,2)
fn.bind({name: 1}, 1,2)()
obj.method.call(obj, 1,2)

//隐式this
fn(1,2)						//fn.call('undefined',1,2)  //window
obj.method(1,2)		//obj.method.call(obj,1,2)	//{method: fn}
array[0]('hi')							//array[0].call(array,'hi')	//[function(text){console.log(this,text)},1,2]