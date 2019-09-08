class Promise2 {
  succeed = null
  failed = null

  constructor(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Promise必须接受一个函数')
    }
    fn.call(undefined,
      () => {
        setTimeout(() => {
          this.succeed()
        })
      },
      () => {
        setTimeout(() => {
          this.failed()
        })
      })
  }

  then(succeed, failed) {
    this.succeed = succeed
    this.failed = failed
  }
}

export default Promise2