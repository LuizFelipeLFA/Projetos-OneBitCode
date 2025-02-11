let saiu = 0

do {
    let escolha = prompt(
        "Escolha uma das opçãoes a seguir:\n" +
        "1. Opãção teste 1\n" +
        "2. Opãção teste 2\n" +
        "3. Opãção teste 3\n" +
        "4. Opãção teste 4\n" +
        "5. Encerrar\n" 
    )

    switch (escolha) {
        case "1":
            alert("Voce escolheu a opção 1")
            break
        case "2":
            alert("Voce escolheu a opção 2")
            break
        case "3":
            alert("Voce escolheu a opção 3")
            break
        case "4":
            alert("Voce escolheu a opção 4")
            break
        case "5":
            alert("Voce escolheu a opção 5")
            alert("O programa esta sendo encerrado...")
            saiu = 1
            break
        default:
            alert("opcao invalida")
        
    }
} while (saiu !== 1)

