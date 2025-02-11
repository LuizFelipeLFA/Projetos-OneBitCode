let menu = 6

function triangulo (base, altura) {
    let result = (base * altura) / 2
    return result
}

function retangulo (base, altura) {
    let result = base * altura
    return result
}

function quadrado (lado) {
    let result = lado * lado
    return result
}

function trapezio (baseMaior, BaseMenor, alturaTp) {
    let result = (baseMaior + BaseMenor) * alturaTp / 2
    return result
}

function circulo (raio) {
    let result = 3.14 * (raio * raio)
    return result
}

do { 
    menu = prompt(
        "Calcule a area das formas geometricas:\n" +
        "\n1. Area do triangulo" +
        "\n2. Area do retangulo" +
        "\n3. Area do quadrado" +
        "\n4. Area do trapezio" +
        "\n5. Area do circulo" +
        "\n\n6. Sair"
        )

    switch (menu) {
        case "1":
            let baseT = prompt("Qual a base do triangulo?")
            let alturaT = prompt("Qual a altura do triangulo?")
            alert("A area do triangulo é de: " + triangulo(baseT, alturaT))
            break
        case "2":
            let baseR = prompt("Qual a base do retangulo?")
            let alturaR = prompt("Qual a altura do retangulo?")
            alert("A area do retangulo é de: " + retangulo(baseR, alturaR))
            break
        case "3":
            let ladosQ = prompt("Qual a quantidade de lados do quadrado?")
            alert("A area do quadrado é de: " + quadrado(ladosQ))
            break
        case "4":
            let bMaior = parseFloat(prompt("Qual o tamanho da base maior do trapézio?"))
            let bMenor = parseFloat(prompt("Qual o tamanho da base menor do trapézio?"))
            let alturaTpz = prompt("Qual a altura do trapézio?")
            alert("A area do trapézio é de: " + trapezio(bMaior, bMenor, alturaTpz))
            break
        case "5":
            let raioC = prompt("Qual o raio do círculo?")
            alert("A área do círculo é de: " + circulo(raioC))
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Esta não é uma opção válida!")
    }

} while (menu !== "6")