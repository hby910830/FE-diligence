import EventHub from "./index";

const test1 = data => {
  const eventHub = new EventHub()
  console.assert(eventHub instanceof Object, 'eventHub是个对象')
  console.log(data);
}

//on emit
const test2 = data =>{
  const eventHub = new EventHub()
  let called = false
  eventHub.on('xxx', message => {
    called = true
    console.assert(message === '今天林志玲结婚了')
  })
  eventHub.emit('xxx', '今天林志玲结婚了')
  setTimeout(() => {
    console.assert(called)
    console.log(data);
  },1000)
}

//off
const test3 = data => {
  const eventHub = new EventHub()
  let called = false
  let fn1 = () => {
    called = true
  }
  let fn2 = ()=> {}
  let fn3 = ()=>{}
  eventHub.on('yyy', fn2)
  eventHub.on('yyy', fn3)
  eventHub.on('yyy', fn1)
  eventHub.off('yyy', fn1)
  eventHub.emit('yyy')
  setTimeout(() => {
    console.assert(!called)
    console.log(data);
  },1000)
}

test1('EventHub可以创建对')
test2('on了之后，emit会触发on的函数')
test3('off有用')


