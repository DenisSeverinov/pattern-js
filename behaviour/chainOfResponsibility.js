// Позволяет последовательно вызывать какие-либо операции у объекта и модифицировать их

class MySum {
	constructor(initialValue = 42) {
		this.sum = initialValue
	}

	add(value) {
		this.sum += value
		return this
	}
}

const sum1 = new MySum()

 console.log(sum1.add(8).add(9).add(3).add(4).sum);