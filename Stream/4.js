const fs = require('fs')
const stream = require('stream')
const events = require('events')
const s = fs.createReadStream('./bigFile.txt')

console.log(stream.Readable.prototype) //Readable Object
console.log(events.EventEmitter.prototype)  //EventEmitter Object
console.log(s) //ReadStream Object 这里需要通过命令行来进行调试查看： node --inspect-brk 文件路径

//s = fs.createReadStream(path)
/*那么它的对象层级为
* 1.自身属性（由fs.ReadStream构造）
* 2.原型：stream.Readable.prototype
* 3.二级原型：stream.Stream.prototype
* 4.三级原型：events.EventEmitter.prototype
* 5.四级原型：Object.prototype
* */
//Stream对象都继承了EventEmitter