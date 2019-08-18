const f1 = new Function('x', 'y', 'return x + y')
function f2(x, y) {return x + y}
const f3 = function (x, y) {return x + y}
const f4 = (x, y) => {return x + y}
f1(1,2)
f2(1,2)
f3(1,2)
f4(1,2)