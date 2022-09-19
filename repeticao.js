
let endereço = {
    bairro : "Várzea",
    cidade : "Recife",
    estado : "Pernambuco"
}

function dados(endereço){
    for (const cadastro in endereço){
    console.log(`${cadastro}: ${endereço[cadastro]}`)
    }

}

dados(endereço)

let cores  = ["preto", "roxo", "azul"]

function lista(cores){
    for (const caracteristicas of cores){
        console.log(`${caracteristicas}`)
    }
    
}
lista(cores)