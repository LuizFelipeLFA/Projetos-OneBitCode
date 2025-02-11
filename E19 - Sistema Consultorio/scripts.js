let menu = ""
let pacientes = ["Fagner", "Cassio", "Garro", "Yuri"]

do {
    let pacientesOrdenados = ""
    for (let i = 0; i < pacientes.length; i++) {
        pacientesOrdenados += (i + 1) + "º - " + pacientes[i] + "\n"
    }

    menu = prompt(
        "Pacientes na fila de espera: \n" + 
        pacientesOrdenados +
        "\n\nEscolha uma opçao:" +
        "\n\n1. Novo paciente" +
        "\n2. Consultar paciente" +
        "\n3. Sair"
        )

    switch (menu) {
        case "1":
            let addPaciente = pacientes.push(prompt("Qual o nome do paciente?"))
            alert("O paciente foi adicionado a fila de espera!")
            break
        case "2":
            let remPaciente = pacientes.shift()
            if (remPaciente) {
                alert("O paciente " + remPaciente + " foi consultado!")
            } else {
                alert("Nenhum paciente foi encontrado...")
            }
            break
        case "3":
            alert("Saindo do programa...")
        default:
            alert("Opção invalida!")
            break
    }
} while (menu != "3");