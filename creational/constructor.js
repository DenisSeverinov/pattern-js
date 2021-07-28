//Создание объектов определенного типо через new

class Server {
	constructor(name, ip) {
		this.name = name,
		this.ip = ip
	}

	getUrl() {
		return `https://${this.ip}:80`
	}
}

const aws = new Server('AWS German', '12.23.34.45')
console.log(aws.getUrl());