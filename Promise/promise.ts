class Promise2 {
  succeed = null
  fail = null

  resolve() {
    setTimeout(() => {
      if(typeof this.succeed === 'function') this.succeed()
    })
  }

  reject() {
    setTimeout(() => {
      if(typeof this.fail === 'function') this.fail()
    })
  }

  constructor(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Promise必须接受一个函数')
    }
    fn.call(undefined, this.resolve.bind(this), this.reject.bind(this))
  }

  then(succeed?, fail?) { //succeed,fail都是可选参数
    if(typeof succeed === 'function'){
      this.succeed = succeed
    }
    if(typeof fail === 'function'){
      this.fail = fail
    }
  }
}

export default Promise2