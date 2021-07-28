// Позволяет интегрировать старый интерфейс класса в новый не ломая приложение

class OldCalc {
	operations(t1, t2, name) {
		switch(name) {
			case "add": return t1 + t2
			case "sub": return t1 - t2
			default: return NaN
		}
	}
}

class NewCalc {
	add(t1, t2) {
		return t1 + t2
	}

	sub(t1, t2) {
		return t1 - t2
	}
}

class CalcAdapter {
	constructor() {
		this.calc = new NewCalc()
	}

	operations(t1, t2, name) {
		switch(name) {
			case "add": return this.calc.add(t1, t2)
			case "sub": return this.calc.sub(t1, t2)
			default: return NaN
		}
	}
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(2, 2, 'add'));

const newCalc = new NewCalc()
console.log(newCalc.add(2, 2));

const adapterCalc = new CalcAdapter()
console.log(adapterCalc.operations(2, 2, 'add'));