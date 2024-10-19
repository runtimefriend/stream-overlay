// import { Chyron , ChyronDash } from '../overlay/Chyron/script.js'

window.runtimefriends = {}





//window.ws = null

//let status = HTML_socket_status

/*function populateCommonProfessions() {
    for ( let profession of commonProfessions ){
        let element = document.createElement( 'div' )
        element.innerText = profession
    }
}*/

/*function main(){
    populateCommonProfessions()
}*/

/*function connectWs() {
	ws = new WebSocket("ws://194.5.156.211:8080/echo")
	ws.onopen = function () {
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

connectWs( )*/

//main()
function getAddressAndPassword(){

}

function connect(){
    let [ address , password ] = getAddressAndPassword( )
    //load php password and address from file
    //GET on gethost.php address with password
    //receive host offer from php
    //generate answer from offer
    //send answer and password to sendconnection.php
}


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
        script.type = 'module'
        script.src = '../plugins/' + name + '_widget.js'
        document.body.appendChild(script)
    })
}

function getFile( path ) {
    var dataObject = document.createElement( 'object' )
    dataObject.type = "text/plain"
    dataObject.data = path
    document.body.appendChild( dataObject )
    console.log( dataObject )
    return dataObject.innerHTML
}

function test(){
    var buk = document.createElement( 'object' )
    buk.type = "text/plain"
    buk.data = "go.sum"
    document.body.appendChild(buk)
}

function test2(){
    var buk = document.createElement( 'div' )
    buk.innerText = getFile( "../plugins/chyron_widget.html" )
    document.body.appendChild(buk)

    console.log( buk )
}

test()



/*var book = document.createElement( 'div' )
book.innerHTML = buk.innerHTML
document.body.appendChild( book )*/

//loadPlugin( "chyron" )
//loadPlugin( "financials" )
//loadPlugin( "stamp" )
//loadPlugin( "confetti" )