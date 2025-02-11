let money = parseFloat(prompt("Quanto de dinheiro ce tem?"))
let repetir = 1

do {
    let controle = prompt(
        "Seu dinheiro disponivel é de " + money +
        "\n" +
        "\nEscolha o que quer fazer:" +
        "\n1. Adicionar dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Sair"
        )

    switch (controle) {
        case "1":
            money += parseFloat(prompt("Quanto de dinheiro quer adicionar?"))
            break
        case "2":
            money -= parseFloat(prompt("Quanto de dinheiro quer remover?"))
            break
        case "3":
            alert("Voce esta saindo do programa.")
            alert("O programa esta sendo encerrado...")
            repetir = 0
            break
    }
} while (repetir === 1)