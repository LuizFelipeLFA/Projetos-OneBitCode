let menu = 0
let imoveis = []

do {
    menu = prompt(
        "Numero de imoveis cadastrado: " + imoveis.length +
        "\n\nEscolha uma opção abaixo:" + 
        "\n\n1. Visualizar imoveis" +
        "\n2. Salvar novo Imovel" +
        "\n3. Sair"
        )
    
        switch (menu) {
            case "1":
                for (i = 0; i < imoveis.length; i++) {
                    alert(
                        "Imovel: " + (i + 1) +
                        "\n\nNome do proprietario: " + imoveis[i].propName + "\n" +
                        "Quantidade de quartos: " + imoveis[i].quantQuartos + "\n" +
                        "Quantidade de banheiros " + imoveis[i].quantBanheiros + "\n" +
                        "Possui garagem: " + imoveis[i].garagem
                        )
                }

                break
            case "2":
                const imovel = {}

                imovel.propName = prompt("Digite o nome do proprietario.")
                imovel.quantQuartos = prompt("Digite a quantidade de quartos")
                imovel.quantBanheiros = prompt("Digite a quantidade de banheiros")
                imovel.garagem = prompt("O imovel possui garagem? Sim/Não")

                const confirmar = confirm(
                    "Deseja salvar este imovel?\n" +
                    "\n\nNome do proprietario: " + imovel.propName + "\n" +
                    "Quantidade de quartos: " + imovel.quantQuartos + "\n" +
                    "Quantidade de banheiros " + imovel.quantBanheiros + "\n" +
                    "Possui garagem: " + imovel.garagem
                )

                if (confirmar) {
                    imoveis.push(imovel)
                }

                break
            case "3":
                alert("Saindo do programa...")
                menu = 3
                break
            default:
                alert("Opção invalida!")
        }

} while (menu !== 3)