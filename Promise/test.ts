import * as chai from 'chai'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'

chai.use(sinonChai)

const assert = chai.assert
import Promise from "./promise";

describe('Promise', () => {
  it('是一个类', () => {
    // assert(typeof Promise === 'function')
    // assert(typeof Promise.prototype === 'object')
    assert.isFunction(Promise)
    assert.isObject(Promise.prototype)
  })
  it('new Promise必须接受一个函数', () => {
    assert.throw(() => {
      //@ts-ignore
      new Promise()
    })
    assert.throw(() => {
      //@ts-ignore
      new Promise(1)
    })
    assert.throw(() => {
      //@ts-ignore
      new Promise(false)
    })
  })
  it('new Promise(fn)会生产一个对象，这个对象有then方法', () => {
    const promise = new Promise(() => {
    })
    assert.isFunction(promise.then)
  })
  it('new Promise(fn)中的fn立即执行', () => {
    // let called = false
    // new Promise(() => {
    //   called = true
    // })
    // assert.isTrue(called)
    let fn = sinon.fake() //用sinon来测试函数是否被调用
    new Promise(fn)
    assert.isTrue(fn.called)
  })
  it('new Promise(fn)中的fn执行的时候必须接受resolve/reject两个函数', done => {
    new Promise((resolve, reject) => {
      assert.isFunction(resolve)
      assert.isFunction(reject)
      done()
    })
  })
  it('promise.then(success)中的success会在resolve被调用的时候执行', done => {
    // let called = false
    // const promise = new Promise((resolve, reject) => {
    //   //该函数没有执行
    //   assert.isFalse(called)
    //   resolve.call()
    //   setTimeout(() => {
    //     //该函数执行了
    //     assert.isTrue(called)
    //     done()//done是mocha专门用来测试函数是否执行了
    //   })
    // })
    // //@ts-ignore
    // promise.then(() => {
    //   called = true
    // })

    const succeed = sinon.fake()
    const promise = new Promise((resolve, reject) => {
      //该函数没有执行
      assert.isFalse(succeed.called)
      resolve.call()
      setTimeout(() => {
        //该函数执行了
        assert.isTrue(succeed.called)
        done()//done是mocha专门用来测试函数是否执行了
      })
    })
    //@ts-ignore
    promise.then(succeed)
  })
  it('promise.then(null,fail)中的fail会在reject被调用的时候执行', done => {
    const fail = sinon.fake()
    const promise = new Promise((resolve, reject) => {
      //该函数没有执行
      assert.isFalse(fail.called)
      reject.call()
      setTimeout(() => {
        //该函数执行了
        assert.isTrue(fail.called)
        done()//done是mocha专门用来测试函数是否执行了
      })
    })
    //@ts-ignore
    promise.then(null, fail)
  })
  it('如果 onFulfilled 不是函数，它会被忽略', () => {
    const promise = new Promise((resolve, reject) => {
      resolve()
    })
    promise.then(false, null)
  })
  it('如果 onRejected 不是函数，它会被忽略', () => {
    const promise = new Promise((resolve, reject) => {
      reject()
    })
    promise.then(null, false)
  })
  it('如果 onFulfilled 是一个函数,它一定是在 promise 是 fulfilled 状态后调用', done => {
    const succeed = sinon.fake()
    const promise = new Promise((resolve,reject) => {
      assert.isFalse(succeed.called)
      resolve()
      setTimeout(() => {
        assert(promise.state === 'fulfilled')
        assert.isTrue(succeed.called)
        done()
      })
    })
    promise.then(succeed)
  })
})