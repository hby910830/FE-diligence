const fs = require('fs')
const db = require('../db')
jest.mock('fs')
describe('db', () => {
	afterEach(() => {
		fs.clearMocks()
	})
	it('can read', async () => {
		const data = [{title: 1, done: false}]
		fs.setReadFileMock('./xxx', null, JSON.stringify(data))
		const list = await db.read('./xxx')
		expect(list).toStrictEqual(data) //因为[]和[]是两个不同的对象，所以不能用toEqual()
	})
	it('can write', async () => {
		let fakeFile
		fs.setWriteFileMock('/yyy', (path, data, callback) => {
			fakeFile = data
			callback(null)
		})
		const list = [{title: '见欧阳娜娜', done: true},{title: '见迪丽热巴', done: true}]
		await db.write(list,'/yyy')
		expect(fakeFile).toStrictEqual(JSON.stringify(list) + '\n')
	})
})
