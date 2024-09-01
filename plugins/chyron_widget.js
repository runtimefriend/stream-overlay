
var Chyron = new class {
    constructor( ){
        this.DURATION = 10
        try{
            register( "chyron" , this )
        }catch{}
        chyron_button.addEventListener("click",this.send)
    }
    parse( message ){
        message = message.split("|")
        if ( message.length == 2 ){
            this.show(message[0],message[1])
        }
    }
    show( title , message ){
        chyron_widget.style.display = "block"
        chyron_title.innerText = title
        chyron_profession.innerText = message
        setTimeout( this.hide , this.DURATION * 1000 )
    }
    hide(){
        chyron_widget.style.display = "none"
    }
    send(){
        ws.send(`chyron|${chyron_title_input.value}|${chyron_profession_input.value}`)
        //console.log('sending')
        //document.body.dispatchEvent(new Event('send', {detail: 'test'}))
        //chyron_input.value//send this to the overlay
    }
    //tangents
}()

