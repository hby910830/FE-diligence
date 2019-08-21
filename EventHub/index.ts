class EventHub {
  //类型是对象，对象key是string,value是array,array里面是个无返回值的function，function的参数是任意类型
  private eventList: { [key: string]: Array<(data: unknown) => void> } = {}
  //{
  // '贵阳晚报': [fn1,fn2,fn3]
  //  '贵州都市晚报': [fn1,fn2,fn3]
  // }
  on(eventName: string, fn: (data: unknown) => void) { //unknown只要用过一次类型就不能再改了，而any可以随便改
    //把fn推进this.eventList[eventName]数组里
    this.eventList[eventName] = this.eventList[eventName] || []
    this.eventList[eventName].push(fn)
  }

  emit(eventName: string, message?: unknown) {
    //把this.eventList[eventName]数组里面的fn全部依次调用
    this.eventList[eventName] && this.eventList[eventName].map(fn => fn.call(null, message))
  }

  off(eventName: string, fn: (data: unknown) => void) {
    //把fn从this.eventList[eventName]数组里删掉
    let index = this.eventList[eventName].indexOf(fn)
    console.log(this.eventList[eventName]); //[ [Function: fn2], [Function: fn3], [Function: fn1] ]
    console.log(index); //2
    if (index === -1) return
    this.eventList[eventName].splice(index, 1)
    console.log(this.eventList[eventName]); //[ [Function: fn2], [Function: fn3] ]
  }
}

export default EventHub