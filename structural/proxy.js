// Позволяет гибко определять работу приложения (избавиться от лишних запросов)

const networkFetch = (url) => {
	return `${url} - Ответ с сервера`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
	apply(target, thisArg, args) {
		const url = args[0]
		if (cache.has(url)) {
			return `${url} - Ответ из кэша`
		} else {
			cache.add(url)
			return Reflect.apply(target, thisArg, args)
		}
	}
})
