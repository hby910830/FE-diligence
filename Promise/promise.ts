class Promise2 {
  state = 'pending'
  callbacks = []

  resolve(result) {
    setTimeout(() => {
        if (this.state !== 'pending') return
      this.callbacks.forEach(handle =>{
        this.state = 'fulfilled'
        if (typeof handle[0] === 'function') handle[0].call(undefined,result)
      })
    })
  }

  reject(reason) {
    setTimeout(() => {
      if(this.state !== 'pending') return
      this.callbacks.forEach(handle => {
        this.state = 'rejected'
        if (typeof handle[1] === 'function') handle[1].call(undefined, reason)
      })
    })
  }

  constructor(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Promise必须接受一个函数')
    }
    fn.call(undefined, this.resolve.bind(this), this.reject.bind(this))
  }

  then(succeed?, fail?) { //succeed,fail都是可选参数
    let handle = []
    if (typeof succeed === 'function') {
      handle[0] = succeed
    }
    if (typeof fail === 'function') {
      handle[1] = fail
    }
    this.callbacks.push(handle)
  }
}

export default Promise2