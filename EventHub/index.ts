class EventHub {
  eventList = {}
  //{
  // '贵阳晚报': [fn1,fn2,fn3]
  //  '贵州都市晚报': [fn1,fn2,fn3]
  // }

  on(eventName, fn) {
    //把fn推进this.eventList[eventName]数组里
    if (!this.eventList[eventName]) {
      this.eventList[eventName] = []
    }
    const array = this.eventList[eventName]
    array.push(fn)
  }

  emit(eventName) {
    //把this.eventList[eventName]数组里面的fn全部依次调用
    let array = this.eventList[eventName]
    if (!array) {
      array = []
    }
    array.map(fn => {
      fn.call()
    })
  }
}

export default EventHub