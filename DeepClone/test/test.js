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
		describe('对象', () => {
			it('能够复制普通对象', () => {
				const a = {name: '宝亿', child: {name: '小宝亿'}}
				const b = deepClone(a)
				assert(a !== b)
				assert(a.name === b.name)
				assert(a.child !== b.child)
				assert(a.child.name === b.child.name)
			})
			it('能够复制数组对象', () => {
				const a = [[1, 2], [3, 4], [5, 6]]
				const b = deepClone(a)
				assert(a !== b)
				assert(a[0] !== b[0])
				assert(a[1] !== b[1])
				assert(a[2] !== b[2])
				assert.deepEqual(a, b)
			})
			it('能够复制函数', () => {
				const a = function (x, y) {
					return x + y
				}
				a.xxx = {yyy: {zzz: 1}}
				const b = deepClone(a)
				assert(a !== b)
				assert(a.xxx.yyy.zzz === b.xxx.yyy.zzz)
				assert(a.xxx.yyy !== b.xxx.yyy)
				assert(a.xxx !== b.xxx)
				assert(a(1, 2) === b(1, 2))
			})
			it('环也能复制', () => {
				const a = {name: '宝亿'}
				a.self = a
				const b = deepClone(a)
				assert(a !== b)
				assert(a.name === b.name)
				assert(a.self !== b.self)
			})
			//xit表示关掉这个测试用例
			xit('不会爆栈', () => {
				const a = {child:null}
				let b = a
				for(let i=0; i < 10000; i++){
					b.child = {
						child: null
					}
					b = b.child
				}
				const a2 = deepClone(a)
				assert(a !== a2)
				assert(a.child !== a2.child)
			})
			it('能够复制正则表达式',() => {
				// const a = /hi\d+/ig
				const a = new RegExp('hi\\d+', 'ig')
				a.xxx = {yyy: {zzz: 1}}
				const b = deepClone(a)
				assert(a !== b)
				assert(a.source === b.source)
				assert(a.flags === b.flags)
				assert(a.xxx.yyy.zzz === b.xxx.yyy.zzz)
				assert(a.xxx.yyy !== b.xxx.yyy)
				assert(a.xxx !== b.xxx)
			})
			it('能够复制日期',() => {
				const a = new Date()
				a.xxx = {yyy: {zzz: 1}}
				const b = deepClone(a)
				assert(a !== b)
				assert(a.getTime() === b.getTime())
				assert(a.xxx.yyy.zzz === b.xxx.yyy.zzz)
				assert(a.xxx.yyy !== b.xxx.yyy)
				assert(a.xxx !== b.xxx)
			})
		})
	})
})