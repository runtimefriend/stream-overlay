// import { Chyron , ChyronDash } from '../overlay/Chyron/script.js'

let commonProfessions = [
    "Geneologist" ,
    "Attorney" ,
    "Medical Practitioner" ,
    "Historian" ,
]

let commonStamps = [
    "Idiot" ,
    "Racist" ,
]

window.ws = null

let status = HTML_socket_status

function populateCommonProfessions() {
    for ( let profession of commonProfessions ){
        let element = document.createElement( 'div' )
        element.innerText = profession
    }
}

function main(){
    populateCommonProfessions()
}

function connectWs() {
	ws = new WebSocket("ws://localhost:8080/echo")
	ws.onopen = function () {
		ws.send("Hello World from client")
        status.innerText = 'connected'
	}

	ws.onmessage = function (event) {
		var received_msg = event.data
	}
	ws.onclose = function () {
		alert("Connection is closed...")
        status.innerText = 'closed'
	}
}

connectWs( )

main()

function loadPlugin( name ){

    fetch('../plugins/' + name + '_widget.html')
    .then(resp => resp.text())
    .then(htmlText => {
        // Initialize the DOM parser
        let parser = new DOMParser()

        // Parse the text
        let doc = parser.parseFromString(htmlText, "text/html")
        let div = document.createElement('div')
        div.innerHTML = htmlText
        document.body.appendChild( div )
        document.getElementById(name + "_dashboard").style.display="block"
        
        let script = document.createElement("script")
        script.src = '../plugins/' + name + '_widget.js'
        document.body.appendChild(script)
    })
}


loadPlugin( "chyron" )