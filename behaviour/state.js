// Управление несколькими состояниями в одном

class Ligth {
	constructor(light) {
		this.light = light
	}
}

class RedLigth extends Ligth {
 constructor() {
	 super('red')
 }

 sign() {
	 return "Стоп"
 }
}
class YelloLigth extends Ligth {
	constructor() {
		super('yello')
	}

	sign() {
		return "Готовься"
	}
}
 class GreenLigth extends Ligth {
	constructor() {
		super('green')
	}

	sign() {
		return "Едь"
	}
}

class TradicLigth {
	constructor() {
		this.states = [
			new RedLigth(),
			new YelloLigth(),
			new GreenLigth(),
		]
		this.current = this.states[0]
	}

	change() {
		const total = this.states.length
		let index = this.states.findIndex(ligth => ligth === this.current)

		if (index + 1 < total) {
			this.current = this.states[index + 1]
		} else {
			this.current = this.states[0]
		}
	}

	sign() {
		return this.current.sign()
	}
}

const traffic = new TradicLigth()
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());
traffic.change()