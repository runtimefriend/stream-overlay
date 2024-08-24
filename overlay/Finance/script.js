

class FinancialData{
    constructor( item , value ){
        this.item = item
        this.value = value
    }
    load(){
        fetch('financials.json')
        .then(resp => resp.json())
        .then(jsonData => animateTerminal(jsonData))
    }
    parse( jsonData ){

    }
}

var Financials = class {
    parse(){
        
    }
}()


