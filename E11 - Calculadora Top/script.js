const entrada1 = prompt("Insira o primeiro numero:")
const entrada2 = prompt("Insira o segundo numero:")

const primeiroNumero = parseFloat(entrada1);
const segundoNumero = parseFloat(entrada2)

alert(
    "Resultado das operações:\n" +

    "\nSoma dos numeros: " + (primeiroNumero + segundoNumero) +
    "\nSubtração dos numeros: " + (primeiroNumero - segundoNumero) +
    "\nDivisão dos numeros: " + (primeiroNumero / segundoNumero) +
    "\nMultiplicação dos numeros " + (primeiroNumero * segundoNumero)
)