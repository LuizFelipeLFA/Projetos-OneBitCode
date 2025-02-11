const primeiroNome = prompt("Digite seu primeiro nome")
const segundoNome = prompt("Digite seu segundo nome")
const areaAtuacao = prompt("Digite sua area de atuação")
const dataNascimento = prompt("Digite sua data de nascimento")

alert(
    "Usuario cadastrado com sucesso!\n" +

    "\nNome: " + primeiroNome + " " + segundoNome +
    "\nArea de atuação: " + areaAtuacao +
    "\nIdade: " + (2024 - dataNascimento) +
    "" 
)