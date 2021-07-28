// Определяет скелет будущего алгоритма, делегирует создание конкретного функционала в дочерние классы

class Employee {
	constructor(name, salary) {
		this.name = name
		this.salary = salary
	}

	responsibilities() {}

	work() {
		return `${this.name} выполняет ${this.responsibilities()}`
	}

	getPaid() {
		return `${this.name} имеет ЗП ${this.salary}`
	}
}

class Developer extends Employee {
	constructor(name, salary) {
		super(name, salary)
	}

	responsibilities() {
		return 'Процесс создания программ'
	}
}

class Tester extends Employee {
	constructor(name, salary) {
		super(name, salary)
	}

	responsibilities() {
		return 'Процесс тестирования'
	}
}

const dev = new Developer('Denis', 100000)
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Developer('Igor', 90000)
console.log(tester.getPaid());
console.log(tester.work());