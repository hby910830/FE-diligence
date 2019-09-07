function deepClone(source) {
	if (source instanceof Object) {
		let dist
		if (source instanceof Array) {
			dist = []
		} else if (source instanceof Function) {
			dist = function () {
				return source.apply(null, arguments)
			}
		} else {
			dist = {}
		}
		for (let key in source) {
			if (source.hasOwnProperty(key)) {
				dist[key] = deepClone(source[key])
			}
		}
		return dist
	}
	return source
}

module.exports = deepClone