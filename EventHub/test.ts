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