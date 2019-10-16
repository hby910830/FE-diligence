const fs = jest.genMockFromModule('fs') //jest提供的mock fs
const _fs = jest.requireActual('fs')	//真实的fs
Object.assign(fs, _fs)
const mocks = []
fs.setMock = (path, error, data) => {
	mocks[path] = [error, data]
}
//fs.readFile('xxx', fn)
fs.readFile = (path, options, callback) => {
	if (!callback) {callback = options} // 防止如果用户只传两个参数，就把callback赋值给第二个参数
	if(path in mocks){
		//callback(mocks[path][0],mocks[path][1]) //可以简写成下面的形式
		callback(...mocks[path])
	}else{
		_fs.readFile(path, options, callback)
	}
}
module.exports = fs