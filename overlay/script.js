

var financials = [
    FinancialData( "Pop Webcam" , -30 ) ,
    FinancialData( "Push Webcam" , -30 ) ,
    FinancialData( "Push Webcam Neck Mount" , -10 ) ,
    FinancialData( "Push Webcam Neck Mount" , -10 ) ,
]

class FinancialData{
    constructor( item , value ){
        this.item = item
        this.value = value
    }
}

var Financials = class {
    parse(){
        
    }
}()



var Footer = class {
    constructor(){
        
    }
    showNotProfession( profession ){
        HTML_footerMessage.innerText = `We are not licensed ${profession}s.`
    }
    //tangents
}()

var Stamp = class {
    constructor(){
        
    }
    showNotProfession( profession ){

    }
}()




let ws

function connect() {
	ws = new WebSocket("ws://localhost:8080/echo")
	ws.onopen = function () {
		ws.send("Hello World from client")
	}

	ws.onmessage = function (event) {
		var received_msg = event.data
	}
	ws.onclose = function () {
		alert("Connection is closed...")
	}
}
connect( )
