import { Chyron } from './Chyron/script.js'

new Chyron( document.body )

var Stamp = new class {
    constructor(){
        
    }
}()




let ws

function connect() {
	ws = new WebSocket("ws://localhost:8080/echo")
	ws.onopen = function () {
		ws.send("Hello World from client|test")
	}

	ws.onmessage = function (event) {
		var received_msg = event.data
	}
	ws.onclose = function () {
		alert("Connection is closed...")
	}
}
connect( )
