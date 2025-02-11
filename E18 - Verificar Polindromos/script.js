const world = prompt("Insira a palavra que quer verificar se e um polindromo:")
let = inverseWorld = ""

for (let i = world.length - 1; i >= 0; i--) {
    inverseWorld += world[i]
}

if (world === inverseWorld) {
    alert(
        "Esta palavra é um polindromo!" +
        "\n\nPalavra original: " + world +
        "\n\nPalavra invertida: " + inverseWorld
    )
} else {
    alert(
        "Esta palavra não é um polindromo!" +
        "\n\nPalavra original: " + world +
        "\n\nPalavra invertida: " + inverseWorld
    )
}