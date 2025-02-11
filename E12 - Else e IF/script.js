const carname1 = prompt("Insira nome do Carro 1")
const carspeed1 = parseFloat(prompt("Insira a velociodade do Carro 1"))

const carname2 = prompt("Insira nome do Carro 2")
const carspeed2 = parseFloat(prompt("Insira a velociodade do Carro 2"))

if (carspeed1 > carspeed2) {
    alert(
        "O " + (carname1) + " esta mais rápido que o " + (carname2)
    ) 
} else if (carspeed1 < carspeed2) {
    alert(
        "O " + (carname2) + " esta mais rápido que o " + (carname1)
    ) 
} else {
    alert(
        "O " + (carname1) + " e o " + (carname2) + " possuem a mesma velocidade"
    ) 
}
