import * as chai from 'chai'

const assert = chai.assert
import Promise from "./promise";

describe('Promise',() => {
  it('是一个类',() => {
    // assert(typeof Promise === 'function')
    // assert(typeof Promise.prototype === 'object')
    assert.isFunction(Promise)
    assert.isObject(Promise.prototype)
  })
  // it('拥有对象方法then',() => {
  //
  // })
})