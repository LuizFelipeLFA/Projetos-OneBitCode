const nmrEscolhido = parseFloat(prompt("Qual o numero quer iremos verificar a tabuada?"))

let resultados = ""

for(let i = 1; i <=20; i++){
    resultados += "- " + nmrEscolhido + " x " + i + " -> " + i * nmrEscolhido + "\n"
}

alert(
    "Aqui está o resultado da tabuada de " + nmrEscolhido +
    "\n" + resultados
    )