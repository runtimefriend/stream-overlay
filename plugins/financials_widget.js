
window.runtimefriends.financials = new class {
    constructor( ){
        financials_button.addEventListener("click",this.send)
    }
    load(){
        fetch('financials.json')
        .then(resp => resp.json())
        .then(jsonData => animateTerminal(jsonData))
    }
    parse( message ){
        try{
            this.save(parseFloat(message))
        } catch{
            ws.send(`error|financials|Error parsing input.`)
        }
    }
    save(value){

    }
    send(){
        ws.send(`financials|${chyron_title_input.value}|${chyron_profession_input.value}`)
        //console.log('sending')
        //document.body.dispatchEvent(new Event('send', {detail: 'test'}))
        //chyron_input.value//send this to the overlay
    }
    //tangents
}()