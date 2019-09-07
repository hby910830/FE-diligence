const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)

const assert = chai.assert
const deepClone = require('../index')

describe('deepClone是一个函数', () => {
	it('是一个函数', () => {
		assert.isFunction(deepClone)
	})
	it('能复制基本类型', () => {
		const n = 123
		const n2 = deepClone(n)
		assert(n === n2)
		const s = '123'
		const s2 = deepClone(s)
		assert(s === s2)
		const b = false
		const b2 = deepClone(b)
		assert(b === b2)
		const u = undefined
		const u2 = deepClone(u)
		assert(u === u2)
		const empty = null
		const empty2 = deepClone(empty)
		assert(empty === empty2)
		const sym = Symbol()
		const sym2 = deepClone(sym)
		assert(sym === sym2)
	})
})