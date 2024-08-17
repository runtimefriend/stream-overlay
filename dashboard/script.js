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

function populateCommonProfessions() {
    for ( let profession of commonProfessions ){
        let element = document.makeElement( 'div' )
        element.innerText = profession
    }
}

function main(){
    populateCommonProfessions()
}

main()