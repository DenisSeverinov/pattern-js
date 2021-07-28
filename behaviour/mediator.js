// Позволяет выстраивать тесную комуникацию между объектами разного типа.
// Предоставляет абстракцию которая позволяет взаимодействовать группе объектов через друг друга

class User {
	constructor(name) {
		this.name = name
		this.room = null
	}

	send(message, to) {
		this.room.send(message, this, to)
	}

	receive(message, from) {
		console.log(`${from.name} => ${this.name}: ${message}`);
	}
}
class ChatRoom {
	constructor() {
		this.users = {}
	}

	register(user) {
		this.users[user.name] = user
		user.room = this
	}

	send(message, from, to) {
		if (to) {
			to.receive(message, from)
		} else {
			Object.keys(this.users).forEach(key => {
				if (this.users[key] !== from) {
					this.users[key].receive(message, from)
				}
			})
		}
	}
}

const denis = new User('Denis')
const elena = new User('Elena')
const igor = new User('Igor')

const room = new ChatRoom()

room.register(denis)
room.register(elena)
room.register(igor)

denis.send('Hello', elena)
