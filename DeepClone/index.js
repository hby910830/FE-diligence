let cache = [] //缓存，为了解决环问题
function deepClone(source) {
	if (source instanceof Object) {
		let cachedDist = findCache(source)
		if(cachedDist){
			return cachedDist
		}
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
		cache.push([source,dist])
		for (let key in source) {
			if (source.hasOwnProperty(key)) {
				dist[key] = deepClone(source[key])
			}
		}
		return dist
	}
	return source
}

function findCache(source){
	for(let i=0; i< cache.length;i++){
		if(cache[i][0] === source){
			return cache[i][1]
		}
	}
	return undefined
}

module.exports = deepClone