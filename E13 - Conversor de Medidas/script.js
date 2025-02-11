const medidaInicial = parseFloat(prompt("Insira a medida em Metros a ser convertida:"))
const medidaEscolhida = prompt(
    "Escolha a medida para qual quer converter:" +
    "\n" +
    "milímetro (mm)" +
    "\ncentímetro (cm)" +
    "\ndecímetro (dm)" +
    "\ndecâmetro (dam)" +
    "\nhectômetro (hm)" +
    "\nquilômetro (km)"
    )

switch(medidaEscolhida) {
    case "mm":
        alert("O resultado da conversão foi: " + medidaInicial * 1000)
        break
    case "cm":
        alert("O resultado da conversão foi: " + medidaInicial * 100)
        break
    case "dm":
        alert("O resultado da conversão foi: " + medidaInicial * 10)
        break
    case "dam":
        alert("O resultado da conversão foi: " + medidaInicial / 10)
        break
    case "hm":
        alert("O resultado da conversão foi: " + medidaInicial / 100)
        break
    case "km":
        alert("O resultado da conversão foi: " + medidaInicial / 1000)
        break
    default:
        alert("Opção inválida!")
}