// Используется для случаев когда класс должен иметь только один экземпляр
// на время работы приложения и есть какая-то точка доступа к этому экземпляру

class DataBase {
	constructor(data) {
		if (DataBase.exists) {
			return DataBase.instance
		}

		DataBase.instance = this
		DataBase.exists = true
		this.data = data
	}

	getData() {
		return this.data
	}
}

const mongo = new DataBase('MongoDB')
console.log(mongo.getData());

const mysql = new DataBase('MySQL')
console.log(mysql.getData());