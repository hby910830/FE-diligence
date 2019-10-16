const fs = jest.genMockFromModule('fs') //jest提供的mock fs
const _fs = jest.requireActual('fs')	//真实的fs
Object.assign(fs, _fs)
const readMocks = []
fs.setReadFileMock = (path, error, data) => {
	readMocks[path] = [error, data]
}
//fs.readFile('xxx', fn)
fs.readFile = (path, options, callback) => {
	if (!callback) {callback = options} // 防止如果用户只传两个参数，就把callback赋值给第二个参数
	if (path in readMocks) {
		//callback(readMocks[path][0],readMocks[path][1]) //可以简写成下面的形式
		callback(...readMocks[path])
	} else {
		_fs.readFile(path, options, callback)
	}
}
const writeMocks = {}
fs.setWriteFileMock = (path, fn) => {
	writeMocks[path] = fn
}
fs.writeFile = (path, data, options, callback) => {
	if (path in writeMocks) {
		writeMocks[path](path, data, options, callback)
	}else{
		_fs.writeFile(path, data, options, callback)
	}
}
module.exports = fs