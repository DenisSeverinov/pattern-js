// Можем добавлять новое поведение или функционал для существующих классов

class Server {
	constructor(ip, port) {
		this.ip = ip
		this.port = port
	}

	get url() {
		return `https://${this.ip}:${this.port}`
	}
}

const aws = (server) => {
	server.isAws = true
		server.awsInfo = function() {
			return server.url
		}
	return server
}

const s1 = aws(new Server('12.23.34.45', 8080))
console.log(s1.awsInfo());