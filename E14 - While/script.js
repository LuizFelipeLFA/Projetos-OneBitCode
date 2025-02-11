const nomeTurista = prompt("Qual o seu nome?")
let jaVisitou = prompt("Você já visitou alguma cidade?")

let contagem = 0
let nomeCidade = ""

while (jaVisitou === "sim") {
    let cidade = prompt("Digite o nome da cidade visitada:")
    nomeCidade += " - " + cidade + "\n"
    contagem++
    jaVisitou = prompt("Já visitou alguma outra cidade?")
} 

alert(
    "Nome do turista: " + nomeTurista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nAs cidades que voce visitou foram:\n" + nomeCidade    
    )