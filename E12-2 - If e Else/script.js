const personName1 = prompt("Insira nome do personagem atacante")
const powerName = prompt("Insira nome do poder do personagem " + (personName1))
const power = parseFloat(prompt("Insira os pontos de poder do personagem " + (personName1)))

const personName2 = prompt("Insira nome do personagem defensor")
let life = parseFloat(prompt("Insira os pontos de vida do personagem " + (personName2)))
const defeat = parseFloat(prompt("Insira os pontos de defesa do personagem " + (personName2)))
const haveSheld = prompt("O personagem " + (personName2) + " possui escudo?")

let damage = 0

if (power > defeat && haveSheld === "nao") {
    damage = power - defeat
} else if (power > defeat && haveSheld === "sim") {
    damage = (power - defeat) / 2
}

damage -= life

alert(
    "O " + (personName1) + " usou o poder " + (powerName) + " e causou " + (damage) + " de dano em " + (personName2)
)
alert(
    personName1 + "\nPoder de ataque: " + power + "\n\n" +
    personName2 + "\nPontos de vida: " + life +
    "\nPoder de defesa: " + defeat + "\nPossui escudo: " + haveSheld
  )