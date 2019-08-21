import EventHub from "./index";

const eventHub = new EventHub()

console.assert(eventHub instanceof Object, 'eventHub是个对象')


//on emit
let called = false
eventHub.on('xxx', message => {
  called = true
  console.log("called:" + called)
  console.log(message);
  console.assert(message === '今天林志玲结婚了')
})
eventHub.emit('xxx', '今天林志玲结婚了')


const eventHub2 = new EventHub()
let called2 = false
let fn1 = () => {
  called2 = true
  console.log('called2: ' + called2);
}
let fn2 = ()=> {}
let fn3 = ()=>{}
eventHub2.on('yyy', fn2)
eventHub2.on('yyy', fn3)
eventHub2.on('yyy', fn1)
eventHub2.off('yyy', fn1)
eventHub2.emit('yyy')
setTimeout(() => {
  console.log('called2: ' + called2)
},1000)