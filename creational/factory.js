// Частое создание однотипных объектов (фабрика)

class SimpleMembership {
	constructor(name) {
		this.name = name
		this.cost = 50
	}
}

class StandardMembership {
	constructor(name) {
		this.name = name
		this.cost = 150
	}
}

class PremiumMembership {
	constructor(name) {
		this.name = name
		this.cost = 500
	}
}

class MemberFactory {
	static list = {
		simple: SimpleMembership,
		standart: StandardMembership,
		premium: PremiumMembership
	}

	create(name, type = 'simple') {
		const Membership = MemberFactory.list[type] || MemberFactory.list.simple
		const member = new Membership(name)
		member.define = function() {
			console.log(`${this.name}: ${this.cost}`);
		}

		return member
	}
}

const factory = new MemberFactory()

const members = [
	factory.create('Denis', 'premium'),
	factory.create('Elena', 'standard'),
	factory.create('Vitaliy', 'premium'),
]
console.log(members);