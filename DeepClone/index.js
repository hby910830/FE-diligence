// class DeepClone{
// 	constructor(){
// 		this.cache = [] //缓存，为了解决环问题
// 	}
// 	deepClone(source) {
// 		if (source instanceof Object) {
// 			let cachedDist = this.findCache(source)
// 			if (cachedDist) {
// 				return cachedDist
// 			}
// 			let dist
// 			if (source instanceof Array) {
// 				dist = []
// 			} else if (source instanceof Function) {
// 				dist = function () {
// 					return source.apply(null, arguments)
// 				}
// 			} else if (source instanceof RegExp) {
// 				dist = new RegExp(source.source, source.flags)
// 			} else if (source instanceof Date) {
// 				dist = new Date(source)
// 			} else {
// 				dist = {}
// 			}
// 			this.cache.push([source, dist])
// 			for (let key in source) {
// 				if (source.hasOwnProperty(key)) {
// 					dist[key] = this.deepClone(source[key])
// 				}
// 			}
// 			return dist
// 		}
// 		return source
// 	}
//
// 	findCache(source) {
// 		for (let i = 0; i < this.cache.length; i++) {
// 			if (this.cache[i][0] === source) {
// 				return this.cache[i][1]
// 			}
// 		}
// 		return undefined
// 	}
// }

let cache = [] //缓存，为了解决环问题
function DeepClone(source) {
	if (source instanceof Object) {
		let cachedDist = findCache(source)
		if (cachedDist) {
			return cachedDist
		}
		let dist
		if (source instanceof Array) {
			dist = []
		} else if (source instanceof Function) {
			dist = function () {
				return source.apply(null, arguments)
			}
		} else if (source instanceof RegExp) {
			dist = new RegExp(source.source, source.flags)
		} else if (source instanceof Date) {
			dist = new Date(source)
		} else {
			dist = {}
		}
		cache.push([source, dist])
		for (let key in source) {
			if (source.hasOwnProperty(key)) {
				dist[key] = DeepClone(source[key])
			}
		}
		return dist
	}
	return source
}

function findCache(source) {
	for (let i = 0; i < cache.length; i++) {
		if (cache[i][0] === source) {
			return cache[i][1]
		}
	}
	return undefined
}

module.exports = DeepClone