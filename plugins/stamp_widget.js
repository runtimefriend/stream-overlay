
let commonStamps = [
    "Idiot" ,
    "Racist" ,
]

window.runtimefriends.stamp = new class {
    constructor( ){
        this.DURATION = 10
        this.timeout = null
        this.hide()
        stamp_button.addEventListener("click",this.send)
    }
    parse( message ){
        message = message.split("|")
        if ( message.length == 1 ){
            this.show(message[0])
        }
    }
    show( title ){
        stamp_widget.style.display = "block"
        stamp_title.innerText = title
        if ( this.timeout ) {
            clearTimeout( this.timeout )
        }
        this.timeout = setTimeout( this.hide , this.DURATION * 1000 )
    }
    hide(){
        stamp_widget.style.display = "none"
    }
    send(){
        ws.send(`stamp|${stamp_title_input.value}`)
        //console.log('sending')
        //document.body.dispatchEvent(new Event('send', {detail: 'test'}))
        //chyron_input.value//send this to the overlay
    }
    //tangents
}()

