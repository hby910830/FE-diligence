class EventHub {
  eventList = {}
  //{
  // '贵阳晚报': [fn1,fn2,fn3]
  //  '贵州都市晚报': [fn1,fn2,fn3]
  // }
  on(eventName, fn) {
    //把fn推进this.eventList[eventName]数组里
    this.eventList[eventName] = this.eventList[eventName] || []
    this.eventList[eventName].push(fn)
  }
  emit(eventName, message) {
    //把this.eventList[eventName]数组里面的fn全部依次调用
    this.eventList[eventName] && this.eventList[eventName].map(fn => fn.call(null,message))
  }
}

export default EventHub