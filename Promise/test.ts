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
      done() //done是mocha专门用来测试异步函数是否执行完了
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
    //     done()//done是mocha专门用来测试异步函数是否执行完了
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
        done()//done是mocha专门用来测试异步函数是否执行完了
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
        done()//done是mocha专门用来测试异步函数是否执行完了
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
    const promise = new Promise((resolve, reject) => {
      assert.isFalse(succeed.called)
      resolve()
      setTimeout(() => {
        assert(promise.state === 'fulfilled')
        assert.isTrue(succeed.called)
        done()//done是mocha专门用来测试异步函数是否执行完了
      })
    })
    promise.then(succeed)
  })
  it('如果 onFulfilled 是一个函数,它一定是在 promise 是 fulfilled 状态后调用,并且接受一个参数 value', done => {
    const succeed = sinon.fake()
    const promise = new Promise((resolve, reject) => {
      assert.isFalse(succeed.called)
      resolve(233)
      setTimeout(() => {
        assert(promise.state === 'fulfilled')
        assert.isTrue(succeed.called)
        assert(succeed.calledWith(233))
        done()//done是mocha专门用来测试异步函数是否执行完了
      })
    })
    promise.then(succeed)
  })
  it('如果 onFulfilled 是一个函数,它最多被调用一次', done => {
    const succeed = sinon.fake()
    const promise = new Promise((resolve, reject) => {
      assert.isFalse(succeed.called)
      resolve(233)
      resolve(23333)
      setTimeout(() => {
        assert(promise.state === 'fulfilled')
        assert.isTrue(succeed.calledOnce)
        assert(succeed.calledWith(233))
        done()//done是mocha专门用来测试异步函数是否执行完了
      })
    })
    promise.then(succeed)
  })
  it('如果 onRejected 是一个函数,它一定是在 promise 是 rejected 状态后调用,它最多被调用一次,并且接受一个参数 reason', done => {
    const fail = sinon.fake()
    const promise = new Promise((resolve, reject) => {
      assert.isFalse(fail.called)
      reject(123)
      reject(123333)
      setTimeout(() => {
        assert(promise.state === 'rejected')
        assert.isTrue(fail.calledWith(123))
        done()//done是mocha专门用来测试异步函数是否执行完了
      })
    })
    promise.then(null, fail)
  })
  it('只有在执行完我的代码之后，才能调用then里面的succeed(onFulfilled)或fail(onRejected)俩回调函数', done => {
    const succeed = sinon.fake()
    const promise = new Promise((resolve,reject) => {
      resolve()
    })
    promise.then(succeed)
    assert.isFalse(succeed.called)
    setTimeout(() => {
      assert.isTrue(succeed.called)
      done()
    })
  })
  it('onFulfilled 和 onRejected 会作为函数形式调用 (也就是说，默认 this 指向 global，严格模式 undefined', done => {
    const promise = new Promise((resolve,reject) => {
      resolve()
    })
    promise.then(function(){
      'use strict'
      assert(this === undefined)
      done()
    })
  })
  it('在同一个 promise 实例中，then 可以链式调用多次,并且回调会以他们注册时的顺序依次执行', done => {
    const promise = new Promise((resolve,reject) => {
      resolve()
    })
    const callbacks = [sinon.fake(),sinon.fake(),sinon.fake()]
    promise.then(callbacks[0])
    promise.then(callbacks[1])
    promise.then(callbacks[2])
    setTimeout(() => {
      assert(callbacks[0].called)
      assert(callbacks[1].calledAfter(callbacks[0]))
      assert(callbacks[1].called)
      assert(callbacks[1].calledBefore(callbacks[2]))
      assert(callbacks[2].called)
      done()
    })
  })
})