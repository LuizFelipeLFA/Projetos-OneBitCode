let baralho = []
let menu = ""

do {
    menu = prompt(
        "Cartas no baralho: " + baralho.length +
        "\n\n" +
        "1. Adicionar cartas no baralho." +
        "\n2. Remover cartas no baralho." +
        "\n3. Sair."
        )

    switch(menu) {
        case "1":
            let addCarta = baralho.unshift(prompt("Qual carta deseja adicionar?"))
            alert("Você adicionou uma carta ao baralho!")
            break
        case "2":
            let remCarta = baralho.shift()
            if (remCarta) {
                alert("Você retirou a carta: " + remCarta)               
            } else {
                alert("Não existem cartas no baralho!")
            }
            break
        case "3":
            alert("Saindo do programa...")
            break
        default:
            alert("Opção invalida!")
    }

} while( menu !== "3")