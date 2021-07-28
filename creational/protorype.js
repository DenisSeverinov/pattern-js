// Использование Object.create() для наследование прототипа

const car = {
	wheels: 4,

	init() {
		console.log(`I have ${this.wheels} колеса, мой владелец ${this.owner}`);
	}
}

const carWithOwner = Object.create(car, {
	owner: {
		value: "Denis",
	}
})

console.log(carWithOwner.init());