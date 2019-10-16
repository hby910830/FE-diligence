const fs = jest.genMockFromModule('fs')
fs.x = () => {
	console.log('hi')
	return 'xxx'
}
module.exports = fs