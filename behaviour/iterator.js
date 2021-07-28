// Создание объекта у которого мы сможем последовательно получать доступ к информации

class MyIterator {
	constructor(data) {
		this.index = 0
		this.data = data
	}

	[Symbol.iterator]() {
		return {
			next: () => {
				if (this.index < this.data.length) {
					return {
						value: this.data[this.index++],
						done: false,
					}
				} else {
					this.index = 0
					return {
						value: undefined,
						done: true,
					}
				}
			}
		}
	}
}

const iterator = new MyIterator(['This', 'is', 'iterator'])

for (const val of iterator) {
	console.log(val);
}