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