
let DURATION = 15

var Chyron = class {
    constructor( parent ){
        this.element = document.createElement('div')
        this.element.id = "chyron_widget"
        this.element.classList.add("chyron")
        parent.appendChild( this.element )
    }
    show( title , message ){
        this.element.display = "block"
        this.element.innerText = message
        setTimeout( this.hide , DURATION * 1000 )
    }
    hide(){
        this.element.display = "none"
    }
    //tangents
}

var ChyronDash = class {
    constructor( parent ){
        this.element = document.createElement("div")
        this.input = document.createElement("input")
        this.button = document.createElement("button")
        this.element.classList.add("chyron_dash")
        this.element.id = "chyron_dash_widget"
        parent.appendChild( this.element )
    }
    send(){
        this.input.value//send this to the overlay
    }
    //tangents
}



export { Chyron , ChyronDash }