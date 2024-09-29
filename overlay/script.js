//import { Chyron } from './Chyron/script.js'

//new Chyron( document.body )

/*var Stamp = new class {
    constructor(){
        
    }
}()*/

window.runtimefriends = {}

var registeredPlugins = {}
function register( id , object ) {
	registeredPlugins[ id ] = object
}

let ws

function connect() {
	ws = new WebSocket("ws://localhost:8080")
	ws.onopen = function () {
	}

	ws.onmessage = function (event) {
		var message = event.data
		console.log('message', message)
		try {
			var i = message.indexOf('|')
			var [plugin,message] = [message.slice(0,i), message.slice(i+1)]
			console.log('register', plugin)
			registeredPlugins[plugin].parse(message)
		} catch (e) {
			console.log("Ignored message: " + message, e)
		}
	}
	ws.onclose = function () {
		alert("Connection is closed...")
	}
}
connect( )

function loadPlugin( name , asDashboard ){
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
		let element = name + ( asDashboard ? "_dashboard" : "_widget" )
		console.log( element )
        document.getElementById( element ).style.display="block"
        
        let script = document.createElement("script")

		script.onload = function(){
			try{
				register( name , window.runtimefriends[name] )
			}catch{
				console.log( "Register of " + name + " failed.")
			}
		}
		
        script.src = '../plugins/' + name + '_widget.js'
		script.type = 'module'
        document.body.appendChild(script)



		

    })
}

loadPlugin( "chyron" , false)
loadPlugin( "financials" , false)
loadPlugin( "stamp" , false)
loadPlugin( "confetti" , false)

