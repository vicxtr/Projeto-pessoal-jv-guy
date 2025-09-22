alert("bem-vindo ao jogo dos numeros!")
alert("adivinha o numero que eu to pensando, e ganhe moedas!")

let moedas
let dificuldade = parseInt(prompt("escolha um dificulade (1-facil de 0 a 10, 2-medio de 0 a 20, 3-dificil 0-30"))

if(dificuldade === 1){
    const numeroAdivinha = Math.random() * 10
    alert("se você adivinhar vc ganhará 10 moedas")
    let chute = parseInt(prompt("chute um numero:")) === numeroAdivinha ? chute = true : chute = false
    if(chute === true){
        alert("você acertou! ganhou 10 moedas!")
        moedas = 10
        alert("pausa pra loja!")
        alert(`
            JV STORE
            1 - PIZZA = 10
            2 - AGUA = 5
            3 - CELULAR = 20

            escolha um numero para comprar
            `)
        let compra = parseInt(prompt("1, 2 ou 3"))
        let preco1
        switch(compra){
            case 1:
                compra = "pizza"
                preco1 = 10
                break
            case 2:
                compra = "agua"
                preco1 = 5
                break
            case 3:
                compra = "celular"
                preco1 = 20
                break
        }
        alert("parabens, você comprou um celular")
    } else {
        alert("você errou! que pena, reinicie a pagina")
    }
}else if(dificuldade === 2){
    const numeroAdivinha = Math.random() * 20
    alert("se você adivinhar vc ganhará 10 moedas")
    let chute = parseInt(prompt("chute um numero:")) === numeroAdivinha ? chute = true : chute = false
    if(chute === true){
        alert("você acertou! ganhou 20 moedas!")
        moedas = 20
        alert("pausa pra loja!")
        alert(`
            JV STORE
            1 - PIZZA = 10
            2 - AGUA = 5
            3 - CELULAR = 20

            escolha um numero para comprar
            `)
        let compra = parseInt(prompt("1, 2 ou 3"))
        let preco1
        switch(compra){
            case 1:
                compra = "pizza"
                preco1 = 10
                break
            case 2:
                compra = "agua"
                preco1 = 5
                break
            case 3:
                compra = "celular"
                preco1 = 20
                break
        }
        alert("parabens, você comprou um celular")
    } else {
        alert("você errou! que pena, reinicie a pagina")
    }
}else if(dificuldade === 3){
        const numeroAdivinha = Math.random() * 30
    alert("se você adivinhar vc ganhará 10 moedas")
    let chute = parseInt(prompt("chute um numero:")) === numeroAdivinha ? chute = true : chute = false
    if(chute === true){
        alert("você acertou! ganhou 30 moedas!")
        moedas = 30
        alert("pausa pra loja!")
        alert(`
            JV STORE
            1 - PIZZA = 10
            2 - AGUA = 5
            3 - CELULAR = 20

            escolha um numero para comprar
            `)
        let compra = parseInt(prompt("1, 2 ou 3"))
        let preco1
        switch(compra){
            case 1:
                compra = "pizza"
                preco1 = 10
                break
            case 2:
                compra = "agua"
                preco1 = 5
                break
            case 3:
                compra = "celular"
                preco1 = 20
                break
        }
        alert("parabens, você comprou um celular")
    } else {
        alert("você errou! que pena, reinicie a pagina")
    }
}else if(dificuldade !== Number){
    alert("diigte um valor valido!")
} else {
    alert("algo aconteceu! reinicie a pagina")
}