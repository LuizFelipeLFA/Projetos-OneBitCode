let menu = "6"
let vagasDisp = []

do {
    menu = prompt(
        "Vagas de Emprego" +
        "\n\n1. Listar vagas disponiveis." +
        "\n2. Criar nova vaga." +
        "\n3. Visualizar vagas." +
        "\n4. Inscrever um candidato em uma vaga." +
        "\n5. Excluir uma vaga." +
        "\n6. Sair" 
        )

    switch(menu) {
        case "1":
            listarVagas()
            break
        case "2":
            criarVaga()
            break
        case "3":
        case "4":
        case "5":
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção invalida!")
        
    }


} while (menu !== "6")

function listarVagas() {
    for (i = 0; i < vagasDisp.length; i++) {
        alert(
            "Vagas disponíveis:" +
            "\n\n" +
            "Vaga: " + i + ":" +
            vagasDisp[i] +
            "\n"
            )

    }

}

function criarVaga() {
    let nomeVaga = prompt("Qual o nome a vaga?")
    let descricaoVaga = prompt("Qual a descricao da vaga?")
    let dataLimite = prompt("Qual a datalimite da vaga?")
    vagasDisp.push("Nome da vaga: " + nomeVaga + "\n\nDescricao da vaga: \n" + descricaoVaga + "\n\nData limite da vaga: " + dataLimite)
}