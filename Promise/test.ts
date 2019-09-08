import * as chai from 'chai'

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
    let called = false
    new Promise(() => {
      called = true
    })
    assert.isTrue(called)
  })
  it('new Promise(fn)中的fn执行的时候必须接受resolve/reject两个函数', () => {
    let called = false
    new Promise((resolve, reject) => {
      called = true
      assert.isFunction(resolve)
      assert.isFunction(reject)
    })
    assert.isTrue(called)
  })
  it('promise.then(success)中的success会在resolve被调用的时候执行', done => {
    let called = false
    const promise = new Promise((resolve, reject) => {
      //该函数没有执行
      assert.isFalse(called)
      resolve.call()
      setTimeout(() => {
        //该函数执行了
        assert.isTrue(called)
        done()//done是mocha专门用来测试异步的
      })
    })
    //@ts-ignore
    promise.then(() => {
      called = true
    })
  })
})