function deepClone(source) {
	if (source instanceof Object) {
		if (source instanceof Array) {
			const dist = []
			for (let key in source) {
				dist[key] = deepClone(source[key])
			}
			return dist
		} else {
			const dist = {}
			for (let key in source) {
				if (source.hasOwnProperty(key)) {
					dist[key] = deepClone(source[key])
				}
			}
			return dist
		}
	}
	return source
}

module.exports = deepClone