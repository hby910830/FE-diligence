class Promise2 {
  succeed = null
  fail = null
  state = 'pending'

  resolve(result) {
    setTimeout(() => {
      if (this.state !== 'pending') return
      this.state = 'fulfilled'
      if (typeof this.succeed === 'function') this.succeed(result)

    })
  }

  reject(reason) {
    setTimeout(() => {
      if(this.state !== 'pending') return
      this.state = 'rejected'
      if (typeof this.fail === 'function') this.fail(reason)
    })
  }

  constructor(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Promise必须接受一个函数')
    }
    fn.call(undefined, this.resolve.bind(this), this.reject.bind(this))
  }

  then(succeed?, fail?) { //succeed,fail都是可选参数
    if (typeof succeed === 'function') {
      this.succeed = succeed
    }
    if (typeof fail === 'function') {
      this.fail = fail
    }
  }
}

export default Promise2