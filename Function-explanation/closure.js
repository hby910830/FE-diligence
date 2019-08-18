// 如果在函数里面可以访问外面的变量，那么：
// 【这个函数】+【这些变量】=【闭包】

for (var i = 0; i < 6; i++) {
	setTimeout(() => {
		console.log(i) // 6,6,6,6,6,6
	})
}

for (let i = 0; i < 6; i++) {
	setTimeout(() => {
		console.log(i) // 0,1,2,3,4,5
	})
}

for (let i = 0; i < 6; i++) {
	(function (i){//立即执行函数
		setTimeout(() => {
			console.log(i) // 0,1,2,3,4,5
		})
	})(i)
}



//对象是穷人的闭包
var obj = {
	i: 0,
	fn(){
		console.log(this.i)
	}
}
obj.fn() //0

var handle = function(){
	i = 0
	return function(){
		console.log(i)
	}
}()
handle()//0


//闭包是穷人的对象
function createPerson(name, age){
	return function(key){
		if(key === 'name') return name
		if(key === 'age') return age
	}
}

var person = createPerson('hanbaoyi', 18)
person('name') //hanbaoyi
person('age') //18