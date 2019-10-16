const fs = require('fs')
const db = require('../db')
jest.mock('fs')

describe('db', () => {
	it('can read', async () => {
		const data = [{title: 1, done: false}]
		fs.setMock('./xxx', null, JSON.stringify(data))
		const list = await db.read('./xxx')
		expect(list).toStrictEqual(data) //因为[]和[]是两个不同的对象，所以不能用toEqual()
	})
})
