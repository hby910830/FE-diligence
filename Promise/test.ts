import * as chai from 'chai'

const assert = chai.assert
import Promise from "./promise";

describe('Promise',() => {
  it('是一个类',() => {
    assert(typeof Promise === 'function')
    assert(typeof Promise.prototype === 'object')
  })
  // it('拥有对象方法then',() => {
  //
  // })
})