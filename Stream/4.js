const fs = require('fs')
const stream = require('stream')
const events = require('events')
const s = fs.createReadStream('./bigFile.txt')

console.log(stream.Readable.prototype) //Readable Object
console.log(events.EventEmitter.prototype)  //EventEmitter Object
console.log(s) //ReadStream Object 这里需要通过命令行来进行调试查看： node --inspect-brk 文件路径

/*
*
* */