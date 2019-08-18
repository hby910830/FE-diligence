// 函数的返回值由什么决定？
// 影响因素：
// 2.1 调用时输入的参数params
// 2.2 定义时的环境env

{
	let x = 'x'
	let a = '1'

	function f1(x) {
		return x + a
	}

	{
		let a = 2
		console.log(f1('x'))
	}
}

{
	let x = 'x'
	let a = '1'

	function f1(x) {
		return x + a
	}

	a = '3'
	{
		let a = 2
		console.log(f1('x'))
	}
	a = '4'
}

// 另一个例子
{
	let x = 'x'
	let a = '1'

	function f1(c) {
		c()
	};

	{
		let a = '2'

		function f2() {
			console.log(x + a)
		}

		f1(f2)
	}
}
// 这个例子说a是定义时的a，不是执行时的a