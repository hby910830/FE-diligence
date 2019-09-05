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
})