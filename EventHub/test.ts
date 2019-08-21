import EventHub from "./index";

type TestCase = (data: string) => void

const test1: TestCase = data => {
  const eventHub = new EventHub()
  console.assert(eventHub instanceof Object, 'eventHub是个对象')
  console.log(data);
}

//on emit
const test2: TestCase = data => {
  const eventHub = new EventHub()
  let called = false
  eventHub.on('xxx', message => {
    called = true
    console.assert(message[0] === '今天林志玲结婚了')
    console.assert(message[1] === '言承旭无话可说')
    console.log(message[0])
    console.log(message[1])
  })
  eventHub.emit('xxx', ['今天林志玲结婚了', '言承旭无话可说'])
  setTimeout(() => {
    console.assert(called)
    console.log(data);
  }, 1000)
}

//off
const test3: TestCase = data => {
  const eventHub = new EventHub()
  let called = false
  let fn1 = () => {
    called = true
  }
  let fn2 = () => {
  }
  let fn3 = () => {
  }
  eventHub.on('yyy', fn2)
  eventHub.on('yyy', fn3)
  eventHub.on('yyy', fn1)
  eventHub.off('yyy', fn1)
  eventHub.emit('yyy')
  setTimeout(() => {
    console.assert(!called)
    console.log(data);
  }, 1000)
}

test1('EventHub可以创建对象')
test2('on了之后，emit会触发on的函数')
test3('off有用')


